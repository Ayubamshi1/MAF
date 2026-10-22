import type { ImageSlot } from './images'

export interface TitleText {
  title: string
  text: string
}

/** Building blocks for the specific sections of a page (eligibility, deadlines, documents and so on). */
export type Block =
  | { kind: 'list'; title: string; intro?: string; items: string[] }
  | { kind: 'cards'; title: string; intro?: string; items: TitleText[] }
  | { kind: 'steps'; title: string; intro?: string; items: TitleText[] }
  | { kind: 'table'; title: string; intro?: string; columns: string[]; rows: string[][] }
  | { kind: 'dates'; title: string; intro?: string; items: { label: string; date: string; note?: string }[] }
  | { kind: 'notice'; tone: 'info' | 'warning'; title: string; text: string }
  | { kind: 'allocation'; title: string; intro?: string }
  | { kind: 'courses'; title: string; intro?: string }
  | { kind: 'contacts'; title: string; intro?: string }

export interface PageFormSection {
  key: string
  heading: string
  intro?: string
  /** Extra short points shown beside the form. */
  points?: string[]
}

export interface PageContent {
  slug: string
  title: string
  tagline: string
  image: ImageSlot
  /** Text for the main call-to-action button in the hero (scrolls to the form). */
  applyLabel?: string
  overview: string[]
  servesTitle?: string
  serves?: string[]
  offersTitle?: string
  offers?: TitleText[]
  stepsTitle?: string
  steps?: TitleText[]
  blocks?: Block[]
  form?: PageFormSection
  faqs?: { q: string; a: string }[]
  related?: string[]
  ctaTitle?: string
  ctaText?: string
}
