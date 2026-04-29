import { siteConfig } from '../data/config'

export function SiteHeader() {
  const { navigation, hero } = siteConfig

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 px-3 pb-2.5 sm:px-8 sm:pb-3 lg:px-10"
      style={{ paddingTop: 'max(0.5rem, env(safe-area-inset-top, 0px))' }}
    >
      <nav className="mx-auto flex max-w-7xl flex-col gap-3 rounded-[1.45rem] border border-white/70 bg-white/55 px-3.5 py-3 shadow-soft backdrop-blur sm:gap-4 sm:rounded-[1.75rem] sm:px-6 sm:py-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="#topo" className="font-display text-[1.7rem] font-semibold tracking-[-0.035em] text-truffle sm:text-3xl sm:tracking-[-0.04em]">
          Chá da {hero.title}
        </a>
        <div className="flex flex-wrap gap-2 text-[0.85rem] font-medium text-truffle/70 sm:gap-3 sm:text-sm">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2.5 leading-none transition hover:bg-white/80 hover:text-truffle sm:py-2"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
