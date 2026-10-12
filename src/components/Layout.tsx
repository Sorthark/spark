import { Link, NavLink, Outlet } from 'react-router-dom'
import { SITE } from '../data/site'
import {
  IconBiz,
  IconGithub,
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
  { to: '/video', label: '视频', Icon: IconVideo },
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
            <a
              className="gh-link"
              href="https://github.com/Sorthark/spark"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <IconGithub size={16} />
            </a>
          </nav>
        </div>
      </header>
      <main>
        <div className="wrap">
          <Outlet />
        </div>
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <span>
            {SITE.name} · {SITE.team} · {SITE.cup}
          </span>
          <Link to="/try">扫码同款入口 · 立即体验 →</Link>
        </div>
      </footer>
    </div>
  )
}
