import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import Photo from '@/components/ui/Photo'
import Reveal from '@/components/ui/Reveal'
import { VALUES, VALUES_INTRO, VALUE_PRACTICE } from '@/content/values'
import { IMAGES } from '@/content/images'
import { getIcon } from '@/lib/icons'
import { Check } from 'lucide-react'

export default function Values() {
  return (
    <>
      <Seo title="Our values" description="Integrity, equity, curiosity, partnership, courage and accountability: the six values that guide Margaret Amshi Foundation." />
      <PageHero title="Our values" description={VALUES_INTRO} />

      <section className="section">
        <div className="container-x space-y-8">
          {VALUES.map((v, i) => {
            const Icon = getIcon(v.icon)
            return (
              <Reveal key={v.title}>
                <article className="grid items-center gap-8 rounded-[2.5rem] border border-navy/10 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
                  <div className={i % 2 ? 'lg:order-2' : ''}>
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-grad-ocean text-white shadow-glow"><Icon aria-hidden className="h-7 w-7" /></span>
                    <h2 className="mt-5 text-3xl font-extrabold">{v.title}</h2>
                    <p className="mt-3 text-lg text-charcoal/80">{v.text}</p>
                    <h3 className="mt-6 text-sm font-bold text-leaf-dark">What this looks like in practice</h3>
                    <ul className="mt-3 space-y-2.5">
                      {VALUE_PRACTICE[v.title]?.map((p) => <li key={p} className="flex gap-3"><span aria-hidden className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-leaf-dark"><Check className="h-3.5 w-3.5" /></span><span>{p}</span></li>)}
                    </ul>
                  </div>
                  <Photo image={IMAGES.values} ratio="aspect-[16/11]" className={`rounded-[2rem] shadow-soft ${i % 2 ? 'lg:order-1' : ''}`} />
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>
      <CtaBand title="Values you can hold us to" text="Read how we report on our work and use your gifts." />
    </>
  )
}
