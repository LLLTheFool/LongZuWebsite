# 龙族圣地巡礼（LongZuWebsite）

基于 Astro 的静态网站。该仓库只包含网站源码和经核实后发布的地点资料。

## 本地开发

需要 Node.js 24。首次安装锁定依赖并启动开发服务器：

```powershell
npm ci
npm run dev
```

## 检查与构建

```powershell
npm run check
npm run build
npm run preview
```

`npm run build` 会先运行 Astro 类型与页面检查，再生成静态站点到 `dist/`。

## GitHub Pages

`.github/workflows/deploy.yml` 会在拉取请求中检查并构建；仅在 `main` 分支推送或于 `main` 手动触发后部署。首次使用时，在仓库设置的 Pages 来源中选择 **GitHub Actions**。工作流仅使用仓库提供的 `GITHUB_TOKEN`。

GitHub Free 的 Pages 需要公开仓库。此仓库不包含工作区中的小说、表格或其他资料；提交到这里的源码和地点内容都将公开。
