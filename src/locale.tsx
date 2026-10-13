import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { SiteLang } from './data/site'

const KEY = 'spark.lang.v1'

export const LANGS: { id: SiteLang; label: string }[] = [
  { id: 'zh', label: '中' },
  { id: 'en', label: 'EN' },
  { id: 'ms', label: 'MS' },
]

const HTML_LANG: Record<SiteLang, string> = {
  zh: 'zh-CN',
  en: 'en',
  ms: 'ms',
}

function readLang(): SiteLang {
  try {
    const saved = sessionStorage.getItem(KEY)
    if (saved === 'zh' || saved === 'en' || saved === 'ms') return saved
  } catch {
    /* 隐私模式：保持默认中文 */
  }
  return 'zh'
}

type LocaleValue = {
  lang: SiteLang
  setLang: (lang: SiteLang) => void
}

const LocaleContext = createContext<LocaleValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<SiteLang>(readLang)

  const setLang = (next: SiteLang) => {
    setLangState(next)
    try {
      sessionStorage.setItem(KEY, next)
    } catch {
      /* 忽略 */
    }
  }

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang]
  }, [lang])

  return <LocaleContext.Provider value={{ lang, setLang }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const value = useContext(LocaleContext)
  if (!value) throw new Error('useLocale must be used within LocaleProvider')
  return value
}
