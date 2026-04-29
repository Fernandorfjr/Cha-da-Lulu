import { motion } from 'framer-motion'

import { siteConfig } from '../data/config'

export function Footer() {
  const { footer, familySignature } = siteConfig

  return (
    <motion.footer
      className="section-shell pt-0"
      initial={false}
      whileInView={{
        opacity: [0.93, 1],
        y: [18, 0],
        scale: [0.99, 1],
      }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="soft-divider" />
      <div className="flex flex-col gap-4 py-8 text-center sm:py-10">
        <p className="subtle-kicker">Obrigado</p>
        <p className="font-display text-3xl font-semibold text-truffle">{footer.lineOne}</p>
        <p className="mx-auto max-w-2xl text-sm leading-7 text-truffle/66">{footer.lineTwo}</p>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-truffle/42">
          {familySignature}
        </p>
      </div>
    </motion.footer>
  )
}
