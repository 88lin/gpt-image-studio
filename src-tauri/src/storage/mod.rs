//! 本地数据存储：SQLite 保存任务、对话和图片元数据，原图与缩略图以文件形式保存在数据目录中
pub mod commands;
mod images;

use std::collections::HashMap;
use std::fmt;
use std::fs;
use std::path::{Path, PathBuf};
use std::sync::{Arc, Mutex, MutexGuard};
use std::time::{SystemTime, UNIX_EPOCH};

use rusqlite::{params, Connection, OptionalExtension};
use serde::{Deserialize, Serialize};

pub use images::{FileMeta, ImageStat, Kind};

/// 按版本顺序执行的迁移，第 N 项把 schema 从 N 升到 N+1；已发布的项不能修改，只能追加
const MIGRATIONS: &[&str] = &["
CREATE TABLE kv (key TEXT PRIMARY KEY, value TEXT NOT NULL, updated_at INTEGER NOT NULL);
CREATE TABLE tasks (id TEXT PRIMARY KEY, data TEXT NOT NULL, updated_at INTEGER NOT NULL);
CREATE TABLE agent_conversations (id TEXT PRIMARY KEY, data TEXT NOT NULL, updated_at INTEGER NOT NULL);
CREATE TABLE images (
  id TEXT PRIMARY KEY, mime TEXT NOT NULL, file TEXT NOT NULL, bytes INTEGER NOT NULL,
  width INTEGER, height INTEGER, source TEXT, created_at INTEGER
);
CREATE TABLE thumbnails (
  id TEXT PRIMARY KEY, mime TEXT NOT NULL, file TEXT NOT NULL,
  width INTEGER, height INTEGER, version INTEGER
);
", "
-- 孤儿清理按文件路径核对记录（文件名不一定等于 id）
CREATE INDEX images_file ON images (file);
CREATE INDEX thumbnails_file ON thumbnails (file);
"];

pub const TASKS: &str = "tasks";
pub const CONVERSATIONS: &str = "agent_conversations";

/// 返回给前端的错误，code 供前端识别（例如 unavailable 表示数据目录不可用，前端据此弹窗提示）
#[derive(Debug, Clone, Serialize)]
pub struct StorageError {
    pub code: &'static str,
    pub message: String,
}

impl StorageError {
    pub fn new(code: &'static str, message: impl Into<String>) -> Self {
        Self {
            code,
            message: message.into(),
        }
    }
}

impl fmt::Display for StorageError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "[{}] {}", self.code, self.message)
    }
}

impl From<rusqlite::Error> for StorageError {
    fn from(err: rusqlite::Error) -> Self {
        Self::new("db", err.to_string())
    }
}

impl From<std::io::Error> for StorageError {
    fn from(err: std::io::Error) -> Self {
        Self::new("io", err.to_string())
    }
}

pub type Result<T> = std::result::Result<T, StorageError>;

/// 任务或对话：id 与前端序列化好的 JSON 原文，Rust 不解析业务字段
#[derive(Debug, Deserialize)]
pub struct Doc {
    pub id: String,
    pub data: String,
}

pub struct Storage {
    root: PathBuf,
    conn: Mutex<Connection>,
}

/// 设置页“数据管理”中展示的存储占用
#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct StorageInfo {
    pub data_dir: String,
    /// data.db 及其 WAL 文件
    pub db_bytes: u64,
    pub image_bytes: u64,
    pub image_count: u64,
    pub thumbnail_bytes: u64,
}

/// 初始化失败时也放入 State，命令统一返回 unavailable 错误
pub struct StorageState(pub std::result::Result<Arc<Storage>, StorageError>);

/// 本次运行使用的数据目录，见 data_dir 模块
pub fn data_dir() -> std::io::Result<PathBuf> {
    crate::data_dir::current()
}

/// 启动时调用：打开存储并在后台清理孤儿文件；失败只记录日志，由命令把错误交给前端
pub fn init() -> StorageState {
    let opened = data_dir()
        .map_err(|err| StorageError::new("unavailable", format!("无法定位数据目录：{err}")))
        .and_then(|dir| Storage::open(&dir))
        .map(Arc::new);
    match &opened {
        Ok(storage) => {
            let storage = storage.clone();
            std::thread::spawn(move || match storage.cleanup_orphans() {
                Ok(0) => {}
                Ok(n) => log::info!("已清理 {n} 个孤儿文件"),
                Err(err) => log::warn!("清理孤儿文件失败：{err}"),
            });
        }
        Err(err) => log::error!("存储初始化失败：{err}"),
    }
    StorageState(opened)
}

pub fn now_ms() -> i64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|d| d.as_millis() as i64)
        .unwrap_or(0)
}

fn migrate(conn: &mut Connection, migrations: &[&str]) -> Result<()> {
    conn.execute_batch(
        "CREATE TABLE IF NOT EXISTS meta (key TEXT PRIMARY KEY, value TEXT NOT NULL)",
    )?;
    let raw: Option<String> = conn
        .query_row(
            "SELECT value FROM meta WHERE key = 'schema_version'",
            [],
            |row| row.get(0),
        )
        .optional()?;
    let version: usize = match raw {
        None => 0,
        Some(v) => v.parse().map_err(|_| {
            StorageError::new(
                "unavailable",
                format!("数据库版本信息已损坏（{v}），无法打开数据库"),
            )
        })?,
    };
    if version > migrations.len() {
        return Err(StorageError::new(
            "unavailable",
            format!(
                "数据库版本（{version}）高于当前客户端支持的版本（{}），请升级客户端",
                migrations.len()
            ),
        ));
    }
    for (idx, sql) in migrations.iter().enumerate().skip(version) {
        let tx = conn.transaction()?;
        tx.execute_batch(sql)?;
        tx.execute(
            "INSERT OR REPLACE INTO meta (key, value) VALUES ('schema_version', ?1)",
            [(idx + 1).to_string()],
        )?;
        tx.commit()?;
    }
    Ok(())
}

fn put_doc(conn: &Connection, table: &str, doc: &Doc, now: i64) -> Result<()> {
    if doc.id.is_empty() {
        return Err(StorageError::new("invalid_argument", "id 不能为空"));
    }
    // 读取时会把所有记录拼成一个 JSON 数组，提前拦下非法 JSON，避免一条坏数据导致全部读取失败
    serde_json::from_str::<serde::de::IgnoredAny>(&doc.data).map_err(|err| {
        StorageError::new("invalid_argument", format!("数据不是合法 JSON：{err}"))
    })?;
    conn.execute(
        &format!("INSERT OR REPLACE INTO {table} (id, data, updated_at) VALUES (?1, ?2, ?3)"),
        params![doc.id, doc.data, now],
    )?;
    Ok(())
}

impl Storage {
    pub fn open(root: &Path) -> Result<Self> {
        Self::open_with(root, MIGRATIONS)
    }

    fn open_with(root: &Path, migrations: &[&str]) -> Result<Self> {
        let unavailable = |err: std::io::Error| {
            StorageError::new(
                "unavailable",
                format!("数据目录不可写（{}）：{err}", root.display()),
            )
        };
        for dir in ["images", "thumbnails", "tmp"] {
            fs::create_dir_all(root.join(dir)).map_err(unavailable)?;
        }
        // 目录已存在时 create_dir_all 不会报错，用实际写文件探测权限（例如安装在 Program Files 下）
        let tmp = root.join("tmp");
        fs::write(tmp.join(".write-test"), b"ok").map_err(unavailable)?;
        // 清掉上次崩溃留下的临时文件，此时还没有写入在进行
        for entry in fs::read_dir(&tmp).map_err(unavailable)?.flatten() {
            let _ = fs::remove_file(entry.path());
        }

        let mut conn = Connection::open(root.join("data.db"))
            .map_err(|err| StorageError::new("unavailable", format!("无法打开数据库：{err}")))?;
        conn.execute_batch("PRAGMA journal_mode=WAL; PRAGMA synchronous=NORMAL;")?;
        migrate(&mut conn, migrations)?;
        Ok(Self {
            root: root.to_path_buf(),
            conn: Mutex::new(conn),
        })
    }

    pub fn root(&self) -> &Path {
        &self.root
    }

    fn lock(&self) -> MutexGuard<'_, Connection> {
        self.conn.lock().unwrap_or_else(|err| err.into_inner())
    }

    /// 按 id 排序（与 IndexedDB getAll 一致），直接拼成 JSON 数组文本返回，前端只需一次 JSON.parse
    pub fn docs_get_all(&self, table: &str) -> Result<String> {
        let conn = self.lock();
        let mut stmt = conn.prepare(&format!("SELECT data FROM {table} ORDER BY id"))?;
        let rows = stmt.query_map([], |row| row.get::<_, String>(0))?;
        let mut out = String::from("[");
        for (idx, data) in rows.enumerate() {
            if idx > 0 {
                out.push(',');
            }
            out.push_str(&data?);
        }
        out.push(']');
        Ok(out)
    }

    pub fn doc_put(&self, table: &str, doc: &Doc) -> Result<()> {
        put_doc(&self.lock(), table, doc, now_ms())
    }

    pub fn doc_delete(&self, table: &str, id: &str) -> Result<()> {
        self.lock()
            .execute(&format!("DELETE FROM {table} WHERE id = ?1"), [id])?;
        Ok(())
    }

    pub fn docs_clear(&self, table: &str) -> Result<()> {
        self.lock().execute(&format!("DELETE FROM {table}"), [])?;
        Ok(())
    }

    /// 删除任务并更新受影响的任务和对话，全部在一个事务中完成
    pub fn commit_task_deletion(
        &self,
        deleted_ids: &[String],
        tasks: &[Doc],
        conversations: &[Doc],
    ) -> Result<()> {
        let mut conn = self.lock();
        let tx = conn.transaction()?;
        let now = now_ms();
        for id in deleted_ids {
            tx.execute("DELETE FROM tasks WHERE id = ?1", [id])?;
        }
        for doc in tasks {
            put_doc(&tx, TASKS, doc, now)?;
        }
        for doc in conversations {
            put_doc(&tx, CONVERSATIONS, doc, now)?;
        }
        tx.commit()?;
        Ok(())
    }

    pub fn kv_get_all(&self) -> Result<HashMap<String, String>> {
        let conn = self.lock();
        let mut stmt = conn.prepare("SELECT key, value FROM kv")?;
        let rows = stmt.query_map([], |row| Ok((row.get(0)?, row.get(1)?)))?;
        Ok(rows.collect::<rusqlite::Result<_>>()?)
    }

    pub fn kv_set(&self, key: &str, value: &str) -> Result<()> {
        self.lock().execute(
            "INSERT OR REPLACE INTO kv (key, value, updated_at) VALUES (?1, ?2, ?3)",
            params![key, value, now_ms()],
        )?;
        Ok(())
    }

    pub fn kv_remove(&self, key: &str) -> Result<()> {
        self.lock()
            .execute("DELETE FROM kv WHERE key = ?1", [key])?;
        Ok(())
    }

    /// meta 表只由 Rust 读写，不向前端开放命令，用于保存不允许前端直接修改的值（例如默认保存地址）
    pub fn meta_get(&self, key: &str) -> Result<Option<String>> {
        Ok(self
            .lock()
            .query_row("SELECT value FROM meta WHERE key = ?1", [key], |row| {
                row.get(0)
            })
            .optional()?)
    }

    pub fn meta_set(&self, key: &str, value: &str) -> Result<()> {
        self.lock().execute(
            "INSERT OR REPLACE INTO meta (key, value) VALUES (?1, ?2)",
            params![key, value],
        )?;
        Ok(())
    }

    /// 原图大小取自数据库记录；缩略图表没有记录大小，直接统计目录中的文件
    pub fn info(&self) -> Result<StorageInfo> {
        let (image_bytes, image_count): (i64, i64) = self.lock().query_row(
            "SELECT COALESCE(SUM(bytes), 0), COUNT(*) FROM images",
            [],
            |row| Ok((row.get(0)?, row.get(1)?)),
        )?;
        let file_len = |path: PathBuf| fs::metadata(path).map(|m| m.len()).unwrap_or(0);
        let db_bytes = ["data.db", "data.db-wal"]
            .iter()
            .map(|name| file_len(self.root.join(name)))
            .sum();
        let mut thumbnail_bytes = 0;
        for bucket in fs::read_dir(self.root.join("thumbnails"))?.flatten() {
            if !bucket.path().is_dir() {
                continue;
            }
            for entry in fs::read_dir(bucket.path())?.flatten() {
                thumbnail_bytes += file_len(entry.path());
            }
        }
        Ok(StorageInfo {
            data_dir: self.root.display().to_string(),
            db_bytes,
            image_bytes: image_bytes as u64,
            image_count: image_count as u64,
            thumbnail_bytes,
        })
    }

    /// 用给定列表整体替换对话，单个事务
    pub fn replace_conversations(&self, conversations: &[Doc]) -> Result<()> {
        let mut conn = self.lock();
        let tx = conn.transaction()?;
        let now = now_ms();
        tx.execute("DELETE FROM agent_conversations", [])?;
        for doc in conversations {
            put_doc(&tx, CONVERSATIONS, doc, now)?;
        }
        tx.commit()?;
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn doc(id: &str, data: &str) -> Doc {
        Doc {
            id: id.into(),
            data: data.into(),
        }
    }

    fn schema_version(storage: &Storage) -> String {
        storage
            .lock()
            .query_row(
                "SELECT value FROM meta WHERE key = 'schema_version'",
                [],
                |row| row.get(0),
            )
            .unwrap()
    }

    #[test]
    fn open_creates_dirs_and_latest_schema() {
        let dir = tempfile::tempdir().unwrap();
        let storage = Storage::open(dir.path()).unwrap();
        for sub in ["images", "thumbnails", "tmp"] {
            assert!(dir.path().join(sub).is_dir());
        }
        assert!(dir.path().join("data.db").is_file());
        assert_eq!(schema_version(&storage), MIGRATIONS.len().to_string());
        let mode: String = storage
            .lock()
            .query_row("PRAGMA journal_mode", [], |row| row.get(0))
            .unwrap();
        assert_eq!(mode, "wal");
        for table in ["kv", "tasks", "agent_conversations", "images", "thumbnails"] {
            storage.docs_clear(table).unwrap();
        }
    }

    #[test]
    fn reopen_keeps_data_and_runs_new_migrations() {
        let dir = tempfile::tempdir().unwrap();
        {
            let storage = Storage::open(dir.path()).unwrap();
            storage.doc_put(TASKS, &doc("a", r#"{"id":"a"}"#)).unwrap();
        }
        let v2 = ["ALTER TABLE tasks ADD COLUMN extra TEXT"];
        let migrations: Vec<&str> = MIGRATIONS.iter().copied().chain(v2).collect();
        let storage = Storage::open_with(dir.path(), &migrations).unwrap();
        assert_eq!(schema_version(&storage), migrations.len().to_string());
        assert_eq!(storage.docs_get_all(TASKS).unwrap(), r#"[{"id":"a"}]"#);
        storage
            .lock()
            .execute("UPDATE tasks SET extra = 'x'", [])
            .unwrap();
        drop(storage);

        // 再次打开不会重复执行迁移
        Storage::open_with(dir.path(), &migrations).unwrap();
        // 旧客户端打开新版本数据库时拒绝
        let err = Storage::open(dir.path()).err().unwrap();
        assert_eq!(err.code, "unavailable");
    }

    #[test]
    fn open_clears_stale_tmp_files() {
        let dir = tempfile::tempdir().unwrap();
        fs::create_dir_all(dir.path().join("tmp")).unwrap();
        fs::write(dir.path().join("tmp").join("x.png.tmp"), b"x").unwrap();
        Storage::open(dir.path()).unwrap();
        assert_eq!(fs::read_dir(dir.path().join("tmp")).unwrap().count(), 0);
    }

    #[test]
    fn unwritable_dir_returns_unavailable() {
        let dir = tempfile::tempdir().unwrap();
        // 用普通文件占住数据目录的位置，模拟无法创建目录
        let blocked = dir.path().join("data");
        fs::write(&blocked, b"").unwrap();
        let err = Storage::open(&blocked).err().unwrap();
        assert_eq!(err.code, "unavailable");
    }

    #[test]
    fn docs_crud() {
        let dir = tempfile::tempdir().unwrap();
        let storage = Storage::open(dir.path()).unwrap();
        assert_eq!(storage.docs_get_all(TASKS).unwrap(), "[]");
        storage.doc_put(TASKS, &doc("b", r#"{"id":"b"}"#)).unwrap();
        storage
            .doc_put(TASKS, &doc("a", r#"{"id":"a","v":1}"#))
            .unwrap();
        storage
            .doc_put(TASKS, &doc("a", r#"{"id":"a","v":2}"#))
            .unwrap();
        assert_eq!(
            storage.docs_get_all(TASKS).unwrap(),
            r#"[{"id":"a","v":2},{"id":"b"}]"#
        );
        storage.doc_delete(TASKS, "b").unwrap();
        assert_eq!(
            storage.docs_get_all(TASKS).unwrap(),
            r#"[{"id":"a","v":2}]"#
        );
        storage.docs_clear(TASKS).unwrap();
        assert_eq!(storage.docs_get_all(TASKS).unwrap(), "[]");

        storage
            .doc_put(CONVERSATIONS, &doc("c", r#"{"id":"c"}"#))
            .unwrap();
        assert_eq!(
            storage.docs_get_all(CONVERSATIONS).unwrap(),
            r#"[{"id":"c"}]"#
        );
        assert_eq!(
            storage
                .doc_put(TASKS, &doc("x", "{bad"))
                .err()
                .unwrap()
                .code,
            "invalid_argument"
        );
        assert_eq!(
            storage.doc_put(TASKS, &doc("", "{}")).err().unwrap().code,
            "invalid_argument"
        );
    }

    #[test]
    fn kv_crud() {
        let dir = tempfile::tempdir().unwrap();
        let storage = Storage::open(dir.path()).unwrap();
        assert!(storage.kv_get_all().unwrap().is_empty());
        storage.kv_set("a", "1").unwrap();
        storage.kv_set("b", "{\"x\":2}").unwrap();
        storage.kv_set("a", "3").unwrap();
        let all = storage.kv_get_all().unwrap();
        assert_eq!(all.len(), 2);
        assert_eq!(all["a"], "3");
        assert_eq!(all["b"], "{\"x\":2}");
        storage.kv_remove("a").unwrap();
        storage.kv_remove("missing").unwrap();
        assert_eq!(
            storage
                .kv_get_all()
                .unwrap()
                .into_iter()
                .collect::<Vec<_>>(),
            vec![("b".to_string(), "{\"x\":2}".to_string())]
        );
    }

    #[test]
    fn meta_get_set() {
        let dir = tempfile::tempdir().unwrap();
        let storage = Storage::open(dir.path()).unwrap();
        assert_eq!(storage.meta_get("x").unwrap(), None);
        storage.meta_set("x", "1").unwrap();
        storage.meta_set("x", "2").unwrap();
        assert_eq!(storage.meta_get("x").unwrap().as_deref(), Some("2"));
        // 不影响 schema 版本
        assert_eq!(schema_version(&storage), MIGRATIONS.len().to_string());
    }

    #[test]
    fn info_reports_sizes() {
        let dir = tempfile::tempdir().unwrap();
        let storage = Storage::open(dir.path()).unwrap();
        let empty = storage.info().unwrap();
        assert_eq!(empty.data_dir, dir.path().display().to_string());
        assert!(empty.db_bytes > 0);
        assert_eq!(
            (empty.image_bytes, empty.image_count, empty.thumbnail_bytes),
            (0, 0, 0)
        );

        let id = |n: u8| format!("{:064x}", n);
        let meta = |id: String, mime: &str| FileMeta {
            id,
            mime: mime.into(),
            ..Default::default()
        };
        storage
            .put_file(Kind::Image, &meta(id(1), "image/png"), b"12345")
            .unwrap();
        storage
            .put_file(Kind::Image, &meta(id(2), "image/png"), b"123")
            .unwrap();
        storage
            .put_file(Kind::Thumbnail, &meta(id(1), "image/webp"), b"12")
            .unwrap();
        // webview/ 等其他目录不计入
        fs::create_dir_all(dir.path().join("webview")).unwrap();
        fs::write(dir.path().join("webview").join("x"), b"123456").unwrap();
        let info = storage.info().unwrap();
        assert_eq!(
            (info.image_bytes, info.image_count, info.thumbnail_bytes),
            (8, 2, 2)
        );
    }

    #[test]
    fn commit_task_deletion_is_atomic() {
        let dir = tempfile::tempdir().unwrap();
        let storage = Storage::open(dir.path()).unwrap();
        storage.doc_put(TASKS, &doc("a", r#"{"id":"a"}"#)).unwrap();
        storage.doc_put(TASKS, &doc("b", r#"{"id":"b"}"#)).unwrap();
        storage
            .doc_put(CONVERSATIONS, &doc("c", r#"{"id":"c"}"#))
            .unwrap();

        storage
            .commit_task_deletion(
                &["a".into()],
                &[doc("b", r#"{"id":"b","v":2}"#)],
                &[doc("c", r#"{"id":"c","v":2}"#)],
            )
            .unwrap();
        assert_eq!(
            storage.docs_get_all(TASKS).unwrap(),
            r#"[{"id":"b","v":2}]"#
        );
        assert_eq!(
            storage.docs_get_all(CONVERSATIONS).unwrap(),
            r#"[{"id":"c","v":2}]"#
        );

        // 中途出错时整体回滚
        let err = storage
            .commit_task_deletion(&["b".into()], &[], &[doc("d", "{bad")])
            .err()
            .unwrap();
        assert_eq!(err.code, "invalid_argument");
        assert_eq!(
            storage.docs_get_all(TASKS).unwrap(),
            r#"[{"id":"b","v":2}]"#
        );
    }

    #[test]
    fn replace_conversations_is_atomic() {
        let dir = tempfile::tempdir().unwrap();
        let storage = Storage::open(dir.path()).unwrap();
        storage
            .doc_put(CONVERSATIONS, &doc("a", r#"{"id":"a"}"#))
            .unwrap();
        storage
            .replace_conversations(&[doc("b", r#"{"id":"b"}"#), doc("c", r#"{"id":"c"}"#)])
            .unwrap();
        assert_eq!(
            storage.docs_get_all(CONVERSATIONS).unwrap(),
            r#"[{"id":"b"},{"id":"c"}]"#
        );

        let err = storage
            .replace_conversations(&[doc("d", r#"{"id":"d"}"#), doc("e", "{bad")])
            .err()
            .unwrap();
        assert_eq!(err.code, "invalid_argument");
        assert_eq!(
            storage.docs_get_all(CONVERSATIONS).unwrap(),
            r#"[{"id":"b"},{"id":"c"}]"#
        );
    }
}
