import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react'

import type { GiftItem } from '../types'
import { PixContributionPanel } from './PixContributionPanel'

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

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

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
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
      backButtonRef.current?.focus()
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

  return (
    <motion.div
      role="presentation"
      className="fixed inset-0 z-[100] flex items-end justify-center bg-truffle/45 p-2 backdrop-blur-sm sm:items-center sm:p-6"
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
        className={`relative flex w-full max-w-lg flex-col overflow-hidden rounded-[1.35rem] border border-white/75 bg-white/95 shadow-soft backdrop-blur sm:rounded-[1.75rem] ${
          pixOpen ? 'max-h-[min(85dvh,920px)] lg:max-h-[min(92dvh,920px)] lg:max-w-6xl' : 'max-h-[min(85dvh,920px)] sm:max-h-[min(92dvh,920px)]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2.5 top-2.5 z-10 rounded-full border border-white/80 bg-white/90 px-3.5 py-2 text-[0.82rem] font-medium text-truffle/80 shadow-soft transition hover:bg-white hover:text-truffle sm:right-3 sm:top-3 sm:px-4 sm:text-sm"
        >
          Fechar
        </button>

        <div
          className={`grid min-h-0 flex-1 overflow-hidden ${
            pixOpen ? 'lg:grid-cols-2 lg:divide-x lg:divide-rose/25' : 'grid-cols-1'
          }`}
        >
          <div
            className={`min-h-0 flex-col gap-4 overflow-y-auto p-4 pt-12 sm:gap-5 sm:p-8 sm:pt-14 ${
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
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-truffle/50">
              {gift.category}
            </span>
            <h2
              id={titleId}
              className="pr-12 font-display text-[1.55rem] font-semibold leading-tight text-truffle sm:pr-14 sm:text-[2.15rem]"
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
            <button
              type="button"
              onClick={() => setPixOpen((v) => !v)}
              className="button-primary w-full lg:w-auto lg:max-w-xs"
            >
              <span className="lg:hidden">Presentear</span>
              <span className="hidden lg:inline">
                {pixOpen ? 'Ocultar dados do Pix' : 'Presentear'}
              </span>
            </button>
          </div>

          <AnimatePresence initial={false}>
            {pixOpen && (
              <motion.div
                key="pix-side"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="flex min-h-0 flex-1 flex-col overflow-hidden border-t border-rose/20 bg-cream/35 lg:max-h-[min(92dvh,920px)] lg:overflow-y-auto lg:border-t-0"
              >
                <div className="flex shrink-0 items-center gap-2 border-b border-rose/25 bg-white/90 px-3 py-3 pr-14 pt-12 sm:px-4 sm:pt-14 lg:hidden">
                  <button
                    ref={backButtonRef}
                    type="button"
                    onClick={() => setPixOpen(false)}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-rose/60 bg-white px-3 py-2 text-[0.82rem] font-semibold text-truffle transition hover:bg-blush/40"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                      <path
                        fill="currentColor"
                        d="M15.5 5.5 8 12l7.5 6.5 1.4-1.6L10.8 12l6.1-5.9-1.4-1.6Z"
                      />
                    </svg>
                    Voltar
                  </button>
                  <h2
                    id={pixStepTitleId}
                    className="min-w-0 flex-1 font-display text-base font-semibold leading-tight text-truffle"
                  >
                    Contribuir com Pix
                  </h2>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-8 lg:overflow-visible lg:p-8">
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
