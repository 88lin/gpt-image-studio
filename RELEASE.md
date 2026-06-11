## v0.6.4（2026-06-11）

### 新增
- **新增配置名称 URL 查询参数**
  - 支持通过 `?profileName=我的配置` 在导入 OpenAI 兼容配置时指定配置名称。
  - 复制导入 URL 时会自动携带当前配置名称，便于分享后在目标环境中保持清晰的配置识别。
- **补充流式传输 URL 参数支持说明**
  - README 的 URL 传参说明中新增 `streamImages` 与 `streamPartialImages` 参数。
  - 支持通过 `?streamImages=true&streamPartialImages=2` 快速开启流式传输并设置中间步骤图像数。
