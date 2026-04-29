import { useMemo, useState } from 'react'

import { CategoryFilter } from '../components/CategoryFilter'
import { CategoryFilterMobile } from '../components/CategoryFilterMobile'
import { GiftCard } from '../components/GiftCard'
import { GiftDetailModal } from '../components/GiftDetailModal'
import { GiftViewToggle } from '../components/GiftViewToggle'
import type { GiftViewMode } from '../components/GiftViewToggle'
import { SectionWrapper } from '../components/SectionWrapper'
import { gifts, giftCategories } from '../data/gifts'
import type { GiftItem } from '../types'

export function GiftList() {
  const [activeCategory, setActiveCategory] = useState<string>('Todas')
  const [viewMode, setViewMode] = useState<GiftViewMode>('grid')
  const [selectedGift, setSelectedGift] = useState<GiftItem | null>(null)

  const filteredGifts = useMemo(() => {
    if (activeCategory === 'Todas') {
      return gifts
    }

    return gifts.filter((gift) => gift.category === activeCategory)
  }, [activeCategory])

  const listLayoutClass =
    viewMode === 'list'
      ? 'flex flex-col gap-3 sm:gap-4'
      : 'grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3'

  return (
    <>
    <GiftDetailModal gift={selectedGift} onClose={() => setSelectedGift(null)} />
    <SectionWrapper
      id="presentes"
      label="Sugestões de presentes"
      title="Preparamos algumas sugestões para quem quiser participar desse momento com a gente"
      description="Os itens abaixo são apenas sugestões, organizadas por categoria para facilitar. Fique à vontade para escolher da forma que fizer mais sentido pra você."
    >
      <div className="glass-panel-strong relative z-20 mb-6 flex flex-col gap-4 overflow-visible p-4 sm:mb-8 sm:gap-4 sm:p-6 sm:flex-row sm:items-start sm:justify-between sm:gap-6 md:gap-8">
        <div className="max-w-[min(100%,16rem)] shrink-0 sm:max-w-[14rem]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-truffle/45">
            Categorias
          </p>
          <p className="mt-1.5 text-[0.8rem] leading-snug text-truffle/68 sm:text-[0.78rem] sm:leading-[1.45]">
            Navegue pelas categorias para encontrar algo com mais facilidade.
          </p>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-3 sm:items-end sm:justify-end">
          <div className="flex w-full min-w-0 items-center gap-3 sm:hidden">
            <CategoryFilterMobile
              className="min-w-0 flex-1"
              categories={giftCategories}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
            <div className="shrink-0">
              <GiftViewToggle value={viewMode} onChange={setViewMode} />
            </div>
          </div>
          <div className="-mx-1 hidden w-full min-w-0 justify-end overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex">
            <div className="flex w-max max-w-none flex-nowrap items-center gap-x-5 sm:gap-x-8">
              <CategoryFilter
                categories={giftCategories}
                activeCategory={activeCategory}
                onChange={setActiveCategory}
                noWrap
              />
              <div className="shrink-0">
                <GiftViewToggle value={viewMode} onChange={setViewMode} />
              </div>
            </div>
          </div>
          <p className="text-[0.9rem] text-truffle/58 sm:text-sm">
            {filteredGifts.length} {filteredGifts.length === 1 ? 'item' : 'itens'}
          </p>
        </div>
      </div>

      <div className={`relative z-0 ${listLayoutClass}`}>
        {filteredGifts.map((gift, index) => (
          <GiftCard
            key={gift.id}
            gift={gift}
            index={index}
            onSelect={setSelectedGift}
            variant={viewMode === 'list' ? 'list' : 'card'}
          />
        ))}
      </div>
    </SectionWrapper>
    </>
  )
}
