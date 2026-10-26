//! 设置“Skill”页的命令：把随安装包附带的 Skill 安装到 AI 工具读取 Skill 的目录。
//! - 复制到 `~\.claude\skills\gpt-image-studio`（Claude Code）或 `~\.agents\skills\gpt-image-studio`
//!   （Codex 等；Cursor、VS Code、OpenCode 两处都读）。目标文件夹的 SKILL.md 不是本应用的时不覆盖、不删除。
//! - 安装包中的 Skill 在资源目录下的 `skills\gpt-image-studio`；开发版没有打包资源，直接用仓库中的。
use std::fs;
use std::io;
use std::path::{Path, PathBuf};

use serde::{Deserialize, Serialize};
use tauri::{AppHandle, Manager};

/// Skill 的文件夹名
const NAME: &str = "gpt-image-studio";

#[derive(Clone, Copy, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum SkillTarget {
    /// `~\.claude\skills`，Claude Code
    Claude,
    /// `~\.agents\skills`，Codex 等
    Agents,
}

#[derive(Debug, PartialEq, Serialize)]
#[serde(rename_all = "camelCase")]
enum State {
    /// 找不到用户文件夹
    NotFound,
    /// 还没有安装
    Absent,
    /// 已安装，与当前版本一致
    Added,
    /// 已安装，但内容与当前版本不同
    Outdated,
    /// 同名文件夹不是本应用的 Skill
    Invalid,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct SkillStatus {
    id: SkillTarget,
    path: String,
    state: State,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Info {
    skill_dir: String,
    skills: Vec<SkillStatus>,
}

fn home() -> Option<PathBuf> {
    std::env::var_os("USERPROFILE").or_else(|| std::env::var_os("HOME")).filter(|v| !v.is_empty()).map(PathBuf::from)
}

fn bundled_skill(app: &AppHandle) -> Result<PathBuf, String> {
    if cfg!(debug_assertions) {
        let repo = Path::new(env!("CARGO_MANIFEST_DIR")).parent().expect("src-tauri 在仓库根目录下");
        return Ok(repo.join("skills").join(NAME));
    }
    let res = app.path().resource_dir().map_err(|err| {
        log::warn!("无法取得资源目录：{err}");
        "找不到 Skill 所在的目录，请重新安装 GPT Image Studio".to_string()
    })?;
    Ok(res.join("skills").join(NAME))
}

fn skill_path(target: SkillTarget) -> Option<PathBuf> {
    let parent = match target {
        SkillTarget::Claude => ".claude",
        SkillTarget::Agents => ".agents",
    };
    Some(home()?.join(parent).join("skills").join(NAME))
}

/// 文件夹中的 SKILL.md 是本应用的，才能覆盖或删除
fn is_ours(dir: &Path) -> bool {
    fs::read_to_string(dir.join("SKILL.md")).is_ok_and(|s| s.lines().any(|l| l.trim() == format!("name: {NAME}")))
}

/// 安装包中的每个文件都在目标中且内容相同
fn same_files(src: &Path, dst: &Path) -> io::Result<bool> {
    for entry in fs::read_dir(src)? {
        let entry = entry?;
        let to = dst.join(entry.file_name());
        let same = if entry.file_type()?.is_dir() {
            to.is_dir() && same_files(&entry.path(), &to)?
        } else {
            fs::read(entry.path())? == fs::read(&to).unwrap_or_default()
        };
        if !same {
            return Ok(false);
        }
    }
    Ok(true)
}

fn copy_dir(src: &Path, dst: &Path) -> io::Result<()> {
    fs::create_dir_all(dst)?;
    for entry in fs::read_dir(src)? {
        let entry = entry?;
        let to = dst.join(entry.file_name());
        if entry.file_type()?.is_dir() {
            copy_dir(&entry.path(), &to)?;
        } else {
            fs::copy(entry.path(), to)?;
        }
    }
    Ok(())
}

fn skill_status(target: SkillTarget, src: &Path) -> SkillStatus {
    let Some(dst) = skill_path(target) else {
        return SkillStatus { id: target, path: String::new(), state: State::NotFound };
    };
    let state = if !dst.exists() {
        State::Absent
    } else if !is_ours(&dst) {
        State::Invalid
    } else {
        match same_files(src, &dst) {
            Ok(true) => State::Added,
            Ok(false) => State::Outdated,
            Err(err) => {
                log::warn!("无法比较 Skill {}：{err}", dst.display());
                State::Outdated
            }
        }
    };
    SkillStatus { id: target, path: dst.to_string_lossy().into_owned(), state }
}

fn edit_skill(target: SkillTarget, src: &Path, install: bool) -> Result<(), String> {
    let dst = skill_path(target).ok_or("找不到用户文件夹，请手动复制 Skill")?;
    if dst.exists() && !is_ours(&dst) {
        return Err(format!("这个位置已有另一个名为 {NAME} 的 Skill，请先手动处理"));
    }
    let result = if dst.exists() { fs::remove_dir_all(&dst) } else { Ok(()) };
    let result = if install { result.and_then(|_| copy_dir(src, &dst)) } else { result };
    result.map_err(|err| {
        log::warn!("无法{} Skill {}：{err}", if install { "安装" } else { "移除" }, dst.display());
        if install {
            "无法安装 Skill，请稍后重试，或打开 Skill 文件夹手动复制".to_string()
        } else {
            "无法移除 Skill，请稍后重试".to_string()
        }
    })
}

/// 在阻塞线程中执行修改（可为空），再读出最新状态
async fn run(app: AppHandle, edit: impl FnOnce(&Path) -> Result<(), String> + Send + 'static) -> Result<Info, String> {
    let src = bundled_skill(&app)?;
    tauri::async_runtime::spawn_blocking(move || {
        edit(&src)?;
        Ok(Info {
            skills: [SkillTarget::Claude, SkillTarget::Agents].iter().map(|&t| skill_status(t, &src)).collect(),
            skill_dir: src.to_string_lossy().into_owned(),
        })
    })
    .await
    .map_err(|err| format!("读取 Skill 的安装状态时出错：{err}"))?
}

#[tauri::command]
pub async fn skill_info(app: AppHandle) -> Result<Info, String> {
    run(app, |_| Ok(())).await
}

#[tauri::command]
pub async fn skill_install(app: AppHandle, target: SkillTarget) -> Result<Info, String> {
    run(app, move |src| edit_skill(target, src, true)).await
}

#[tauri::command]
pub async fn skill_remove(app: AppHandle, target: SkillTarget) -> Result<Info, String> {
    run(app, move |src| edit_skill(target, src, false)).await
}

#[tauri::command]
pub async fn skill_open_dir(app: AppHandle) -> Result<(), String> {
    let dir = bundled_skill(&app)?;
    tauri::async_runtime::spawn_blocking(move || tauri_plugin_opener::open_path(&dir, None::<&str>))
        .await
        .map_err(|err| format!("打开 Skill 文件夹时出错：{err}"))?
        .map_err(|err| {
            log::warn!("无法打开 Skill 文件夹：{err}");
            "无法打开 Skill 所在的文件夹，请重新安装 GPT Image Studio".to_string()
        })
}

#[cfg(test)]
mod tests;
