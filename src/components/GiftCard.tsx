import { motion, useReducedMotion } from 'framer-motion'

import type { GiftItem } from '../types'

type GiftCardProps = {
  gift: GiftItem
  index?: number
  onSelect: (gift: GiftItem) => void
  variant?: 'card' | 'list'
}

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function GiftCard({ gift, index = 0, onSelect, variant = 'card' }: GiftCardProps) {
  const prefersReducedMotion = useReducedMotion()

  const transition = {
    duration: prefersReducedMotion ? 0.18 : 0.35,
    delay: prefersReducedMotion ? 0 : Math.min(index * 0.03, 0.35),
  }

  if (variant === 'list') {
    return (
      <motion.button
        type="button"
        layout={false}
        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={transition}
        whileHover={prefersReducedMotion ? undefined : { y: -2 }}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
        onClick={() => onSelect(gift)}
        aria-label={`Ver detalhes de ${gift.name}`}
        className="glass-panel-strong group flex w-full cursor-pointer flex-row items-stretch gap-4 overflow-hidden p-4 text-left transition-shadow duration-300 hover:shadow-lift motion-reduce:transform-none sm:gap-5 sm:p-5"
      >
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-linen ring-1 ring-inset ring-white/50 sm:h-28 sm:w-28">
          <img
            src={gift.image}
            alt=""
            className="h-full w-full object-cover object-center brightness-[0.98] saturate-[0.95] transition duration-500 group-hover:brightness-100"
            loading="lazy"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 sm:gap-2">
          <span className="inline-flex w-fit rounded-full border border-rose bg-blush px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-truffle shadow-soft">
            {gift.category}
          </span>
          <h3 className="font-display text-base font-semibold leading-tight text-truffle sm:text-lg">
            {gift.name}
          </h3>
          <p className="line-clamp-2 text-[0.82rem] leading-snug text-truffle/65 sm:text-[0.9rem]">
            {gift.detail}
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-end justify-center self-center text-right">
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-truffle/45">
            Valor
          </span>
          <p className="mt-1 font-display text-xl font-semibold leading-none text-truffle sm:text-2xl">
            {currencyFormatter.format(gift.suggestedValue)}
          </p>
        </div>
      </motion.button>
    )
  }

  return (
    <motion.button
      type="button"
      layout={false}
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={transition}
      whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.015 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
      onClick={() => onSelect(gift)}
      aria-label={`Ver detalhes de ${gift.name}`}
      className="glass-panel-strong group w-full cursor-pointer overflow-hidden text-left transition-shadow duration-300 hover:shadow-lift motion-reduce:transform-none"
    >
      <div className="p-4 sm:p-6 sm:pb-5">
        <div className="relative h-[12.5rem] w-full overflow-hidden rounded-2xl bg-linen ring-1 ring-inset ring-white/50 sm:h-[13.75rem]">
          <div className="absolute inset-3 min-h-0 overflow-hidden rounded-xl sm:inset-4">
            <img
              src={gift.image}
              alt={gift.name}
              className="h-full w-full object-cover object-center brightness-[0.98] saturate-[0.95] transition duration-500 will-change-transform group-hover:brightness-100"
              loading="lazy"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-truffle/[0.04]"
              aria-hidden
            />
          </div>
          <span className="absolute left-3 top-3 z-10 rounded-full border border-rose bg-blush px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-truffle shadow-soft sm:left-4 sm:top-4 sm:px-3.5 sm:text-xs sm:tracking-[0.2em]">
            {gift.category}
          </span>
        </div>
      </div>

      <div className="space-y-3.5 px-4 pb-5 pt-0 sm:space-y-4 sm:px-6 sm:pb-6">
        <div>
          <h3 className="font-display text-[1.55rem] font-semibold leading-none text-truffle sm:text-[1.9rem]">
            {gift.name}
          </h3>
          <p className="mt-2 text-[0.9rem] leading-6 text-truffle/65 sm:text-sm">{gift.detail}</p>
        </div>

        <div className="soft-divider" />

        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-truffle/45">
              Valor sugerido
            </span>
            <p className="mt-1.5 font-display text-[1.85rem] font-semibold leading-none text-truffle sm:mt-2 sm:text-[2.15rem]">
              {currencyFormatter.format(gift.suggestedValue)}
            </p>
          </div>
          <span className="rounded-full bg-blush px-3 py-1 text-sm font-medium text-truffle/70">
            Presente
          </span>
        </div>
      </div>
    </motion.button>
  )
}
