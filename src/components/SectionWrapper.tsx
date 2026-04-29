import { motion } from 'framer-motion'
import type { PropsWithChildren, ReactNode } from 'react'

type SectionWrapperProps = PropsWithChildren<{
  id?: string
  label?: string
  title?: string
  description?: string
  className?: string
  headerSlot?: ReactNode
}>

export function SectionWrapper({
  id,
  label,
  title,
  description,
  className = '',
  headerSlot,
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`section-shell relative z-[1] ${className}`.trim()}
    >
      <motion.div
        initial={false}
        whileInView={{
          opacity: [0.92, 1],
          y: [24, 0],
          scale: [0.985, 1],
        }}
        viewport={{ once: true, amount: 0.12, margin: '0px 0px -80px 0px' }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: 'transform, opacity' }}
      >
        {(label ?? title ?? description ?? headerSlot) && (
          <div className="mb-8 max-w-3xl sm:mb-12">
            {label ? <span className="section-label">{label}</span> : null}
            {title ? <h2 className="section-title">{title}</h2> : null}
            {description ? <p className="section-description">{description}</p> : null}
            {title ? (
              <div className="ornament-line mt-6 sm:mt-8">
                <span className="subtle-kicker">feito com amor</span>
              </div>
            ) : null}
            {headerSlot}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  )
}
