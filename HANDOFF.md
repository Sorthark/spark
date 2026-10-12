# 期末速通官 · Spark 作品站交接文档（W2）

给其他窗口 / AI：**先跑通，再美化细化**。本仓库是可运行骨架，不是终稿视觉。

---

## 1. 项目是什么

- **用途**：星火杯海报扫码落地页（迷你作品站 W2），结构对齐茶叶国际赛站 `D:\cusor项目\茶叶2`。
- **根目录**：`D:\cusor项目\智能体设计\spark`
- **线上路径约定**：`https://<域名>/spark/`（Vite `base` + Router `basename` 均为 `/spark`）
- **海报二维码应指向**：站点根 `.../spark/`，不要直链 Agent。

---

## 2. 如何本地跑通（必读）

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

（若 5173 被占用或报 EACCES，改用其他端口：`npm run dev -- --host 127.0.0.1 --port 5174`。当前交接时已在 **5174** 跑通。）

构建预览：

```bash
npm run build
npm run preview
```

同样访问带 `/spark/` 的 URL。产物在 `dist/`。

---

## 3. 技术栈与约束

| 项 | 值 |
|----|-----|
| 框架 | React 19 + TypeScript + Vite |
| 路由 | `react-router-dom`，`BrowserRouter basename="/spark"` |
| 样式 | 目前纯 CSS：`src/index.css`（未上 Tailwind；可改，但需同步改组件 class） |
| 文案/链接数据集中 | `src/data/site.ts` |
| 部署 | 静态站；GitHub Pages 需发布 **build 产物**，子路径 `/spark/` |

**改路径名时**：同步改 `vite.config.ts` 的 `base` 与 `App.tsx` 的 `basename`。

**GitHub Pages SPA**：子路由刷新 404 时，需在 `dist` 增加 `404.html`（复制 `index.html`）或 Actions 配置。

---

## 4. 路由地图（勿随意删页，可改版式）

| 路径 | 文件 | 内容职责 |
|------|------|----------|
| `/spark/` | `src/pages/HomePage.tsx` | Hero、锚点导航、指标、模块入口卡 |
| `/spark/loop` | `LoopPage.tsx` | 五步闭环详解 |
| `/spark/features` | `FeaturesPage.tsx` | 产品功能 |
| `/spark/tech` | `TechPage.tsx` | 架构与 29 节点（需补真实工作流截图） |
| `/spark/demo` | `DemoPage.tsx` | 实跑证据（需补截图） |
| `/spark/innovation` | `InnovationPage.tsx` | 创新点 |
| `/spark/try` | `TryPage.tsx` | 大按钮跳转星辰 Agent |
| `/spark/team` | `TeamPage.tsx` | 求针对团队 |

壳与导航：`src/components/Layout.tsx`  
路由表：`src/App.tsx`  
入口：`src/main.tsx` → `index.html` 仅挂载 `#root`

---

## 5. 权威文案与外链（改文案先改这里）

文件：`src/data/site.ts`

- 项目名：期末速通官  
- 队名：求针对  
- 卖点：把突击做成闭环 · 紧扣本人资料，绝不超纲  
- Agent：`AGENT_URL`（讯飞星辰分享页，已写入）  
- 指标：29 / 6 / 8 / 2  
- 闭环五步、功能三点、创新四条、导师/队长/成员

**口径注意（与答辩材料对齐）：**

- 对外优先「五步闭环」；PPT 若写「六环节」，站内不要混用两套说法。  
- 队名统一「求针对」，勿单独写成 FinalSprint（除非品牌页并列标注）。  
- 队长：唐靖濠 · 多伦多大学；指导：方舟 · 南通理工；勿把封面学校写成队长单位。

---

## 6. 设计方向（美化时请遵循）

**推荐视觉**：对齐答辩 PPT「蓝白科技」`全国20/期末速通官_蓝白科技答辩版_V4.pptx`

- 主色：深蓝 / 电光蓝 / 白底；少粉紫玻璃、少通用 AI 紫渐变。  
- 信息架构：像茶叶站——首页总览 + 子页深入；首页模块可增强，但子路由保留。  
- 证据优先：技术页 / 实跑页用**真实截图**，少用 AI 概念插画。  
- 移动优先：海报扫码以手机竖屏为主。

**参考（结构，非视觉照搬）：**

- `D:\cusor项目\茶叶2`（多页 Layout、Home 多 section、子路由）  
- `D:\cusor项目\智能体设计\全国20\explain_期末速通官.html`（五步动画可迁到 `/loop`）  
- 海报预览：`全国20/Poster_L2T1_流程绿预览.png`、`Poster_L2T3_流程HUD预览.png`

**可选用的增强（按优先级）：**

1. `/demo`、`/tech` 贴入真实 Agent / 工作流截图（从 V4 PPT 或星火编辑器导出）  
2. `/loop` 加步进高亮动画（可移植 explain HTML 逻辑）  
3. 首页 Hero 大图 / 闭环示意图（产品感，非书房发光书）  
4. 统一字体（网页字体可；注意加载与中文）  
5. 可选引入 Tailwind（与茶叶2 一致），但一次改完，避免半套 class

---

## 7. 相关材料路径（取材用）

| 材料 | 路径 |
|------|------|
| 本站 | `D:\cusor项目\智能体设计\spark` |
| 最新答辩 PPT | `D:\cusor项目\智能体设计\全国20\期末速通官_蓝白科技答辩版_V4.pptx` |
| 海报 PSD | `D:\cusor项目\智能体设计\全国20\海报.psd` |
| 旧讲解单页 | `D:\cusor项目\智能体设计\全国20\explain_期末速通官.html` |
| 茶叶站参考 | `D:\cusor项目\茶叶2` |
| Agent URL 备份 | `D:\cusor项目\智能体设计\_tmp_qimo_eval\poster_work\urls.txt` |

---

## 8. 给美化 AI 的任务边界

**可以做：**

- 重做 `index.css` / 组件视觉、动效、响应式  
- 丰富 Home 区块（仍链到现有子路由）  
- 增加 `public/` 或 `src/assets/` 图片并引用  
- 在 `/loop` 做交互动画  
- 准备 GitHub Pages 配置（保持 `/spark/`）

**不要做（除非用户明确要求）：**

- 删掉子路由或改掉 `basename` / `base` 导致海报码失效  
- 把 Agent 链改成错误地址  
- 改团队姓名学校等事实口径  
- 用占位插画冒充实跑证据  

**验收标准建议：**

1. `npm run dev` → `http://127.0.0.1:<端口>/spark/` 首页有清晰卖点与导航  
2. 各子页可点通；`/try` 能打开星辰 Agent  
3. `npm run build` 无报错  
4. 手机宽度下不横向溢出、主 CTA 可见  

---

## 9. 公网部署

见同目录 [`DEPLOY.md`](./DEPLOY.md)。目标地址：`https://<用户名>.github.io/spark/`（勿再用本机 127.0.0.1 做海报码）。

## 10. 一句话现状

骨架已通：路由、文案、Agent 跳转齐全；视觉与截图证据偏薄。下一窗口任务 = **在不破坏 `/spark/` 路径与数据口径的前提下，把站点做到茶叶站同级的完成度与蓝白科技质感。**
