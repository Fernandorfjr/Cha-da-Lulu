import { motion } from 'framer-motion'

import { SectionWrapper } from '../components/SectionWrapper'
import { siteConfig } from '../data/config'

export function Closing() {
  const { closing } = siteConfig

  return (
    <SectionWrapper
      id="agradecimento"
      label={closing.badge}
      title={closing.title}
      description={closing.message}
      className="pb-12"
    >
      <motion.div
        initial={false}
        whileInView={{
          opacity: [0.92, 1],
          y: [22, 0],
          scale: [0.988, 1],
        }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: 'transform, opacity' }}
        className="glass-panel-strong overflow-hidden p-8 text-center sm:p-12"
      >
        <div className="mx-auto max-w-3xl">
          <p className="subtle-kicker">Um momento que guardaremos com muito carinho nos nossos corações</p>
          <p className="mt-4 font-display text-4xl font-semibold leading-tight text-truffle sm:text-5xl">
            Que a chegada da Luisa seja cercada de muitas bençãos, saúde e alegria!
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-truffle/72 sm:text-lg">
            Somos muito gratos por ter vocês com a gente nesse momento tão especial.
          </p>
          <div className="mt-8">
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="button-primary">
              {closing.ctaLabel}
            </a>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
