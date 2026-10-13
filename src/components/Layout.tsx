import { Link, NavLink, Outlet } from 'react-router-dom'
import { CUP, SITE, tx } from '../data/site'
import { LANGS, useLocale } from '../locale'
import { UI } from '../ui'
import { Opener, replayOpener } from './Opener'
import {
  IconBiz,
  IconHome,
  IconLoop,
  IconPlay,
  IconTeam,
  IconVideo,
  IconZap,
} from './Icons'

const links = [
  { to: '/', id: 'home' as const, end: true, Icon: IconHome },
  { to: '/loop', id: 'loop' as const, Icon: IconLoop },
  { to: '/video', id: 'video' as const, Icon: IconVideo },
  { to: '/play', id: 'play' as const, Icon: IconPlay },
  { to: '/business', id: 'business' as const, Icon: IconBiz },
  { to: '/try', id: 'try' as const, Icon: IconZap },
  { to: '/team', id: 'team' as const, Icon: IconTeam },
]

export function Layout() {
  const { lang, setLang } = useLocale()

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
            <div className="lang-switch" role="group" aria-label="语言">
              {LANGS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={lang === item.id}
                  onClick={() => setLang(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            {links.map(({ to, id, end, Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                <Icon size={14} />
                {tx(lang, UI.nav[id])}
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
              <b>星火杯 · {tx(lang, UI.honor)}</b>
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
              {SITE.name} · {SITE.team} · {SITE.cup} · {tx(lang, UI.honor)}
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
              {tx(lang, UI.footer.replay)}
            </button>
            <Link to="/community">{tx(lang, UI.footer.community)}</Link>
            <Link to="/try">{tx(lang, UI.footer.try)}</Link>
          </div>
        </div>
      </footer>
      {/* 开场序列：每个会话只播一次，降低动效偏好下自动跳过 */}
      <Opener />
    </div>
  )
}
