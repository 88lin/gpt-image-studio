//! 更改默认保存地址后，把原目录中的内容移动到新目录。逐个移动原目录的顶层条目：
//! 同盘用不替换已有目标的改名；跨盘先复制到新目录（保留修改时间与属性）并核对大小，再删除源，
//! 复制失败时删除本次创建的不完整副本、源保持不动。新目录中已有同名条目时改用“名称 (2)”等，
//! 不覆盖任何已有文件；任一条目失败都不影响其他条目，已移动的留在新目录，未移动的留在原处
use std::ffi::OsStr;
use std::fs;
use std::io::{self, ErrorKind};
use std::path::{Path, PathBuf};

use serde::Serialize;

#[derive(Debug, Default, PartialEq, Eq)]
pub struct DirStats {
    pub files: u64,
    pub bytes: u64,
}

/// 同时带隐藏和系统属性的文件，典型是 desktop.ini：已知文件夹靠它显示中文名和图标，迁移时留在原处
fn is_hidden_system(meta: &fs::Metadata) -> bool {
    #[cfg(windows)]
    {
        use std::os::windows::fs::MetadataExt;
        // FILE_ATTRIBUTE_HIDDEN | FILE_ATTRIBUTE_SYSTEM
        meta.file_attributes() & 0x6 == 0x6
    }
    #[cfg(not(windows))]
    {
        let _ = meta;
        false
    }
}

/// 递归统计文件数与总大小，不跟随链接；读取失败的条目跳过。
/// keep_source 时与 move_contents 一致，不计顶层的隐藏系统文件
pub fn dir_stats(dir: &Path, keep_source: bool) -> DirStats {
    let mut stats = DirStats::default();
    let mut stack = vec![dir.to_path_buf()];
    while let Some(current) = stack.pop() {
        let Ok(entries) = fs::read_dir(&current) else {
            continue;
        };
        for entry in entries.flatten() {
            let Ok(meta) = fs::symlink_metadata(entry.path()) else {
                continue;
            };
            if meta.is_dir() {
                stack.push(entry.path());
                continue;
            }
            if keep_source && current == dir && is_hidden_system(&meta) {
                continue;
            }
            stats.files += 1;
            stats.bytes += meta.len();
        }
    }
    stats
}

/// 两个已规范化的目录相同或一个位于另一个之中
pub fn is_nested(a: &Path, b: &Path) -> bool {
    a.starts_with(b) || b.starts_with(a)
}

/// 与保存文件相同的改名规则：原名，再依次为“名称 (2).扩展名”……（文件夹为“名称 (2)”）
fn candidates<'a>(
    dir: &'a Path,
    name: &'a OsStr,
    is_dir: bool,
) -> impl Iterator<Item = PathBuf> + 'a {
    let base = Path::new(name);
    let (stem, ext) = match (is_dir, base.file_stem(), base.extension()) {
        (false, Some(stem), Some(ext)) => (stem.to_string_lossy(), Some(ext.to_string_lossy())),
        _ => (name.to_string_lossy(), None),
    };
    std::iter::once(dir.join(name)).chain((2..=999).map(move |n| match &ext {
        Some(ext) => dir.join(format!("{stem} ({n}).{ext}")),
        None => dir.join(format!("{stem} ({n})")),
    }))
}

#[cfg(windows)]
pub(crate) fn wide(path: &Path) -> Vec<u16> {
    use std::os::windows::ffi::OsStrExt;
    path.as_os_str().encode_wide().chain(Some(0)).collect()
}

/// 同盘改名，目标已存在时报 AlreadyExists 而不替换；跨盘时报 Windows 的 ERROR_NOT_SAME_DEVICE
#[cfg(windows)]
fn rename_noreplace(src: &Path, dst: &Path) -> io::Result<()> {
    use windows_sys::Win32::Storage::FileSystem::MoveFileExW;
    // 不带 MOVEFILE_REPLACE_EXISTING 和 MOVEFILE_COPY_ALLOWED
    if unsafe { MoveFileExW(wide(src).as_ptr(), wide(dst).as_ptr(), 0) } == 0 {
        return Err(io::Error::last_os_error());
    }
    Ok(())
}

/// 非 Windows 平台只用于编译和测试：先确认目标不存在再改名
#[cfg(not(windows))]
fn rename_noreplace(src: &Path, dst: &Path) -> io::Result<()> {
    if fs::symlink_metadata(dst).is_ok() {
        return Err(ErrorKind::AlreadyExists.into());
    }
    fs::rename(src, dst)
}

fn is_cross_device(err: &io::Error) -> bool {
    // Windows 的 ERROR_NOT_SAME_DEVICE
    err.kind() == ErrorKind::CrossesDevices || (cfg!(windows) && err.raw_os_error() == Some(17))
}

/// 删除文件或文件夹；只读文件先去掉只读属性
pub(crate) fn remove_any(path: &Path) -> io::Result<()> {
    let meta = fs::symlink_metadata(path)?;
    if meta.is_dir() {
        return fs::remove_dir_all(path);
    }
    match fs::remove_file(path) {
        Err(err) if err.kind() == ErrorKind::PermissionDenied && meta.permissions().readonly() => {
            let mut perms = meta.permissions();
            #[allow(clippy::permissions_set_readonly_false)]
            perms.set_readonly(false);
            fs::set_permissions(path, perms)?;
            fs::remove_file(path)
        }
        other => other,
    }
}

/// 复制单个文件，目标已存在时报 AlreadyExists；保留修改时间与属性
#[cfg(windows)]
pub(crate) fn copy_file(src: &Path, dst: &Path) -> io::Result<()> {
    use windows_sys::Win32::Storage::FileSystem::{CopyFileExW, COPY_FILE_FAIL_IF_EXISTS};
    let ok = unsafe {
        CopyFileExW(
            wide(src).as_ptr(),
            wide(dst).as_ptr(),
            None,
            std::ptr::null(),
            std::ptr::null_mut(),
            COPY_FILE_FAIL_IF_EXISTS,
        )
    };
    if ok == 0 {
        return Err(io::Error::last_os_error());
    }
    Ok(())
}

#[cfg(not(windows))]
pub(crate) fn copy_file(src: &Path, dst: &Path) -> io::Result<()> {
    let meta = fs::metadata(src)?;
    let mut reader = fs::File::open(src)?;
    let mut writer = fs::OpenOptions::new()
        .write(true)
        .create_new(true)
        .open(dst)?;
    io::copy(&mut reader, &mut writer)?;
    writer.set_times(fs::FileTimes::new().set_modified(meta.modified()?))?;
    writer.set_permissions(meta.permissions())
}

/// 创建目标：文件夹建空目录，文件直接复制；目标已存在时报 AlreadyExists，不覆盖
fn create_target(src: &Path, dst: &Path, meta: &fs::Metadata) -> io::Result<()> {
    if meta.file_type().is_symlink() {
        return Err(io::Error::new(
            ErrorKind::Unsupported,
            "不支持跨盘移动快捷链接",
        ));
    }
    if meta.is_dir() {
        return fs::create_dir(dst);
    }
    // CopyFileExW 遇到同名文件夹报的是拒绝访问而不是已存在，先检查，任何已有条目都按名称被占用处理
    if fs::symlink_metadata(dst).is_ok() {
        return Err(ErrorKind::AlreadyExists.into());
    }
    copy_file(src, dst).inspect_err(|err| {
        // 失败时只清理本次新建的不完整文件：已存在的同名文件会报 AlreadyExists，
        // 检查后才出现的同名文件夹不是文件，都不会被删除
        if err.kind() == ErrorKind::AlreadyExists {
            return;
        }
        if fs::symlink_metadata(dst).is_ok_and(|m| m.is_file()) {
            let _ = fs::remove_file(dst);
        }
    })
}

/// 补全已由 create_target 创建的 dst：文件核对大小，文件夹逐项复制其内容
fn copy_into(src: &Path, dst: &Path, meta: &fs::Metadata) -> io::Result<()> {
    if !meta.is_dir() {
        if fs::metadata(dst)?.len() != meta.len() {
            return Err(io::Error::other("复制后大小不一致"));
        }
        return Ok(());
    }
    for entry in fs::read_dir(src)? {
        let entry = entry?;
        let (from, to) = (entry.path(), dst.join(entry.file_name()));
        let meta = fs::symlink_metadata(&from)?;
        create_target(&from, &to, &meta)?;
        copy_into(&from, &to, &meta)?;
    }
    Ok(())
}

#[derive(Debug)]
enum MoveError {
    /// 目标名称已被占用，换下一个名称重试
    Taken,
    Failed(io::Error),
    /// 已完整复制到新地址，但删除原位置失败
    NotRemoved(io::Error),
}

/// 跨盘移动：先单独创建顶层目标，失败直接返回（不是本次创建的不能删除）；
/// 创建成功后任何失败都删除该目标，源保持不动；复制完整后才删除源
fn copy_then_remove(src: &Path, dst: &Path) -> Result<(), MoveError> {
    let meta = fs::symlink_metadata(src).map_err(MoveError::Failed)?;
    match create_target(src, dst, &meta) {
        Ok(()) => {}
        Err(err) if err.kind() == ErrorKind::AlreadyExists => return Err(MoveError::Taken),
        Err(err) => return Err(MoveError::Failed(err)),
    }
    if let Err(err) = copy_into(src, dst, &meta) {
        if let Err(cleanup) = remove_any(dst) {
            log::warn!("删除不完整的副本 {} 失败：{cleanup}", dst.display());
        }
        return Err(MoveError::Failed(err));
    }
    remove_any(src).map_err(MoveError::NotRemoved)
}

/// 目标已有任何条目时直接换名：改名到同名文件夹时报的错误码不一定是“已存在”
fn move_entry(src: &Path, dst: &Path) -> Result<(), MoveError> {
    if fs::symlink_metadata(dst).is_ok() {
        return Err(MoveError::Taken);
    }
    match rename_noreplace(src, dst) {
        Ok(()) => Ok(()),
        Err(err) if err.kind() == ErrorKind::AlreadyExists => Err(MoveError::Taken),
        Err(err) if is_cross_device(&err) => copy_then_remove(src, dst),
        Err(err) => Err(MoveError::Failed(err)),
    }
}

/// 未能完整移动的条目：path 为原位置的完整路径（不带 \\?\ 前缀，便于用户复制查找）
#[derive(Debug, Serialize)]
pub struct MoveIssue {
    pub path: String,
    pub error: String,
}

#[derive(Debug, Default, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct MoveReport {
    /// 移动成功的顶层条目数
    pub moved: usize,
    /// 其中因重名改名的条目数
    pub renamed: usize,
    /// 未能移动的条目及原因，仍留在原目录
    pub failed: Vec<MoveIssue>,
    /// 已复制到新地址、但原位置未能删除的条目及原因
    pub not_removed: Vec<MoveIssue>,
    /// 原目录移空后已删除
    pub source_removed: bool,
}

/// 把 from 中的全部顶层条目移动到 to（不存在时创建）。调用方需先确认两者不相同、互不包含。
/// keep_source 为 true 时（系统已知文件夹）即使移空也不删除原目录本身
pub fn move_contents(from: &Path, to: &Path, keep_source: bool) -> io::Result<MoveReport> {
    fs::create_dir_all(to)?;
    let shown = from.to_path_buf();
    // 原地址本身是联接点或符号链接时，移空后不删除（canonicalize 会解析到链接目标）
    let is_link = fs::symlink_metadata(from).is_ok_and(|meta| meta.file_type().is_symlink());
    // 规范化为带 \\?\ 前缀的绝对路径，支持超过 260 个字符的长路径
    let (from, to) = (from.canonicalize()?, to.canonicalize()?);
    // 先收集再移动，避免边遍历边改动目录
    let entries: Vec<_> = fs::read_dir(&from)?.collect();
    let mut report = MoveReport::default();
    for entry in entries {
        let entry = match entry {
            Ok(entry) => entry,
            Err(err) => {
                report.failed.push(MoveIssue {
                    path: shown.display().to_string(),
                    error: format!("读取条目失败：{err}"),
                });
                continue;
            }
        };
        let name = entry.file_name();
        let issue = |err: String| MoveIssue {
            path: shown.join(&name).display().to_string(),
            error: err,
        };
        let is_dir = entry.file_type().is_ok_and(|t| t.is_dir());
        if keep_source && !is_dir && entry.metadata().is_ok_and(|meta| is_hidden_system(&meta)) {
            continue;
        }
        let mut result = Err(MoveError::Taken);
        let mut target = None;
        for dst in candidates(&to, &name, is_dir) {
            result = move_entry(&entry.path(), &dst);
            target = Some(dst);
            if !matches!(result, Err(MoveError::Taken)) {
                break;
            }
        }
        let renamed = target.as_deref().and_then(Path::file_name) != Some(name.as_os_str());
        match result {
            Ok(()) => {
                report.moved += 1;
                if renamed {
                    report.renamed += 1;
                }
            }
            Err(MoveError::Taken) => report.failed.push(issue("新地址中同名条目过多".into())),
            Err(MoveError::Failed(err)) => report.failed.push(issue(err.to_string())),
            Err(MoveError::NotRemoved(err)) => report.not_removed.push(issue(err.to_string())),
        }
    }
    // 只删除原目录本身，且仅在已移空时（remove_dir 不删除非空目录）
    report.source_removed = !keep_source && !is_link && fs::remove_dir(&from).is_ok();
    Ok(report)
}

#[cfg(test)]
mod tests {
    use super::*;

    fn names(dir: &Path) -> Vec<String> {
        let mut names: Vec<_> = fs::read_dir(dir)
            .unwrap()
            .map(|e| e.unwrap().file_name().to_string_lossy().into_owned())
            .collect();
        names.sort();
        names
    }

    #[test]
    fn counts_files_recursively() {
        let dir = tempfile::tempdir().unwrap();
        fs::write(dir.path().join("a.png"), b"12345").unwrap();
        fs::create_dir_all(dir.path().join("sub").join("deep")).unwrap();
        fs::write(dir.path().join("sub").join("deep").join("b.png"), b"123").unwrap();
        assert_eq!(
            dir_stats(dir.path(), false),
            DirStats { files: 2, bytes: 8 }
        );
        assert_eq!(
            dir_stats(&dir.path().join("missing"), false),
            DirStats::default()
        );
    }

    #[test]
    fn moves_all_contents_on_same_drive() {
        let root = tempfile::tempdir().unwrap();
        let from = root.path().join("old");
        let to = root.path().join("new").join("nested");
        fs::create_dir_all(from.join("相册")).unwrap();
        fs::write(from.join("a.png"), b"a").unwrap();
        fs::write(from.join("相册").join("b.png"), b"b").unwrap();
        let report = move_contents(&from, &to, false).unwrap();
        assert_eq!((report.moved, report.renamed), (2, 0));
        assert!(report.failed.is_empty() && report.not_removed.is_empty());
        assert!(report.source_removed);
        assert!(!from.exists());
        assert_eq!(names(&to), ["a.png", "相册"]);
        assert_eq!(fs::read(to.join("相册").join("b.png")).unwrap(), b"b");
    }

    #[test]
    fn keeps_known_folder_itself() {
        let root = tempfile::tempdir().unwrap();
        let from = root.path().join("图片");
        let to = root.path().join("new");
        fs::create_dir_all(&from).unwrap();
        fs::write(from.join("a.png"), b"a").unwrap();
        let report = move_contents(&from, &to, true).unwrap();
        assert_eq!(report.moved, 1);
        assert!(!report.source_removed);
        assert!(from.is_dir());
        assert!(names(&from).is_empty());
    }

    #[test]
    fn renames_on_conflict_without_overwriting() {
        let root = tempfile::tempdir().unwrap();
        let from = root.path().join("old");
        let to = root.path().join("new");
        fs::create_dir_all(from.join("相册")).unwrap();
        fs::create_dir_all(to.join("相册")).unwrap();
        fs::write(from.join("a.png"), b"from").unwrap();
        fs::write(from.join("noext"), b"from").unwrap();
        fs::write(from.join("相册").join("x.png"), b"from").unwrap();
        fs::write(to.join("a.png"), b"to").unwrap();
        fs::write(to.join("a (2).png"), b"to2").unwrap();
        fs::write(to.join("noext"), b"to").unwrap();
        fs::write(to.join("相册").join("x.png"), b"to").unwrap();
        let report = move_contents(&from, &to, false).unwrap();
        assert_eq!((report.moved, report.renamed), (3, 3));
        assert!(report.source_removed);
        assert_eq!(
            names(&to),
            [
                "a (2).png",
                "a (3).png",
                "a.png",
                "noext",
                "noext (2)",
                "相册",
                "相册 (2)"
            ]
        );
        // 新目录中原有的文件不被覆盖
        assert_eq!(fs::read(to.join("a.png")).unwrap(), b"to");
        assert_eq!(fs::read(to.join("a (2).png")).unwrap(), b"to2");
        assert_eq!(fs::read(to.join("a (3).png")).unwrap(), b"from");
        assert_eq!(fs::read(to.join("相册").join("x.png")).unwrap(), b"to");
        assert_eq!(
            fs::read(to.join("相册 (2)").join("x.png")).unwrap(),
            b"from"
        );
    }

    #[test]
    fn same_drive_rename_never_replaces() {
        let root = tempfile::tempdir().unwrap();
        let (src, dst) = (root.path().join("a.png"), root.path().join("b.png"));
        fs::write(&src, b"src").unwrap();
        fs::write(&dst, b"dst").unwrap();
        assert!(matches!(move_entry(&src, &dst), Err(MoveError::Taken)));
        assert_eq!(fs::read(&src).unwrap(), b"src");
        assert_eq!(fs::read(&dst).unwrap(), b"dst");
    }

    #[test]
    fn detects_nested_dirs() {
        let a = Path::new(r"C:\图片");
        assert!(is_nested(a, a));
        assert!(is_nested(a, &a.join("子目录")));
        assert!(is_nested(&a.join("子目录"), a));
        assert!(!is_nested(a, Path::new(r"C:\图片2")));
        assert!(!is_nested(a, Path::new(r"D:\图片")));
    }

    #[test]
    fn copy_then_remove_moves_tree_and_keeps_mtime() {
        let root = tempfile::tempdir().unwrap();
        let src = root.path().join("src");
        fs::create_dir_all(src.join("sub")).unwrap();
        fs::write(src.join("a.png"), b"aaa").unwrap();
        fs::write(src.join("sub").join("b.png"), b"bb").unwrap();
        let old = std::time::SystemTime::UNIX_EPOCH + std::time::Duration::from_secs(1_600_000_000);
        fs::File::options()
            .write(true)
            .open(src.join("a.png"))
            .unwrap()
            .set_modified(old)
            .unwrap();
        let dst = root.path().join("dst");
        copy_then_remove(&src, &dst).unwrap();
        assert!(!src.exists());
        assert_eq!(fs::read(dst.join("a.png")).unwrap(), b"aaa");
        assert_eq!(fs::read(dst.join("sub").join("b.png")).unwrap(), b"bb");
        assert_eq!(
            fs::metadata(dst.join("a.png")).unwrap().modified().unwrap(),
            old
        );
    }

    #[test]
    fn copy_then_remove_deletes_readonly_source() {
        let root = tempfile::tempdir().unwrap();
        let src = root.path().join("ro.png");
        fs::write(&src, b"ro").unwrap();
        let mut perms = fs::metadata(&src).unwrap().permissions();
        perms.set_readonly(true);
        fs::set_permissions(&src, perms).unwrap();
        let dst = root.path().join("moved.png");
        copy_then_remove(&src, &dst).unwrap();
        assert!(!src.exists());
        assert_eq!(fs::read(&dst).unwrap(), b"ro");
        // 只读属性随文件保留
        assert!(fs::metadata(&dst).unwrap().permissions().readonly());
        let mut perms = fs::metadata(&dst).unwrap().permissions();
        #[allow(clippy::permissions_set_readonly_false)]
        perms.set_readonly(false);
        fs::set_permissions(&dst, perms).unwrap();
    }

    #[test]
    fn copy_failure_keeps_source_and_existing_target() {
        let root = tempfile::tempdir().unwrap();
        let src = root.path().join("src.png");
        fs::write(&src, b"src").unwrap();
        // 目标已存在：不覆盖、不删除
        let taken = root.path().join("taken.png");
        fs::write(&taken, b"taken").unwrap();
        assert!(matches!(
            copy_then_remove(&src, &taken),
            Err(MoveError::Taken)
        ));
        assert_eq!(fs::read(&taken).unwrap(), b"taken");
        // 已存在的同名文件夹也不被删除
        let dir = root.path().join("dir");
        fs::create_dir_all(dir.join("keep")).unwrap();
        let src_dir = root.path().join("srcdir");
        fs::create_dir_all(&src_dir).unwrap();
        assert!(matches!(
            copy_then_remove(&src_dir, &dir),
            Err(MoveError::Taken)
        ));
        assert!(dir.join("keep").is_dir());
        // 目标的上级不存在：复制失败，源保持不动
        assert!(matches!(
            copy_then_remove(&src, &root.path().join("missing").join("a.png")),
            Err(MoveError::Failed(_))
        ));
        assert_eq!(fs::read(&src).unwrap(), b"src");
    }

    /// 被其他程序独占打开的文件无法移动：留在原目录并报告，其余条目照常移动，原目录不删除
    #[cfg(windows)]
    #[test]
    fn partial_failure_keeps_unmoved_files() {
        use std::os::windows::fs::OpenOptionsExt;

        let root = tempfile::tempdir().unwrap();
        let from = root.path().join("old");
        let to = root.path().join("new");
        fs::create_dir_all(&from).unwrap();
        fs::write(from.join("a.png"), b"a").unwrap();
        fs::write(from.join("locked.png"), b"locked").unwrap();
        fs::write(from.join("z.png"), b"z").unwrap();
        let lock = fs::OpenOptions::new()
            .read(true)
            .share_mode(0)
            .open(from.join("locked.png"))
            .unwrap();
        let report = move_contents(&from, &to, false).unwrap();
        drop(lock);
        assert_eq!(report.moved, 2);
        assert_eq!(report.failed.len(), 1);
        assert_eq!(
            report.failed[0].path,
            from.join("locked.png").display().to_string()
        );
        assert!(!report.failed[0].error.is_empty());
        assert!(!report.source_removed);
        assert_eq!(names(&from), ["locked.png"]);
        assert_eq!(fs::read(from.join("locked.png")).unwrap(), b"locked");
        assert_eq!(names(&to), ["a.png", "z.png"]);
    }

    /// 源文件允许读取但不允许删除：复制成功后单独报告“原位置未能删除”，副本保留
    #[cfg(windows)]
    #[test]
    fn reports_copied_but_not_removed() {
        use std::os::windows::fs::OpenOptionsExt;

        let root = tempfile::tempdir().unwrap();
        let src = root.path().join("a.png");
        fs::write(&src, b"a").unwrap();
        // FILE_SHARE_READ：允许其他程序读取，不允许删除
        let lock = fs::OpenOptions::new()
            .read(true)
            .share_mode(1)
            .open(&src)
            .unwrap();
        let dst = root.path().join("b.png");
        let result = copy_then_remove(&src, &dst);
        drop(lock);
        assert!(matches!(result, Err(MoveError::NotRemoved(_))));
        assert_eq!(fs::read(&src).unwrap(), b"a");
        assert_eq!(fs::read(&dst).unwrap(), b"a");
    }

    #[cfg(windows)]
    fn set_hidden_system(path: &Path) {
        use windows_sys::Win32::Storage::FileSystem::{
            SetFileAttributesW, FILE_ATTRIBUTE_HIDDEN, FILE_ATTRIBUTE_SYSTEM,
        };
        let ok = unsafe {
            SetFileAttributesW(
                wide(path).as_ptr(),
                FILE_ATTRIBUTE_HIDDEN | FILE_ATTRIBUTE_SYSTEM,
            )
        };
        assert_ne!(ok, 0);
    }

    /// 已知文件夹的 desktop.ini 等隐藏系统文件留在原处，统计也不计入；普通迁移照常移动
    #[cfg(windows)]
    #[test]
    fn known_folder_keeps_hidden_system_files() {
        let root = tempfile::tempdir().unwrap();
        let from = root.path().join("图片");
        fs::create_dir_all(from.join("sub")).unwrap();
        fs::write(from.join("a.png"), b"a").unwrap();
        fs::write(from.join("desktop.ini"), b"[.ShellClassInfo]").unwrap();
        set_hidden_system(&from.join("desktop.ini"));
        fs::write(from.join("sub").join("desktop.ini"), b"x").unwrap();
        set_hidden_system(&from.join("sub").join("desktop.ini"));
        assert_eq!(dir_stats(&from, true), DirStats { files: 2, bytes: 2 });
        assert_eq!(dir_stats(&from, false).files, 3);
        let to = root.path().join("new");
        let report = move_contents(&from, &to, true).unwrap();
        assert_eq!(report.moved, 2);
        assert!(!report.source_removed);
        assert_eq!(names(&from), ["desktop.ini"]);
        // 子文件夹随整个文件夹移走，其中的隐藏系统文件也一起移动
        assert_eq!(names(&to), ["a.png", "sub"]);
        assert_eq!(names(&to.join("sub")), ["desktop.ini"]);
        // 非已知文件夹不跳过
        let other = root.path().join("other");
        fs::create_dir_all(&other).unwrap();
        fs::write(other.join("desktop.ini"), b"x").unwrap();
        set_hidden_system(&other.join("desktop.ini"));
        let report = move_contents(&other, &root.path().join("new2"), false).unwrap();
        assert_eq!(report.moved, 1);
        assert!(report.source_removed);
    }

    /// 原地址是联接点（mklink /J）时，移空后不删除链接解析到的目标目录
    #[cfg(windows)]
    #[test]
    fn keeps_junction_target_after_move() {
        let root = tempfile::tempdir().unwrap();
        let target = root.path().join("real");
        fs::create_dir_all(&target).unwrap();
        fs::write(target.join("a.png"), b"a").unwrap();
        let link = root.path().join("link");
        let status = std::process::Command::new("cmd")
            .args(["/C", "mklink", "/J"])
            .arg(&link)
            .arg(&target)
            .output()
            .unwrap();
        assert!(status.status.success());
        let report = move_contents(&link, &root.path().join("new"), false).unwrap();
        assert_eq!(report.moved, 1);
        assert!(!report.source_removed);
        assert!(target.is_dir());
        fs::remove_dir(&link).unwrap();
    }

    /// 源文件无法读取时复制失败，不留下目标文件
    #[cfg(windows)]
    #[test]
    fn failed_copy_leaves_no_target() {
        use std::os::windows::fs::OpenOptionsExt;

        let root = tempfile::tempdir().unwrap();
        let src = root.path().join("a.png");
        fs::write(&src, b"a").unwrap();
        let lock = fs::OpenOptions::new()
            .read(true)
            .share_mode(0)
            .open(&src)
            .unwrap();
        let dst = root.path().join("b.png");
        let result = copy_then_remove(&src, &dst);
        drop(lock);
        assert!(matches!(result, Err(MoveError::Failed(_))));
        assert!(!dst.exists());
        assert_eq!(fs::read(&src).unwrap(), b"a");
    }

    /// 源是文件、目标是已有的同名文件夹：按名称被占用处理，文件夹及其内容不受影响；整体迁移时改名为“名称 (2)”
    #[test]
    fn file_onto_existing_dir_is_taken() {
        let root = tempfile::tempdir().unwrap();
        let src = root.path().join("a.png");
        fs::write(&src, b"src").unwrap();
        let dir = root.path().join("dir");
        fs::create_dir_all(dir.join("inner")).unwrap();
        fs::write(dir.join("inner").join("keep.png"), b"keep").unwrap();
        assert!(matches!(
            copy_then_remove(&src, &dir),
            Err(MoveError::Taken)
        ));
        assert!(matches!(move_entry(&src, &dir), Err(MoveError::Taken)));
        assert_eq!(
            fs::read(dir.join("inner").join("keep.png")).unwrap(),
            b"keep"
        );
        assert_eq!(fs::read(&src).unwrap(), b"src");

        let from = root.path().join("old");
        let to = root.path().join("new");
        fs::create_dir_all(&from).unwrap();
        fs::create_dir_all(to.join("a.png")).unwrap();
        fs::write(to.join("a.png").join("keep.txt"), b"keep").unwrap();
        fs::write(from.join("a.png"), b"from").unwrap();
        let report = move_contents(&from, &to, false).unwrap();
        assert_eq!((report.moved, report.renamed), (1, 1));
        assert_eq!(
            fs::read(to.join("a.png").join("keep.txt")).unwrap(),
            b"keep"
        );
        assert_eq!(fs::read(to.join("a (2).png")).unwrap(), b"from");
    }
}
