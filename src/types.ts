export type GiftCategory = 'Fraldas' | 'Higiene' | 'Acessórios'

export type GiftItem = {
  id: number
  name: string
  category: GiftCategory
  suggestedValue: number
  image: string
  detail: string
}
