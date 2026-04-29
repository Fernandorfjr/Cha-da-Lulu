import { motion, useReducedMotion } from 'framer-motion'

import { SectionWrapper } from '../components/SectionWrapper'
import { siteConfig } from '../data/config'

export function AboutTea() {
  const { aboutTea } = siteConfig
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionWrapper
      id="como-funciona"
      label={aboutTea.badge}
      title={aboutTea.title}
      description={aboutTea.intro}
      className="bg-section-glow"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {aboutTea.points.map((point, index) => (
          <motion.article
            key={point}
            initial={false}
            whileInView={
              prefersReducedMotion
                ? { opacity: 1, y: 0, scale: 1 }
                : {
                    opacity: [0.94, 1],
                    y: [14, 0],
                    scale: [0.99, 1],
                    filter: ['blur(2px)', 'blur(0px)'],
                  }
            }
            viewport={{ once: false, amount: 0.12 }}
            transition={{
              duration: prefersReducedMotion ? 0.2 : 0.45,
              delay: prefersReducedMotion ? 0 : index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ willChange: 'transform, opacity, filter' }}
            className="glass-panel-strong relative overflow-hidden p-7"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-champagne/70 to-transparent" />
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blush font-display text-2xl font-semibold text-truffle">
              0{index + 1}
            </span>
            <p className="mt-5 font-display text-[1.7rem] leading-tight text-truffle">
              {index === 0 && 'Participe do seu jeito'}
              {index === 1 && 'Contribua como preferir'}
              {index === 2 && 'O que realmente importa'}
            </p>
            <p className="mt-4 text-base leading-8 text-truffle/74">{point}</p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  )
}
