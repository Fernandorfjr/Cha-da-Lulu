type CategoryFilterProps = {
  categories: readonly string[]
  activeCategory: string
  onChange: (category: string) => void
  /** Uma única linha — sem quebra dos botões (útil ao lado do toggle de visualização). */
  noWrap?: boolean
}

export function CategoryFilter({
  categories,
  activeCategory,
  onChange,
  noWrap = false,
}: CategoryFilterProps) {
  const rowLayout = noWrap ? 'flex-nowrap' : 'flex-wrap'

  return (
    <div className={`flex gap-2 sm:gap-3 ${rowLayout}`}>
      {categories.map((category) => {
        const isActive = activeCategory === category

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-[0.82rem] font-semibold leading-none transition duration-300 sm:px-5 sm:text-sm ${
              isActive
                ? 'bg-truffle text-white shadow-soft ring-1 ring-white/40'
                : 'border border-rose/70 bg-white/80 text-truffle hover:-translate-y-0.5 hover:border-champagne hover:bg-white'
            }`}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
