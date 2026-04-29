import { motion, useReducedMotion } from 'framer-motion'

import { PixCopyButton } from './PixCopyButton'
import { siteConfig } from '../data/config'

type PixContributionPanelProps = {
  /**
   * split = QR à esquerda e detalhes à direita (seção Pix);
   * compact = coluna estreita (modal): chave + QR menor na mesma linha
   */
  orientation?: 'split' | 'compact'
  className?: string
}

export function PixContributionPanel({
  orientation = 'split',
  className = '',
}: PixContributionPanelProps) {
  const { pix } = siteConfig
  const prefersReducedMotion = useReducedMotion()

  const qrBlock = (
    <div className="glass-panel-strong p-4">
      <img
        src={pix.qrCodeImage}
        alt="QR code Pix"
        loading="lazy"
        decoding="async"
        className="mx-auto aspect-square w-full max-w-[min(100%,420px)] rounded-[1.75rem] object-contain"
      />
    </div>
  )

  const detailsBlock = (
    <div className="glass-panel-strong space-y-8 p-8 sm:p-10">
      <div className="rounded-[1.8rem] border border-white/70 bg-blush/45 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-truffle/45">
          {pix.keyLabel}
        </p>
        <p className="mt-3 break-all font-display text-3xl font-semibold text-truffle sm:text-4xl">
          {pix.keyValue}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <PixCopyButton
            value={pix.keyValue}
            defaultLabel={pix.copyButtonLabel}
            successLabel={pix.copiedLabel}
          />
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="button-secondary text-center"
          >
            {pix.contactMomLabel}
          </a>
        </div>
        <p className="text-sm leading-6 text-truffle/65">{pix.qrCodeHint}</p>
      </div>

      <div className="rounded-[1.8rem] border border-dashed border-rose/70 bg-white/72 p-6">
        <p className="text-sm leading-7 text-truffle/72">
          Fique totalmente à vontade para participar da forma que preferir. Cada mensagem, cada gesto e
          cada lembrança significa muito pra gente.
        </p>
      </div>
    </div>
  )

  if (orientation === 'compact') {
    return (
      <div className={`space-y-5 ${className}`}>
        <div className="rounded-[1.5rem] border border-white/70 bg-blush/30 p-5 sm:p-6">
          <div className="flex min-w-0 flex-row items-start gap-4 sm:gap-5">
            <div className="min-w-0 flex-1 self-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-truffle/45">
                {pix.keyLabel}
              </p>
              <div className="mt-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-rose/40">
                <p className="whitespace-nowrap font-display text-[0.95rem] font-semibold leading-snug tracking-[-0.02em] text-truffle sm:text-[1.05rem] md:text-lg">
                  {pix.keyValue}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2 border-l border-white/50 pl-4 sm:pl-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-truffle/42">
                QR code
              </p>
              <div className="rounded-2xl border border-white/75 bg-white/85 p-2 shadow-soft">
                <img
                  src={pix.qrCodeImage}
                  alt="QR code Pix"
                  loading="lazy"
                  decoding="async"
                  className="h-[5.5rem] w-[5.5rem] object-contain sm:h-24 sm:w-24"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <PixCopyButton
              value={pix.keyValue}
              defaultLabel={pix.copyButtonLabel}
              successLabel={pix.copiedLabel}
            />
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="button-secondary text-center"
            >
              {pix.contactMomLabel}
            </a>
          </div>
          <p className="text-sm leading-6 text-truffle/65">{pix.qrCodeHint}</p>
        </div>

        <div className="rounded-[1.5rem] border border-dashed border-rose/65 bg-white/72 p-5">
          <p className="text-sm leading-7 text-truffle/72">
            Agradecemos de coração por todo carinho e consideração. Cada gesto, cada lembrança e cada mensagem significa muito pra gente.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center ${className}`}>
      <motion.div
        initial={false}
        whileInView={
          prefersReducedMotion
            ? { opacity: 1, x: 0, scale: 1 }
            : {
                opacity: [0.94, 1],
                x: [-14, 0],
                scale: [0.99, 1],
              }
        }
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: prefersReducedMotion ? 0.2 : 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: 'transform, opacity' }}
      >
        {qrBlock}
      </motion.div>
      <motion.div
        initial={false}
        whileInView={
          prefersReducedMotion
            ? { opacity: 1, x: 0, scale: 1 }
            : {
                opacity: [0.94, 1],
                x: [14, 0],
                scale: [0.99, 1],
              }
        }
        viewport={{ once: true, amount: 0.12 }}
        transition={{
          duration: prefersReducedMotion ? 0.2 : 0.45,
          delay: prefersReducedMotion ? 0 : 0.04,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ willChange: 'transform, opacity' }}
      >
        {detailsBlock}
      </motion.div>
    </div>
  )
}
