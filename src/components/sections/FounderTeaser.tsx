import { Quote } from 'lucide-react'
import Button from '@/components/ui/Button'
import Photo from '@/components/ui/Photo'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { FOUNDER } from '@/content/founder'
import { IMAGES } from '@/content/images'

/** Short introduction to the founder, linking to the full page. Used on the home and About pages. */
export default function FounderTeaser() {
  return (
    <section className="section bg-mist/70">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <Reveal>
          <Photo image={IMAGES.founderPortrait} ratio="aspect-[4/5]" className="mx-auto max-w-sm rounded-[2.5rem] shadow-lift" />
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading eyebrow="Our founder" title={FOUNDER.name} description={FOUNDER.intro[0]} />
          <figure className="relative mt-8 rounded-3xl bg-white p-7 shadow-soft ring-1 ring-navy/5">
            <Quote aria-hidden className="absolute right-5 top-5 h-10 w-10 text-ocean/15" />
            <blockquote className="font-heading text-xl font-bold leading-snug text-navy sm:text-2xl">“{FOUNDER.quote}”</blockquote>
            <figcaption className="mt-3 text-sm font-semibold text-ocean">{FOUNDER.name}, {FOUNDER.role}</figcaption>
          </figure>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/about/founder" variant="primary">Read her story</Button>
            <Button to="/about/founder#gallery" variant="outline">See the gallery</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
