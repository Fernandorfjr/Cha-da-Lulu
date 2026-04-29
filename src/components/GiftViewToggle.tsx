import { useCallback, useRef, type KeyboardEvent } from 'react'

export type GiftViewMode = 'grid' | 'list'

const OPTIONS: readonly { value: GiftViewMode; label: string }[] = [
  { value: 'grid', label: 'Visualização em grade' },
  { value: 'list', label: 'Visualização em lista' },
]

type GiftViewToggleProps = {
  value: GiftViewMode
  onChange: (value: GiftViewMode) => void
}

function IconGrid() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" fill="currentColor" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" fill="currentColor" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" fill="currentColor" opacity="0.85" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" fill="currentColor" opacity="0.85" />
    </svg>
  )
}

function IconList() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
      <rect x="4" y="5" width="16" height="3" rx="1.5" fill="currentColor" />
      <rect x="4" y="10.5" width="16" height="3" rx="1.5" fill="currentColor" opacity="0.88" />
      <rect x="4" y="16" width="16" height="3" rx="1.5" fill="currentColor" opacity="0.72" />
    </svg>
  )
}

export function GiftViewToggle({ value, onChange }: GiftViewToggleProps) {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

  const focusAt = useCallback((index: number) => {
    const el = buttonRefs.current[index]
    el?.focus()
  }, [])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault()
        const next = (index + 1) % OPTIONS.length
        onChange(OPTIONS[next].value)
        focusAt(next)
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault()
        const prev = (index - 1 + OPTIONS.length) % OPTIONS.length
        onChange(OPTIONS[prev].value)
        focusAt(prev)
      } else if (event.key === 'Home') {
        event.preventDefault()
        onChange(OPTIONS[0].value)
        focusAt(0)
      } else if (event.key === 'End') {
        event.preventDefault()
        const last = OPTIONS.length - 1
        onChange(OPTIONS[last].value)
        focusAt(last)
      }
    },
    [focusAt, onChange],
  )

  return (
    <div
      role="radiogroup"
      aria-label="Visualização dos itens"
      className="inline-flex items-center gap-1 rounded-full border border-rose/60 bg-white/75 p-1"
    >
      {OPTIONS.map((option, index) => {
        const isActive = value === option.value
        return (
          <button
            key={option.value}
            ref={(el) => {
              buttonRefs.current[index] = el
            }}
            type="button"
            role="radio"
            aria-label={option.label}
            aria-checked={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(option.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`flex h-8 w-8 items-center justify-center rounded-full transition duration-200 ${
              isActive
                ? 'bg-truffle text-white shadow-soft'
                : 'text-truffle/70 hover:bg-white hover:text-truffle'
            }`}
          >
            {option.value === 'grid' ? <IconGrid /> : <IconList />}
          </button>
        )
      })}
    </div>
  )
}
