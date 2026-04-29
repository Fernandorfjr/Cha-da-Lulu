import { FloralPhotoFrame } from '../components/FloralPhotoFrame'
import { SectionWrapper } from '../components/SectionWrapper'
import { siteConfig } from '../data/config'

export function AboutLuisa() {
  const { aboutLuisa, dueDate } = siteConfig

  return (
    <SectionWrapper
      id="sobre-luisa"
      label={aboutLuisa.badge}
      title={aboutLuisa.title}
      description={aboutLuisa.familyMessage}
      className="pt-8"
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="glass-panel-strong flex justify-center overflow-visible p-3 sm:p-4">
          <FloralPhotoFrame className="mx-auto">
            <div className="inline-flex max-w-full justify-center rounded-[1.45rem] bg-gradient-to-b from-white/45 to-blush/30">
              <img
                src={aboutLuisa.image}
                alt="Luisa e família"
                className="mx-auto block max-h-[min(70vh,600px)] w-auto max-w-full rounded-[1.35rem] object-contain"
              />
            </div>
          </FloralPhotoFrame>
        </div>

        <div className="glass-panel-strong space-y-8 p-8 sm:p-10">
          <div className="rounded-[1.8rem] border border-rose/35 bg-blush/40 p-6">
            <p className="font-display text-[1.75rem] leading-[1.2] text-truffle sm:text-[2rem]">
              {aboutLuisa.supportingText}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/70 bg-white/72 p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-truffle/45">
                Nascimento previsto
              </span>
              <p className="mt-3 font-display text-2xl font-semibold text-truffle">{dueDate}</p>
            </div>
            {aboutLuisa.highlights.map((highlight) => (
              <div key={highlight.label} className="rounded-3xl border border-white/70 bg-white/72 p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-truffle/45">
                  {highlight.label}
                </span>
                <p className="mt-3 font-display text-2xl font-semibold text-truffle">
                  {highlight.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
