## v0.7.2（2026-07-29）

### 新增
- 新增 Responses API 推理强度设置：OpenAI API 配置可选择 `none`、`minimal`、`low`、`medium`、`high`、`xhigh` 或 `max`，适用于画廊生成及 Agent 原生、混合模式的 Responses 请求；支持通过 `reasoningEffort` URL 参数或 `VITE_DEFAULT_API_URL` 预设，配置导入链接也会保留该设置 (#125)。

### 变更
- 改进 Codex CLI 兼容模式的尺寸处理：不再向接口发送 `size` 参数，改由提示词传达明确分辨率；尺寸选择器仅开放 1K 档位，超出 1K 像素预算的自定义尺寸会自动规整。
