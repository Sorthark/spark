# 期末速通官 · Spark 作品站（W2）

海报二维码指向本站根路径：

```text
https://你的域名/spark/
```

结构对齐茶叶国际赛站（`茶叶2`）：首页多模块 + 子路由专题页。

## 路径

| 路径 | 说明 |
|------|------|
| `/spark/` | 首页 |
| `/spark/loop` | 五步闭环 |
| `/spark/features` | 功能 |
| `/spark/tech` | 技术与工作流 |
| `/spark/demo` | 实跑证据 |
| `/spark/innovation` | 创新点 |
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

将 `dist/` 部署到主机的 `/spark/` 子目录。若主机根路径不是子目录，保持 `vite.config.ts` 的 `base: '/spark/'` 与 `BrowserRouter basename="/spark"`。
