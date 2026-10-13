# 期末速通官 · 作品站交接文档

**版本 W3 · 2026-10-12**
给队友 / 下一个窗口 / 任何 AI：**先看第 0 节与第 6 节，再动代码。**

---

## 0. 一句话现状

设计系统（首屏叙事 + 开场动画 + 赛事品牌）、口径（六环节闭环）、移动端适配、分享卡片已随 W3 推上 `main`。GitHub Pages 由 push 触发，约 1 分钟后 https://www.moirark.com/spark/ 才是本文档描述的版本；部署未绿勾之前，扫码仍可能看到 W2（五环、GitHub 图标、无开场动画）。验收见第 9 节。

| 项 | 值 |
|----|-----|
| 公网首页（海报码指向这里） | https://www.moirark.com/spark/ |
| 演示 / 讲解页 | https://www.moirark.com/spark/video |
| 闯关页 | https://www.moirark.com/spark/play |
| Agent 体验 | https://www.moirark.com/spark/try |
| 代码仓库 | https://github.com/Sorthark/spark |
| 本机工程根目录 | `D:\cusor项目\智能体设计\spark` |
| 素材 / 海报 / PPT 目录 | `D:\cusor项目\智能体设计\全国20\` |

**海报二维码必须指向站点根** `https://www.moirark.com/spark/`，**不要**直链星辰 Agent。

---

## 1. 项目是什么

- **用途**：星火杯海报扫码落地页（迷你作品站），面向评委与观众做作品展示。
- **线上路径**：`/spark/`（Vite `base` 与 Router `basename` 均为 `/spark`）。
- **自定义域**：`moirark.com` → GitHub Pages。
- **结构参照**：`D:\cusor项目\茶叶2`（多页作品站）。

---

## 2. 本地跑通

不要双击打开 `index.html`（React 壳，会空白）。

```bash
cd "D:\cusor项目\智能体设计\spark"
npm install
npm run dev
```

浏览器打开终端提示的地址，**必须带 `/spark/`**，例如 `http://localhost:5173/spark/`。

```bash
npm run build     # tsc -b + vite build + 生成 404.html
npm run preview   # 预览 dist 产物
```

产物在 `dist/`。

**代理（本机 gh / npm 超时时）：** Clash 混合端口常用 `7897`。

```powershell
$env:HTTPS_PROXY='http://127.0.0.1:7897'
$env:HTTP_PROXY='http://127.0.0.1:7897'
```

---

## 3. 技术栈与约束

| 项 | 值 |
|----|-----|
| 框架 | React 19 + TypeScript + Vite 8 |
| 路由 | `react-router-dom` 7，`BrowserRouter basename="/spark"` |
| 样式 | 纯 CSS，单文件 `src/index.css`（约 2300 行） |
| 图标 | 自绘内联 SVG，`src/components/Icons.tsx` |
| 文案 / 链接 / 数据 | **`src/data/site.ts`（唯一数据源）** |
| 部署 | GitHub Actions → Pages；SPA 用 `scripts/spa-fallback.mjs` 生成 `404.html` |

**改路径名时**：同步改 `vite.config.ts` 的 `base` 与 `App.tsx` 的 `basename`，并**重新生成二维码**。

---

## 4. 路由地图（12 页）

| 路径 | 文件 | 内容职责 |
|------|------|----------|
| `/spark/` | `HomePage.tsx` | 首屏叙事、六环节电路条、指标、功能入口 |
| `/spark/loop` | `LoopPage.tsx` | 六环节闭环详解 |
| `/spark/features` | `FeaturesPage.tsx` | 产品功能 |
| `/spark/tech` | `TechPage.tsx` | 架构与节点说明 |
| `/spark/demo` | `DemoPage.tsx` | 实跑证据卡 |
| `/spark/video` | `VideoPage.tsx` | 三语实机截图 + 讲解视频预留位 |
| `/spark/innovation` | `InnovationPage.tsx` | 创新点 |
| `/spark/play` | `PlayPage.tsx` | 三阶段闯关：启动 → 捕获痛点 → 点亮闭环 |
| `/spark/business` | `BusinessPage.tsx` | 商业分层与价值金字塔 |
| `/spark/community` | `CommunityPage.tsx` | 同课程研讨（**规划中**） |
| `/spark/try` | `TryPage.tsx` | 跳转星辰 Agent |
| `/spark/team` | `TeamPage.tsx` | 求针队团队 |

- 导航挂 7 个主入口（首页 / 闭环 / 演示 / 闯关 / 商业 / 体验 / 团队），最左是演示语种 `中 / EN / MS`（`sessionStorage`，默认中文）。切换只改首页实机截图、六环节标题与说明、`/video` 语种。社群仍是规划中说明页，只放页脚。页脚不再放代码仓库。
- 另有 4 页（功能 / 架构 / 证据 / 创新）**只从首页快捷入口进入**，不在顶栏。
- 壳与导航：`src/components/Layout.tsx`；路由表：`src/App.tsx`。

---

## 5. 组件与交互

| 组件 | 作用 | 备注 |
|------|------|------|
| `Opener.tsx` | 约 2.3 秒开场序列（光束 → 字标 → 进度条 → 上滑揭幕） | `THEME: 'dark' \| 'light'` 一处切换；`ALWAYS_PLAY = import.meta.env.DEV`，开发环境每次刷新都播；生产每会话一次（`sessionStorage: spark.opener.v1`）。改版开场请升版本号 |
| `LoopRail.tsx` | 首页六环节电路条，逐个点亮、可点选、可重播 | 节点全部取自 `LOOP_STEPS` |
| `DemoWindow.tsx` | 首屏实机截图窗口，多帧轮播 | 用 `public/demo/*.jpg` 抽帧，不用大视频 |
| `Layout.tsx` | 导航、页脚、重播入口、星火杯徽标 | 页脚「重播开场」调用 `replayOpener()` |

**开场动画调试**：页脚「重播开场」按钮；或 URL 加 `?opener=1` / `#opener` 强制重播。
**无障碍**：`prefers-reduced-motion: reduce` 下开场自动跳过、进场动画直接出终态。

---

## 6. 口径与单一数据源（改文案前必读）

文件：`src/data/site.ts`

- 作品名：**期末速通官**；队名：**求针队**；资质：**2026 iFLYTEK 星火杯 · 全国 20 强**。
- 队长：唐靖濠 · 多伦多大学；指导：方舟 · 南通理工学院。
- 主链路：**六环节闭环** —— 资料识别 → 考点地图 → 限时精讲 → 诊断测验 → 判分补练 → 记忆续接。
  - 依据：答辩稿 V6 第 04 页；海报、PPT、站点三处已统一为六环节。
  - **历史口径「五步 / 五环节」已作废**，见旧稿请忽略。

### 硬规则

1. **`LOOP_STEPS` 是环节的唯一来源。** 环节数、链路文案一律引用派生常量 `LOOP_CN` / `LOOP_CHAIN` / `LOOP_CHAIN_EN`（以及 `PLAY_ORDER` / `PLAY_CARDS`），**禁止手写「六步」「六环节」或链路字符串**。新增 / 删除环节只改 `LOOP_STEPS`，全站自动跟随。
2. **术语统一用「环节」，不用「步」。**
3. **验证方式有坑**：Vite 会保留模板字面量，`grep "六步"` 抓不到 `{LOOP_CN}步` 这种运行时拼接。改口径后必须**实际打开页面看**，或用 Node 跑一遍渲染，不要只靠静态搜索。
4. 页面总数常量 `PAGE_TOTAL`（首页 HUD 的「01 / 12」引用它）需与 `App.tsx` 路由数同步。

---

## 7. 演示材料

源目录：

```text
全国20/多伦多大学-唐靖濠-求针队-期末速通官/.../03-演示材料/
  中文演示视频.mp4 · 英语演示视频.mp4 · 马来语演示视频.mp4
```

- 视频体积过大，**不进 git**。当前策略：抽帧 JPG 存 `public/demo/`（共 12 张，约 1.3MB），`/video` 页展示。
- 要挂完整视频：走 GitHub Releases，把地址填进 `DEMO_VIDEOS[].src`。
- **讲解视频预留位**：`site.ts` 的 `WALKTHROUGH.src` 目前为空字符串 → `/video?tab=walk` 显示「预留位 + 章节大纲」。把 mp4 放进 `public/media/` 并把 `src` 填成 `'media/xxx.mp4'`，页面**自动**切换成就地播放，无需改组件。
- 本地大文件暂存：`spark/_video_stage/`（已 gitignore）。

---

## 8. 品牌素材与分享卡片

| 文件 | 用途 |
|------|------|
| `public/brand/spark-flame.png` | 星火火焰标（导航徽标） |
| `public/brand/cup-lockup-light.png` | 官方三标组合 · 反白版（深色底 / 页脚） |
| `public/brand/cup-lockup-dark.png` | 官方三标组合 · 深色版（浅色底 / 分享卡） |
| `public/favicon.svg` | 站点图标（深蓝渐变 + 电光蓝闪电，自绘） |
| `public/og.jpg` | 1200×630 分享卡片（微信群 / IM 转发缩略图） |

品牌素材提取自组委会《2026届星火杯Poster参考模板.pptx》内嵌矢量图。
OG 卡生成脚本：`../_preview/make_og.py`（Pillow，改文案后重跑即可）。

**注意**：`index.html` 里的 `og:image` 写的是绝对地址 `https://www.moirark.com/spark/og.jpg`，**换域名要同步改**。

---

## 9. 部署与上线

仓库：**Sorthark/spark** · 自定义域 **www.moirark.com** · 子路径 **/spark/**
工作流：`.github/workflows/deploy-pages.yml`（push main 触发）

W3 已推 `main`。之后改代码仍是：提交后 `git push origin main`，看 Actions 是否绿勾；约 1 分钟后刷新生效（必要时强刷缓存）。

**验收（推完必须逐条走一遍）**：

1. 手机扫码打开 `https://www.moirark.com/spark/`，首屏 3 秒内出内容，导航不折行。
2. 首页六环节电路条显示 01–06。
3. `/video` 能切中英马截图；`/video?tab=walk` 显示讲解预留位；`/try` 能进 Agent；`/play` 可通关。
4. 把链接发到微信群，卡片有标题、描述和缩略图。
5. `npm run build` 无报错。

---

## 10. 二维码清单

| 文件 | 用途 |
|------|------|
| `全国20/期末速通官_作品站二维码.png` | 海报 / PSD 贴入（深蓝码点，白底） |
| `全国20/期末速通官_作品站二维码_带说明.png` | PPT / 交接预览 |
| `spark/public/qr/spark-qr.png` | 高清纯码 |
| `spark/public/qr/spark-qr-web.png` | 小尺寸 Web |
| `spark/public/qr/spark-qr-card.png` | 带标题说明卡 |

内容 URL 一律：`https://www.moirark.com/spark/`。重新生成示例：

```python
import qrcode
from qrcode.constants import ERROR_CORRECT_H
qr = qrcode.QRCode(error_correction=ERROR_CORRECT_H, box_size=18, border=3)
qr.add_data("https://www.moirark.com/spark/")
qr.make(fit=True)
qr.make_image(fill_color="#0c2340", back_color="white").save("qr.png")
```

---

## 11. 设计方向（继续打磨时）

**主视觉**：深蓝 / 电光蓝 / 白底 —— 首屏是「仪器化精密感」（细轨、四角标、透视网格），不是通用 AI 紫渐变。

- 主色：`--blue #1f6feb` · `--cyan #2eb7ff` · `--blue-deep` · 深蓝底 `#0c2340`。
- 证据优先：用 `public/demo/` 真实截图，少用概念插画。
- 移动优先：海报扫码以手机竖屏为主，**任何改动都要在 390px 宽下看一遍**。

**参考**：`茶叶2`（多页结构）、`全国20/explain_期末速通官.html`、海报预览 `全国20/Poster_*.png`。

---

## 12. 任务边界

**可以做**：视觉与动效打磨、响应式、`/loop` 步进动画、`/tech` 架构图、性能优化。

**不要做（除非用户明确要求）**：

- 改 `base` / `basename` / `/spark/` 路径 → 海报码失效。
- 把海报码改成 Agent 直链。
- 改团队姓名、学校、资质等事实口径。
- 把大体积 MP4 commit 进仓库。
- 绕过 `LOOP_STEPS` 手写环节数或链路文案。

---

## 13. 待办与优化空间

详见同目录 `../全国20/期末速通官_作品站交接.md` 的「优化待办」一节，或直接问用户当前优先级。
高优先级两项：**接入讲解视频**、**首屏副标题瘦身**。上线以 Actions 绿勾和公网验收为准。

---

## 14. 相关材料路径

| 材料 | 路径 |
|------|------|
| 本站工程 | `D:\cusor项目\智能体设计\spark` |
| 答辩稿 V6 | `全国20/期末速通官_项目答辩PPT_V6.pptx` |
| 蓝白科技答辩版 V4 | `全国20/期末速通官_蓝白科技答辩版_V4.pptx` |
| 海报源文件 | `全国20/海报.psd` · `全国20/海报261012.png` |
| 提交包 / 演示视频 | `全国20/多伦多大学-唐靖濠-求针队-期末速通官/` |
| 部署细节 | [`DEPLOY.md`](./DEPLOY.md) |
