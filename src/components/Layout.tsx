import { Link, NavLink, Outlet } from 'react-router-dom'
import { CUP, SITE } from '../data/site'
import { Opener, replayOpener } from './Opener'
import {
  IconBiz,
  IconHome,
  IconLoop,
  IconPlay,
  IconTeam,
  IconUsers,
  IconVideo,
  IconZap,
} from './Icons'

const links = [
  { to: '/', label: '首页', end: true, Icon: IconHome },
  { to: '/loop', label: '闭环', Icon: IconLoop },
  { to: '/video', label: '演示', Icon: IconVideo },
  { to: '/play', label: '闯关', Icon: IconPlay },
  { to: '/business', label: '商业', Icon: IconBiz },
  { to: '/community', label: '社群', Icon: IconUsers },
  { to: '/try', label: '体验', Icon: IconZap },
  { to: '/team', label: '团队', Icon: IconTeam },
]

export function Layout() {
  return (
    <div className="site">
      <div className="tech-bg" aria-hidden>
        <div className="tech-grid" />
        <div className="tech-orb a" />
        <div className="tech-orb b" />
      </div>
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" className="brand">
            <span className="brand-mark">SP</span>
            <span>
              {SITE.name}
              <small>
                {SITE.team} · Spark Cup
              </small>
            </span>
          </Link>
          <nav className="nav-links">
            {links.map(({ to, label, end, Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                <Icon size={14} />
                {label}
              </NavLink>
            ))}
          </nav>
          {/* 赛事官方标识：星火品牌标 + 星火杯字样。
              与 nav-links 平级而非嵌套，窄屏时它留在顶行、导航单独成一条横向滚动带。 */}
          <a
            className="cup-badge"
            href={CUP.url}
            target="_blank"
            rel="noreferrer"
            title={`${CUP.full} · 官方参赛作品`}
          >
            <img src={CUP.flame} alt="" />
            <span>
              <b>星火杯 · {SITE.honor}</b>
              <small>2026 iFLYTEK</small>
            </span>
          </a>
        </div>
      </header>
      <main>
        <div className="wrap">
          <Outlet />
        </div>
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-id">
            <img
              className="cup-lockup"
              src={CUP.lockup}
              alt="科大讯飞 · 讯飞开放平台 · AI 开发者大赛"
              loading="lazy"
            />
            <span className="footer-meta">
              {SITE.name} · {SITE.team} · {SITE.cup} · {SITE.honor}
            </span>
          </div>
          <div className="footer-links">
            <button
              type="button"
              className="footer-replay"
              onClick={() => {
                window.scrollTo({ top: 0 })
                replayOpener()
              }}
            >
              重播开场
            </button>
            <a href="https://github.com/Sorthark/spark" target="_blank" rel="noreferrer">
              代码仓库
            </a>
            <Link to="/try">扫码同款入口 · 立即体验 →</Link>
          </div>
        </div>
      </footer>
      {/* 开场序列：每个会话只播一次，降低动效偏好下自动跳过 */}
      <Opener />
    </div>
  )
}
