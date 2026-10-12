# 期末速通官 · Spark 作品站交接文档（W2）

给其他窗口 / AI / 队友：**先看线上与口径，再改代码。**

---

## 0. 一句话现状（2026-10）

**公网站已上线**，海报码已生成；三语实机演示以截图上线（完整 MP4 过大未挂站）。视觉仍可继续打磨，但路径、Agent、演示证据、玩法页均已可用。

| 项 | 值 |
|----|-----|
| 公网首页 | https://www.moirark.com/spark/ |
| 演示截图页 | https://www.moirark.com/spark/video |
| Agent 体验 | 站内 `/try` 或见 `site.ts` 的 `AGENT_URL` |
| GitHub 仓库 | https://github.com/Sorthark/spark |
| 本机根目录 | `D:\cusor项目\智能体设计\spark` |
| 海报二维码（纯码） | `全国20/期末速通官_作品站二维码.png` |
| 海报二维码（带说明卡） | `全国20/期末速通官_作品站二维码_带说明.png` |
| 站内 QR 资源 | `spark/public/qr/spark-qr.png` 等 |

**海报二维码必须指向站点根** `https://www.moirark.com/spark/`，**不要**直链星辰 Agent。

---

## 1. 项目是什么

- **用途**：星火杯海报扫码落地页（迷你作品站 W2），结构对齐茶叶国际赛站 `D:\cusor项目\茶叶2`。
- **线上路径**：`/spark/`（Vite `base` + Router `basename` 均为 `/spark`）
- **自定义域**：`moirark.com` → GitHub Pages（仓库 Pages 设置已绑）

---

## 2. 如何本地跑通

不要双击打开 `index.html`（React 壳，会空白）。

```bash
cd "D:\cusor项目\智能体设计\spark"
npm install
npm run dev
```

浏览器打开终端提示的地址，**必须带 `/spark/`**，例如：

```text
http://127.0.0.1:5174/spark/
```

构建预览：

```bash
npm run build
npm run preview
```

产物在 `dist/`。推送 `main` 后 Actions「Deploy Spark site to GitHub Pages」自动上线。

**代理（本机 gh / npm 超时）：** Clash 混合端口常用 `7897`：

```powershell
$env:HTTPS_PROXY='http://127.0.0.1:7897'
$env:HTTP_PROXY='http://127.0.0.1:7897'
```

---

## 3. 技术栈与约束

| 项 | 值 |
|----|-----|
| 框架 | React 19 + TypeScript + Vite |
| 路由 | `react-router-dom`，`BrowserRouter basename="/spark"` |
| 样式 | 纯 CSS：`src/index.css`（GitHub 风图标组件在 `src/components/Icons.tsx`） |
| 文案 / 链接 / 演示数据 | `src/data/site.ts` |
| 部署 | GitHub Actions → Pages；SPA 用 `scripts/spa-fallback.mjs` 生成 `404.html` |

**改路径名时**：同步改 `vite.config.ts` 的 `base` 与 `App.tsx` 的 `basename`，并**重新生成二维码**。

---

## 4. 路由地图

| 路径 | 文件 | 内容职责 |
|------|------|----------|
| `/spark/` | `HomePage.tsx` | Hero、活动条、指标、模块入口 |
| `/spark/loop` | `LoopPage.tsx` | 五步闭环详解 |
| `/spark/features` | `FeaturesPage.tsx` | 产品功能 |
| `/spark/tech` | `TechPage.tsx` | 架构与节点说明 |
| `/spark/demo` | `DemoPage.tsx` | 实跑证据卡（链到截图页） |
| `/spark/video` | `VideoPage.tsx` | **三语实机截图**（可切换镜头） |
| `/spark/innovation` | `InnovationPage.tsx` | 创新点 |
| `/spark/try` | `TryPage.tsx` | 跳转星辰 Agent |
| `/spark/team` | `TeamPage.tsx` | 求针对团队 |
| `/spark/play` | `PlayPage.tsx` | 多阶段排序闯关 → 通关进 Agent |
| `/spark/business` | `BusinessPage.tsx` | 商业分层 |
| `/spark/community` | `CommunityPage.tsx` | 同课程研讨预留 |

壳与导航：`src/components/Layout.tsx`  
路由表：`src/App.tsx`

---

## 5. 权威文案与外链

文件：`src/data/site.ts`

- 项目名：期末速通官 · 队名：求针对  
- 卖点：把突击做成闭环 · 紧扣本人资料，绝不超纲  
- Agent：`AGENT_URL`（botId=5788571）  
- 指标：29 / 6 / 8 / 2  
- 演示：`DEMO_VIDEOS` → `public/demo/{zh,en,ms}*.jpg`（从参赛 MP4 抽帧）

**口径：**

- 对外优先「五步闭环」；勿与 PPT「六环节」混用。  
- 队名统一「求针对」。  
- 队长：唐靖濠 · 多伦多大学；指导：方舟 · 南通理工。

---

## 6. 演示材料说明

源目录：

```text
全国20/多伦多大学-唐靖濠-求针队-期末速通官/
  多伦多大学-唐靖濠-求针对-期末速通官/03-演示材料/
    中文演示视频.mp4 · 英语演示视频.mp4 · 马来语演示视频.mp4
```

- 马来语源片约 619MB，中文/英语亦偏大，**不宜进 git**。  
- 当前策略：抽帧 JPG → `public/demo/`，`/video` 页展示。  
- 若以后要挂完整视频：用 GitHub Releases（勿直接 commit），再把 `DEMO_VIDEOS[].src` 填 Release URL。  
- 本地暂存大文件目录：`spark/_video_stage/`（已 gitignore）。

---

## 7. 二维码文件清单

| 文件 | 用途 |
|------|------|
| `全国20/期末速通官_作品站二维码.png` | 海报 / PSD 贴入（深蓝码点，白底） |
| `全国20/期末速通官_作品站二维码_带说明.png` | PPT / 交接预览 |
| `spark/public/qr/spark-qr.png` | 高清纯码（站内 / 再导出） |
| `spark/public/qr/spark-qr-web.png` | 小尺寸 Web |
| `spark/public/qr/spark-qr-card.png` | 带标题说明卡 |

内容 URL 一律：`https://www.moirark.com/spark/`

重新生成示例：

```python
import qrcode
from qrcode.constants import ERROR_CORRECT_H
qr = qrcode.QRCode(error_correction=ERROR_CORRECT_H, box_size=18, border=3)
qr.add_data("https://www.moirark.com/spark/")
qr.make(fit=True)
qr.make_image(fill_color="#0c2340", back_color="white").save("qr.png")
```

---

## 8. 设计方向（继续美化时）

**推荐视觉**：答辩 PPT「蓝白科技」`全国20/期末速通官_蓝白科技答辩版_V4.pptx`

- 主色：深蓝 / 电光蓝 / 白底；少粉紫玻璃、少通用 AI 紫渐变。  
- 证据优先：用 `public/demo/` 真实截图，少用概念插画。  
- 移动优先：海报扫码以手机竖屏为主。

**参考：**

- `D:\cusor项目\茶叶2`（多页结构）  
- `全国20/explain_期末速通官.html`（五步动画可迁 `/loop`）  
- 海报预览：`全国20/Poster_L2T1_*.png`、`Poster_L2T3_*.png`

---

## 9. 相关材料路径

| 材料 | 路径 |
|------|------|
| 本站 | `D:\cusor项目\智能体设计\spark` |
| 答辩 PPT V4 | `全国20/期末速通官_蓝白科技答辩版_V4.pptx` |
| 海报 PSD | `全国20/海报.psd` |
| 提交包 / 演示视频 | `全国20/多伦多大学-唐靖濠-求针队-期末速通官/...` |
| 部署说明 | [`DEPLOY.md`](./DEPLOY.md) |

---

## 10. 给下一窗口的任务边界

**可以做：**

- 重做视觉、动效、响应式  
- `/loop` 步进动画、首页 Hero 强化  
- 补工作流架构图到 `/tech`  
- 海报 PSD 嵌入本交接提供的二维码  

**不要做（除非用户明确要求）：**

- 删掉 `/spark/` 路径或改 `base`/`basename` 导致海报码失效  
- 把海报码改成 Agent 直链  
- 改团队姓名学校等事实口径  
- 把大体积 MP4 commit 进仓库  

**验收：**

1. 手机扫码打开 `https://www.moirark.com/spark/`  
2. `/video` 能切中英马截图；`/try` 能进 Agent；`/play` 可通关  
3. `npm run build` 无报错  

---

## 11. 公网部署速查

已配置仓库：**Sorthark/spark** · 自定义域 **www.moirark.com** · 子路径 **/spark/**

改代码后：

```bash
git add -A
git commit -m "..."
git push origin main
```

看 Actions 是否绿勾；约 1 分钟后刷新生效（必要时强刷缓存）。

详细步骤见 [`DEPLOY.md`](./DEPLOY.md)。
