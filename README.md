# 期末速通官 · Spark 作品站

2026 iFLYTEK 星火杯参赛作品展示站（队名：求针队）。海报二维码指向本站根路径：

```text
https://www.moirark.com/spark/
```

结构对齐茶叶国际赛站（`茶叶2`）：首页多模块 + 子路由专题页。
完整交接见 [`HANDOFF.md`](./HANDOFF.md)。

## 口径

- 作品 **期末速通官** ｜ 队名 **求针队** ｜ 2026 iFLYTEK 星火杯 · 全国 20 强
- 主链路为**六环节闭环**：资料识别 → 考点地图 → 限时精讲 → 诊断测验 → 判分补练 → 记忆续接
- 环节数与链路文案一律来自 `src/data/site.ts` 的 `LOOP_STEPS` 及其派生常量，**不要在页面里手写**

## 路径

| 路径 | 说明 |
|------|------|
| `/spark/` | 首页（首屏叙事 + 六环节电路条 + 指标） |
| `/spark/loop` | 六环节闭环详解 |
| `/spark/features` | 功能 |
| `/spark/tech` | 技术与工作流 |
| `/spark/demo` | 实跑证据 |
| `/spark/video` | 三语实机截图 + 讲解视频预留位 |
| `/spark/innovation` | 创新点 |
| `/spark/play` | 三阶段闯关 |
| `/spark/business` | 商业分层 |
| `/spark/community` | 同课程研讨（规划中） |
| `/spark/try` | 体验 Agent |
| `/spark/team` | 团队 |

## 本地

```bash
cd spark
npm install
npm run dev
```

开发时 Vite 会以 `/spark/` 为 base，请打开终端提示的带 `/spark/` 的地址。

## 构建

```bash
npm run build
```

产物在 `dist/`（含 SPA 用的 `404.html`）。若主机根路径不是子目录，保持 `vite.config.ts` 的 `base: '/spark/'` 与 `App.tsx` 的 `BrowserRouter basename="/spark"` 一致。
