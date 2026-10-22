import { VALUES, VALUES_INTRO } from '@/content/values'
import { getIcon } from '@/lib/icons'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Photo from '@/components/ui/Photo'
import { IMAGES } from '@/content/images'

export default function ValuesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="section bg-mist/70">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {heading && (
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="Our values" title="How we act, and what we answer for" description={VALUES_INTRO} />
            <Photo image={IMAGES.values} ratio="aspect-[4/3]" className="mt-8 hidden rounded-[2rem] shadow-soft lg:block" />
          </Reveal>
        )}
        <ul className="grid gap-4 sm:grid-cols-2">
          {VALUES.map((v, i) => {
            const Icon = getIcon(v.icon)
            return (
              <li key={v.title} className={`rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy/5 ${i % 2 === 1 ? 'sm:translate-y-6' : ''}`}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-50 text-ocean"><Icon aria-hidden className="h-6 w-6" /></span>
                <h3 className="mt-4 text-xl font-extrabold">{v.title}</h3>
                <p className="mt-2 text-[0.95rem] text-charcoal/75">{v.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
