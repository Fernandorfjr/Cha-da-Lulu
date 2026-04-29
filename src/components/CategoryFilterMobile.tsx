import { useCallback, useEffect, useId, useRef, useState } from 'react'

type CategoryFilterMobileProps = {
  categories: readonly string[]
  activeCategory: string
  onChange: (category: string) => void
  className?: string
}

const optionButtonClass = (isActive: boolean) =>
  `w-full rounded-xl px-4 py-3 text-left text-[0.82rem] font-semibold leading-snug transition duration-200 sm:px-5 sm:text-sm ${
    isActive
      ? 'bg-truffle text-white shadow-soft ring-1 ring-white/30'
      : 'border border-transparent bg-white/90 text-truffle hover:border-rose/60 hover:bg-white'
  }`

export function CategoryFilterMobile({
  categories,
  activeCategory,
  onChange,
  className = '',
}: CategoryFilterMobileProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listId = useId()

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, close])

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      const node = rootRef.current
      if (node && event.target instanceof Node && !node.contains(event.target)) {
        close()
      }
    }
    document.addEventListener('pointerdown', onPointerDown, true)
    return () => document.removeEventListener('pointerdown', onPointerDown, true)
  }, [open, close])

  const select = (category: string) => {
    onChange(category)
    close()
  }

  return (
    <div ref={rootRef} className={`relative min-w-0 ${className}`.trim()}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        aria-haspopup="listbox"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full min-w-0 items-center justify-between gap-2 rounded-full border border-rose/70 bg-white/90 px-4 py-2.5 text-left text-[0.82rem] font-semibold text-truffle shadow-sm transition duration-200 hover:border-champagne hover:bg-white sm:px-5 sm:text-sm"
      >
        <span className="truncate">{activeCategory}</span>
        <svg
          viewBox="0 0 24 24"
          className={`h-5 w-5 shrink-0 text-truffle/55 transition-transform duration-200 ${open ? '-rotate-180' : ''}`}
          aria-hidden
        >
          <path fill="currentColor" d="M12 15.2 6.3 9.5h11.4L12 15.2z" />
        </svg>
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label="Categorias"
          className="absolute left-0 right-0 top-[calc(100%+0.35rem)] z-[80] flex max-h-[min(70vh,22rem)] flex-col gap-1 overflow-y-auto rounded-2xl border border-rose/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(255,250,246,0.96)_100%)] p-2 shadow-lift backdrop-blur-sm"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category
            return (
              <button
                key={category}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => select(category)}
                className={optionButtonClass(isActive)}
              >
                {category}
              </button>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
