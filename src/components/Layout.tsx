import { Link, NavLink, Outlet } from 'react-router-dom'
import { SITE } from '../data/site'

const links = [
  { to: '/', label: '首页', end: true },
  { to: '/loop', label: '闭环' },
  { to: '/video', label: '视频' },
  { to: '/play', label: '闯关' },
  { to: '/business', label: '商业' },
  { to: '/community', label: '社群' },
  { to: '/try', label: '体验' },
  { to: '/team', label: '团队' },
]

export function Layout() {
  return (
    <div className="site">
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
            {links.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
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
