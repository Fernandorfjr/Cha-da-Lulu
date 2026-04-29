import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useId, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react'

import type { GiftItem } from '../types'
import { PixContributionPanel } from './PixContributionPanel'

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

/** Botões do topo do modal (Voltar / Fechar) — mesmo visual. */
const modalChromeButtonClass =
  'inline-flex shrink-0 items-center gap-1.5 rounded-full border border-rose/60 bg-white px-3 py-2 text-[0.82rem] font-semibold text-truffle shadow-sm transition hover:bg-blush/40'

type GiftDetailModalProps = {
  gift: GiftItem | null
  onClose: () => void
}

function useNarrowModalLayout() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia('(max-width: 1023px)')
      mq.addEventListener('change', onStoreChange)
      return () => mq.removeEventListener('change', onStoreChange)
    },
    () => window.matchMedia('(max-width: 1023px)').matches,
    () => false,
  )
}

function GiftDetailModalContent({ gift, onClose }: { gift: GiftItem; onClose: () => void }) {
  const [pixOpen, setPixOpen] = useState(false)
  const narrowLayout = useNarrowModalLayout()
  const titleId = useId()
  const pixStepTitleId = useId()
  const backButtonRef = useRef<HTMLButtonElement>(null)
  const dialogLabelledBy = pixOpen && narrowLayout ? pixStepTitleId : titleId

  useLayoutEffect(() => {
    const root = document.documentElement
    const body = document.body
    const prevRootOverflow = root.style.overflow
    const prevBodyOverflow = body.style.overflow
    const prevRootPaddingRight = root.style.paddingRight
    const scrollbarWidth = window.innerWidth - root.clientWidth

    root.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      root.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      root.style.overflow = prevRootOverflow
      body.style.overflow = prevBodyOverflow
      root.style.paddingRight = prevRootPaddingRight
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (pixOpen) setPixOpen(false)
      else onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [pixOpen, onClose])

  useEffect(() => {
    if (!pixOpen || !narrowLayout) return
    const id = requestAnimationFrame(() => {
      backButtonRef.current?.focus({ preventScroll: true })
    })
    return () => cancelAnimationFrame(id)
  }, [pixOpen, narrowLayout])

  const pixIntro = (
    <>
      <p className="font-display text-[1.2rem] font-semibold leading-snug text-truffle sm:text-2xl">
        Que bom ter você com a gente nesse momento!
      </p>
      <p className="mt-3 text-[0.9rem] leading-6 text-truffle/72 sm:text-[0.95rem] sm:leading-7">
        A lista funciona como uma referência de sugestões e valores. Contribua com o que fizer sentido pra você! É só
        abrir o app do banco, escanear o QR code ou colar a chave. Se preferir cartão ou quiser combinar algo com a
        gente, a mamãe responde num toque no WhatsApp.
      </p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.26em] text-truffle/45">
        Informações do Pix
      </p>
      <div className="mt-3">
        <PixContributionPanel orientation="compact" />
      </div>
    </>
  )

  const showPixStepHeader = pixOpen && narrowLayout

  return (
    <motion.div
      role="presentation"
      className="fixed inset-0 z-[100] flex items-end justify-center overscroll-y-contain bg-truffle/45 p-2 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={dialogLabelledBy}
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ type: 'spring', damping: 30, stiffness: 340 }}
        className={`relative flex w-full max-w-lg flex-col overflow-hidden overscroll-y-contain rounded-[1.35rem] border border-white/75 bg-white/95 shadow-soft backdrop-blur sm:rounded-[1.75rem] ${
          pixOpen ? 'max-h-[min(85dvh,920px)] lg:max-h-[min(92dvh,920px)] lg:max-w-6xl' : 'max-h-[min(85dvh,920px)] sm:max-h-[min(92dvh,920px)]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex shrink-0 items-center gap-2 border-b border-rose/25 bg-white/90 px-3 py-2.5 sm:px-4">
          {showPixStepHeader ? (
            <>
              <button
                ref={backButtonRef}
                type="button"
                onClick={() => setPixOpen(false)}
                className={modalChromeButtonClass}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M15.5 5.5 8 12l7.5 6.5 1.4-1.6L10.8 12l6.1-5.9-1.4-1.6Z"
                  />
                </svg>
                Voltar
              </button>
              <span id={pixStepTitleId} className="sr-only">
                Contribuir com Pix
              </span>
            </>
          ) : null}
          <button type="button" onClick={onClose} className={`${modalChromeButtonClass} ml-auto`}>
            Fechar
          </button>
        </header>

        <div
          className={`grid min-h-0 flex-1 grid-rows-[minmax(0,1fr)] overflow-hidden overscroll-y-contain ${
            pixOpen ? 'lg:grid-cols-2 lg:divide-x lg:divide-rose/25' : 'grid-cols-1'
          }`}
        >
          <div
            className={`min-h-0 flex-col gap-4 overflow-y-auto overscroll-y-contain p-4 sm:gap-5 sm:p-8 ${
              pixOpen ? 'hidden lg:flex' : 'flex'
            }`}
          >
            <div className="w-full overflow-hidden rounded-2xl bg-linen ring-1 ring-inset ring-white/50">
              <div className="flex min-h-0 items-center justify-center p-2.5 sm:p-4">
                <img
                  src={gift.image}
                  alt={gift.name}
                  className="h-auto w-full max-h-[min(42dvh,24rem)] max-w-full object-contain object-center brightness-[0.98] saturate-[0.95] sm:max-h-[min(48vh,28rem)]"
                />
              </div>
            </div>
            <span className="inline-flex w-fit rounded-full border border-rose bg-blush px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-truffle shadow-soft">
              {gift.category}
            </span>
            <h2
              id={titleId}
              className="font-display text-[1.55rem] font-semibold leading-tight text-truffle sm:text-[2.15rem]"
            >
              {gift.name}
            </h2>
            <p className="text-[0.96rem] leading-7 text-truffle/72 sm:text-base">{gift.detail}</p>
            <div className="soft-divider" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-truffle/45">
                Valor sugerido
              </p>
              <p className="mt-2 font-display text-[1.65rem] font-semibold text-truffle sm:text-3xl">
                {currencyFormatter.format(gift.suggestedValue)}
              </p>
            </div>
            <div className="flex w-full justify-center">
              <button
                type="button"
                onClick={() => setPixOpen((v) => !v)}
                className="button-primary w-full max-w-md lg:w-auto lg:min-h-[4rem] lg:min-w-[12.5rem] lg:max-w-lg lg:px-10 lg:py-4 lg:text-base"
              >
                <span className="lg:hidden">Presentear</span>
                <span className="hidden lg:inline">
                  {pixOpen ? 'Ocultar dados do Pix' : 'Presentear'}
                </span>
              </button>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {pixOpen && (
              <motion.div
                key="pix-side"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="flex min-h-0 flex-1 flex-col overflow-hidden overscroll-y-contain border-t border-rose/20 bg-cream/35 lg:max-h-[min(92dvh,920px)] lg:overflow-y-auto lg:border-t-0"
              >
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain p-4 sm:p-8 lg:overflow-visible lg:p-8">
                  {pixIntro}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function GiftDetailModal({ gift, onClose }: GiftDetailModalProps) {
  return (
    <AnimatePresence>
      {gift ? <GiftDetailModalContent key={gift.id} gift={gift} onClose={onClose} /> : null}
    </AnimatePresence>
  )
}
