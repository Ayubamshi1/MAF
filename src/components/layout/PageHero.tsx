import type { ReactNode } from 'react'
import Breadcrumbs, { type Crumb } from './Breadcrumbs'
import Swoosh from '@/components/ui/Swoosh'
import BgImage from '@/components/ui/BgImage'
import { IMAGES, type ImageSlot } from '@/content/images'

interface Props {
  title: string
  description?: string
  trail?: Crumb[]
  actions?: ReactNode
  children?: ReactNode
  /** Background photo. Defaults to IMAGES.pageHero in src/content/images.ts */
  image?: ImageSlot
}

export default function PageHero({ title, description, trail, actions, children, image = IMAGES.pageHero }: Props) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-grad-deep pb-28 pt-10 text-white sm:pb-36 sm:pt-14">
      <BgImage image={image} overlay="bg-gradient-to-r from-navy-900/95 via-navy/88 to-ocean/70" />
      <div aria-hidden className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-sky/25 blur-3xl" />
      <div aria-hidden className="absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-leaf/25 blur-3xl" />
      <div className="container-x">
        <Breadcrumbs trail={trail} />
        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold !text-white sm:text-5xl lg:text-6xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg text-white/85 sm:text-xl">{description}</p>}
        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        {children}
      </div>
      <Swoosh />
    </section>
  )
}
