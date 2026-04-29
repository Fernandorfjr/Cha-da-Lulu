import { useCallback, useEffect, useRef, useState } from 'react'

import { siteConfig } from '../data/config'

const linkClassName =
  'rounded-full px-3 py-2.5 text-[0.85rem] font-medium leading-none text-truffle/70 transition hover:bg-white/80 hover:text-truffle sm:py-2 sm:text-sm'

export function SiteHeader() {
  const { navigation, hero } = siteConfig
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen, closeMenu])

  useEffect(() => {
    if (!menuOpen) return
    const onPointerDown = (event: PointerEvent) => {
      const node = navRef.current
      if (node && event.target instanceof Node && !node.contains(event.target)) {
        closeMenu()
      }
    }
    document.addEventListener('pointerdown', onPointerDown, true)
    return () => document.removeEventListener('pointerdown', onPointerDown, true)
  }, [menuOpen, closeMenu])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 px-3 pb-2.5 sm:px-8 sm:pb-3 lg:px-10"
      style={{ paddingTop: 'max(0.5rem, env(safe-area-inset-top, 0px))' }}
    >
      <nav
        ref={navRef}
        aria-label="Principal"
        className="mx-auto flex max-w-7xl flex-col rounded-[1.45rem] border border-white/70 bg-white/55 px-3.5 py-3 shadow-soft backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:rounded-[1.75rem] sm:px-6 sm:py-4"
      >
        <div className="flex w-full min-w-0 flex-row items-center justify-between gap-3 sm:w-auto sm:justify-start">
          <a
            href="#topo"
            onClick={closeMenu}
            className="min-w-0 shrink font-display text-[1.7rem] font-semibold tracking-[-0.035em] text-truffle sm:text-3xl sm:tracking-[-0.04em]"
          >
            Chá da {hero.title}
          </a>
          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-rose/50 bg-white/80 text-truffle shadow-sm transition hover:bg-white sm:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                <path
                  fill="currentColor"
                  d="M6.22 6.22a1 1 0 0 1 1.42 0L12 10.58l4.36-4.36a1 1 0 1 1 1.42 1.42L13.42 12l4.36 4.36a1 1 0 0 1-1.42 1.42L12 13.42l-4.36 4.36a1 1 0 0 1-1.42-1.42L10.58 12 6.22 7.64a1 1 0 0 1 0-1.42Z"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                <path
                  fill="currentColor"
                  d="M5 7a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden flex-wrap justify-end gap-2 sm:flex sm:gap-3">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className={linkClassName}>
              {item.label}
            </a>
          ))}
        </div>

        {menuOpen ? (
          <div
            id="mobile-nav-panel"
            className="mt-3 flex flex-col gap-1 border-t border-rose/40 pt-4 sm:hidden"
          >
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className={linkClassName} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  )
}
