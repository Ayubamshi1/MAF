import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'
import Photo from '@/components/ui/Photo'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { MISSION, VISION } from '@/content/values'
import { IMAGES } from '@/content/images'
import { Compass, Eye } from 'lucide-react'

const ACTIONS = [
  { title: 'Fund what communities ask for', text: 'Priorities come from residents and local leaders, not from assumptions.' },
  { title: 'Build lasting capacity', text: 'We invest in skills, savings and organizations that keep working after our support ends.' },
  { title: 'Measure and share results', text: 'We track outputs and outcomes and publish what we learn.' },
]

export default function MissionVision() {
  return (
    <>
      <Seo title="Mission and vision" description="Our mission is to cultivate a thriving humanity grounded in community and sustained across generations through transformative philanthropy." />
      <PageHero title="Mission and vision" description="Where we are going, and why it matters." />

      <section className="section">
        <div className="container-x space-y-10">
          <Reveal>
            <article className="grid overflow-hidden rounded-[2.5rem] bg-grad-ocean text-white shadow-glow lg:grid-cols-2">
              <div className="p-8 sm:p-14">
                <Compass aria-hidden className="h-10 w-10 text-sky-100" />
                <h2 className="mt-5 text-sm font-semibold !text-sky-100">Our mission</h2>
                <p className="mt-4 font-heading text-2xl font-bold leading-snug sm:text-3xl">{MISSION}</p>
              </div>
              <Photo image={IMAGES.missionVision} ratio="aspect-[16/10] lg:aspect-auto" className="min-h-[16rem]" />
            </article>
          </Reveal>
          <Reveal>
            <article className="grid overflow-hidden rounded-[2.5rem] border border-leaf/25 bg-leaf-100/60 lg:grid-cols-2">
              <Photo image={IMAGES.aboutApproach} ratio="aspect-[16/10] lg:aspect-auto" className="order-2 min-h-[16rem] lg:order-1" />
              <div className="order-1 p-8 sm:p-14 lg:order-2">
                <Eye aria-hidden className="h-10 w-10 text-leaf-dark" />
                <h2 className="mt-5 text-sm font-semibold !text-leaf-dark">Our vision</h2>
                <p className="mt-4 font-heading text-2xl font-bold leading-snug text-navy sm:text-3xl">{VISION}</p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section bg-grad-wash">
        <div className="container-x">
          <SectionHeading eyebrow="In practice" title="How we turn purpose into action" />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {ACTIONS.map((a) => (
              <li key={a.title} className="rounded-3xl border border-navy/10 bg-white p-7 shadow-sm"><h3 className="text-xl font-extrabold">{a.title}</h3><p className="mt-2 text-charcoal/75">{a.text}</p></li>
            ))}
          </ul>
          <div className="mt-10"><Button to="/about/values" variant="outline">Read our values</Button></div>
        </div>
      </section>
      <div className="pt-20 sm:pt-28"><CtaBand title="Help us build a thriving humanity" text="Your support turns our mission into action." /></div>
    </>
  )
}
