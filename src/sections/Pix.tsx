import { PixContributionPanel } from '../components/PixContributionPanel'
import { SectionWrapper } from '../components/SectionWrapper'
import { siteConfig } from '../data/config'

export function Pix() {
  const { pix } = siteConfig

  return (
    <SectionWrapper
      id="pix"
      label={pix.badge}
      title={pix.title}
      description={pix.description}
    >
      <PixContributionPanel orientation="split" />
    </SectionWrapper>
  )
}
