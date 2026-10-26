use super::*;

#[test]
fn skill_copy_compare_and_ownership() {
    let tmp = tempfile::tempdir().unwrap();
    let src = tmp.path().join("src");
    fs::create_dir_all(src.join("references")).unwrap();
    fs::write(src.join("SKILL.md"), "---\nname: gpt-image-studio\n---\n").unwrap();
    fs::write(src.join("references").join("settings.md"), "a").unwrap();

    let dst = tmp.path().join("dst");
    copy_dir(&src, &dst).unwrap();
    assert!(is_ours(&dst));
    assert!(same_files(&src, &dst).unwrap());
    fs::write(src.join("references").join("settings.md"), "b").unwrap();
    assert!(!same_files(&src, &dst).unwrap());

    let other = tmp.path().join("other");
    fs::create_dir_all(&other).unwrap();
    fs::write(other.join("SKILL.md"), "---\nname: something\n---\n").unwrap();
    assert!(!is_ours(&other));
}
