//! 命令行程序，安装为 `<安装目录>\bin\gpt-image-studio.exe`，见 `cli::command`
fn main() -> std::process::ExitCode {
    gpt_image_studio_lib::run_cli()
}
