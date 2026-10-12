# 如何从「本机」换成「公网网址」

本站是静态网页，没有账号登录系统。你要的是：**任何人用浏览器打开一个 https 链接**，而不是 `127.0.0.1`。

当前已配置：`base` / `basename` = `/spark/`  

**已上线正式地址（海报二维码请用这个）：**

```text
https://www.moirark.com/spark/
```

备用（GitHub 默认域，若自定义域异常时可查）：`https://sorthark.github.io/spark/`

---

## 推荐：GitHub Pages（免费）

### 你需要先做的（本机交互，AI 无法代劳）

1. 安装并登录 GitHub CLI（或用网页建库）：
   ```bash
   gh auth login
   ```
2. 确认已登录：`gh auth status`

### 一键建库并推送（在 `spark` 目录执行）

```bash
cd "D:\cusor项目\智能体设计\spark"

git init
git add .
git commit -m "feat: spark showcase site for Spark Cup poster QR"

# 仓库名必须叫 spark，这样 Pages 路径才是 /spark/
gh repo create spark --public --source=. --remote=origin --push

# 网页：仓库 Settings → Pages → Source 选 GitHub Actions
# 推送后看 Actions 里 "Deploy Spark site to GitHub Pages" 是否绿勾
```

成功后打开：

`https://<用户名>.github.io/spark/`

仓库里已有工作流：`.github/workflows/deploy-pages.yml`  
以后改代码再 `git push`，网站会自动更新。

### 若仓库不叫 spark

要么改仓库名为 `spark`，要么改两处并重建：

- `vite.config.ts` → `base: '/你的仓库名/'`
- `src/App.tsx` → `basename="/你的仓库名"`

---

## 备选：不登录 CLI，拖拽上传

1. 本机执行：`npm run build`
2. 打开 [https://app.netlify.com/drop](https://app.netlify.com/drop)（或 Cloudflare Pages 上传）
3. 把 **`dist` 整个文件夹**拖进去  
4. 得到临时公网网址（可再绑自定义域名）

注意：拖拽方式默认站点在**根路径** `/`，与现在的 `/spark/` 配置可能冲突。若用拖拽，临时把 `base` 和 `basename` 改成 `'/'` 再 build；正式海报仍建议用 GitHub 的 `/spark/` 方案。

---

## 和「登录」的区别

| 说法 | 实际意思 |
|------|----------|
| 本机登录 | 只有你电脑上的 `http://127.0.0.1:5174/spark/` |
| 网址访问 | 部署后任何人打开 `https://….github.io/spark/` |
| 体验 Agent | 站内「立即体验」跳转讯飞星辰（对方平台账号，与本站无关） |

---

## 验证清单

- [ ] 手机 4G（非同一 WiFi）能打开公网地址  
- [ ] 首页、闭环、体验按钮可用  
- [ ] 用该地址生成二维码，贴进海报 PSD  
