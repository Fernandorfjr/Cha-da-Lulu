import { motion, useReducedMotion } from 'framer-motion'

import { FloralPhotoFrame } from '../components/FloralPhotoFrame'
import { siteConfig } from '../data/config'

export function Hero() {
  const { hero } = siteConfig
  const prefersReducedMotion = useReducedMotion()
  const highlights = [
    ['De longe, mas juntos', 'Mesmo à distância, vocês fazem parte desse momento com a gente.'],
    ['Um jeitinho de aproximar', 'Criamos esse espaço para dividir um pouco dessa fase com vocês.'],
    ['Com muito carinho', 'Cada detalhe aqui foi pensado com amor para a chegada da Luisa.'],
  ]

  return (
    <section className="section-shell relative pb-8 pt-24 sm:pb-14 sm:pt-28 lg:pb-20 lg:pt-24">
      <motion.div
        className="glass-panel-strong relative overflow-hidden px-4 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-12"
        initial={false}
        whileInView={
          prefersReducedMotion
            ? { opacity: 1, y: 0, scale: 1 }
            : {
                opacity: [0.94, 1],
                y: [16, 0],
                scale: [0.99, 1],
              }
        }
        viewport={{ once: true, amount: 0.18, margin: '0px 0px -80px 0px' }}
        transition={{ duration: prefersReducedMotion ? 0.2 : 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
        <div className="absolute -left-16 top-20 h-40 w-40 rounded-full bg-rose/20 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-48 w-48 rounded-full bg-champagne/15 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />

        <div className="relative z-10 grid gap-7 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">{hero.badge}</span>
            <p className="subtle-kicker mt-3 sm:mt-4">Uma maneira diferente de celebrar a chegada de quem já é muito amada</p>
            <h1 className="mt-2.5 font-display text-[3.15rem] font-semibold leading-[0.92] text-truffle sm:mt-3 sm:text-7xl lg:text-[6.7rem]">
              {hero.title}
            </h1>
            <p className="mt-4 max-w-2xl font-display text-[1.65rem] leading-[1.08] text-truffle sm:mt-6 sm:text-[2.75rem] lg:text-[3.25rem]">
              {hero.lead}
            </p>
            <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-truffle/72 sm:mt-7 sm:text-lg sm:leading-8">
              {hero.description}
            </p>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-3">
              {highlights.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[1.5rem] border border-white/70 bg-white/68 p-4 shadow-soft backdrop-blur sm:rounded-[1.7rem] sm:p-5"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-truffle/50">
                    {label}
                  </span>
                  <p className="mt-2.5 text-sm leading-6 text-truffle/72 sm:mt-3">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.55, delay: prefersReducedMotion ? 0 : 0.08 }}
            className="relative"
          >
            <div className="glass-panel-strong flex justify-center overflow-visible p-2.5 sm:p-4">
              <FloralPhotoFrame className="mx-auto">
                <div className="inline-flex max-w-full justify-center rounded-[1.45rem] bg-gradient-to-b from-white/45 to-blush/30">
                  <img
                    src={hero.image}
                    alt={`Chá de bebê da ${hero.title}`}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="mx-auto block max-h-[min(62vh,520px)] w-auto max-w-full rounded-[1.2rem] object-contain sm:max-h-[min(72vh,640px)] sm:rounded-[1.35rem]"
                  />
                </div>
              </FloralPhotoFrame>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
