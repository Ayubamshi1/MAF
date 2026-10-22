import { Compass, Eye } from 'lucide-react'
import Button from '@/components/ui/Button'
import Photo from '@/components/ui/Photo'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { ABOUT_TEXT, MISSION, VISION } from '@/content/values'
import { IMAGES } from '@/content/images'

export default function AboutSnapshot() {
  return (
    <section className="section">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading eyebrow="Who we are" title="Generosity that grows with the people it serves" description={ABOUT_TEXT} />
          <p className="mt-5 max-w-xl text-charcoal/80">
            We work alongside donors, advisers and local leaders to fund what communities say they need, and we report openly on what that funding achieves.
          </p>

          <div className="mt-8 grid gap-4">
            <article className="relative overflow-hidden rounded-3xl bg-grad-ocean p-6 text-white shadow-glow sm:p-7">
              <Compass aria-hidden className="absolute -right-3 -top-3 h-24 w-24 text-white/10" />
              <h3 className="text-sm font-semibold !text-sky-100">Our mission</h3>
              <p className="mt-2 font-heading text-lg font-bold leading-snug sm:text-xl">{MISSION}</p>
            </article>
            <article className="relative overflow-hidden rounded-3xl border border-leaf/25 bg-leaf-100/60 p-6 sm:p-7">
              <Eye aria-hidden className="absolute -right-2 -top-2 h-20 w-20 text-leaf/15" />
              <h3 className="text-sm font-semibold !text-leaf-dark">Our vision</h3>
              <p className="mt-2 text-base font-semibold leading-snug text-navy sm:text-lg">{VISION}</p>
            </article>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/about" variant="primary">About the foundation</Button>
            <Button to="/impact" variant="outline">See our impact</Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto grid max-w-xl grid-cols-5 gap-4">
            <Photo image={IMAGES.aboutMain} ratio="aspect-[4/5]" className="col-span-3 rounded-[2rem] shadow-lift" />
            <div className="col-span-2 flex flex-col gap-4 pt-10 sm:pt-16">
              <Photo image={IMAGES.aboutSecondary} ratio="aspect-square" className="rounded-[1.75rem] shadow-soft" />
              <div className="flex flex-1 flex-col justify-center rounded-[1.75rem] bg-navy p-5 text-white shadow-soft">
                <p className="font-heading text-3xl font-extrabold text-sky">42</p>
                <p className="text-sm text-white/85">communities served across Nigeria</p>
              </div>
            </div>
            <div aria-hidden className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-full bg-leaf/25 blur-2xl" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
