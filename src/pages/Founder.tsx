import { Link } from 'react-router-dom'
import { Check, Quote } from 'lucide-react'
import Seo from '@/components/common/Seo'
import JsonLd from '@/components/common/JsonLd'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import FounderGallery from '@/components/sections/FounderGallery'
import BgImage from '@/components/ui/BgImage'
import Button from '@/components/ui/Button'
import Photo from '@/components/ui/Photo'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { FOUNDER } from '@/content/founder'
import { ALL_PROGRAMS } from '@/content/programs'
import { IMAGES, programImage } from '@/content/images'
import { getIcon } from '@/lib/icons'
import { personSchema } from '@/lib/schema'

export default function Founder() {
  return (
    <>
      <Seo title="Our founder, Margaret Amshi" description="Meet Margaret Amshi, founder of Margaret Amshi Foundation: her story, vision, achievements and the work she leads across Nigeria." image={IMAGES.founderPortrait.src} />
      <JsonLd data={personSchema(IMAGES.founderPortrait.src)} />
      <PageHero image={IMAGES.founderHero} title={FOUNDER.name} description={`${FOUNDER.role} of Margaret Amshi Foundation`} />

      {/* Introduction */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <Photo image={IMAGES.founderPortrait} ratio="aspect-[4/5]" className="rounded-[2.5rem] shadow-lift" priority />
              <p className="absolute -bottom-5 left-6 rounded-full bg-grad-ocean px-6 py-3 font-heading text-sm font-extrabold text-white shadow-glow">{FOUNDER.role}</p>
              <div aria-hidden className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-leaf/25 blur-2xl" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading eyebrow="Meet the founder" title={FOUNDER.tagline} />
            <div className="prose-soft mt-6 max-w-2xl text-lg text-charcoal/85">{FOUNDER.intro.map((p) => <p key={p}>{p}</p>)}</div>
            <dl className="mt-8 grid gap-4 rounded-[2rem] bg-gradient-to-br from-ocean-50 to-leaf-100/60 p-6 ring-1 ring-navy/5 sm:grid-cols-2 sm:p-8">
              {FOUNDER.facts.map((f) => (
                <div key={f.label}><dt className="text-sm font-semibold text-leaf-dark">{f.label}</dt><dd className="mt-0.5 font-bold text-navy">{f.value}</dd></div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Story timeline */}
      <section className="section bg-grad-wash">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="Her story" title="From helping neighbours to serving a nation" description="The path that led Margaret Amshi to found the foundation and the principles she carried along the way." />
            <Photo image={IMAGES.founderSecondary} ratio="aspect-[4/3]" className="mt-8 hidden rounded-[2rem] shadow-soft lg:block" />
          </Reveal>
          <ol className="relative space-y-8 border-l-2 border-sky/40 pl-8 sm:pl-10">
            {FOUNDER.timeline.map((t) => (
              <li key={t.title} className="relative">
                <span aria-hidden className="absolute -left-[2.6rem] top-1.5 h-5 w-5 rounded-full border-4 border-white bg-grad-ocean shadow-soft sm:-left-[3.1rem]" />
                <p className="text-sm font-bold text-leaf-dark">{t.label}</p>
                <h3 className="mt-1 text-xl font-extrabold sm:text-2xl">{t.title}</h3>
                <p className="mt-2 text-charcoal/80">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Quote */}
      <section className="on-dark relative isolate overflow-hidden py-20 text-white sm:py-28">
        <BgImage image={IMAGES.founderSecondary} overlay="bg-gradient-to-br from-navy-900/95 via-navy/90 to-ocean/80" />
        <div className="container-x text-center">
          <Quote aria-hidden className="mx-auto h-12 w-12 text-sky" />
          <blockquote className="mx-auto mt-6 max-w-4xl font-heading text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl">“{FOUNDER.quote}”</blockquote>
          <p className="mt-6 font-semibold text-sky-100">{FOUNDER.name}, {FOUNDER.role}</p>
        </div>
      </section>

      {/* Achievements */}
      <section className="section">
        <div className="container-x">
          <Reveal><SectionHeading eyebrow="Achievements" title="What her leadership has made possible" /></Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FOUNDER.achievements.map((a) => {
              const Icon = getIcon(a.icon)
              return (
                <li key={a.title} className="rounded-3xl border border-navy/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-grad-ocean text-white shadow-soft"><Icon aria-hidden className="h-6 w-6" /></span>
                  <h3 className="mt-5 text-xl font-extrabold">{a.title}</h3>
                  <p className="mt-2 text-charcoal/75">{a.text}</p>
                </li>
              )
            })}
          </ul>
          <div className="mt-14 grid items-center gap-8 rounded-[2.5rem] bg-mist p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><h3 className="text-2xl font-extrabold sm:text-3xl">Recognition and service</h3><p className="mt-2 text-charcoal/75">Beyond the foundation, Margaret gives her time and voice to causes she believes in.</p></div>
            <ul className="space-y-3">
              {FOUNDER.recognition.map((r) => <li key={r} className="flex gap-3"><span aria-hidden className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-leaf-dark"><Check className="h-4 w-4" /></span><span>{r}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section bg-grad-wash">
        <div className="container-x">
          <Reveal><SectionHeading eyebrow="Her principles" title="Four ideas that guide every decision" /></Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FOUNDER.principles.map((p, i) => (
              <li key={p.title} className={`rounded-3xl bg-white p-7 shadow-soft ring-1 ring-navy/5 ${i % 2 ? 'lg:translate-y-6' : ''}`}>
                <h3 className="text-xl font-extrabold text-ocean">{p.title}</h3>
                <p className="mt-2 text-charcoal/75">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Message */}
      <section className="section">
        <div className="container-x">
          <article className="mx-auto max-w-3xl rounded-[2.5rem] border border-navy/10 bg-white p-8 shadow-soft sm:p-14">
            <h2 className="text-3xl font-extrabold sm:text-4xl">A message from Margaret Amshi</h2>
            <div className="prose-soft mt-6 text-lg text-charcoal/85">{FOUNDER.message.map((p) => <p key={p}>{p}</p>)}</div>
            <p className="mt-8 font-heading text-2xl font-bold italic text-ocean">{FOUNDER.name}</p>
            <p className="text-sm text-charcoal/65">{FOUNDER.role}, Margaret Amshi Foundation</p>
          </article>
        </div>
      </section>

      {/* Works */}
      <section className="section bg-mist/70">
        <div className="container-x">
          <Reveal><SectionHeading eyebrow="Her works" title="Programs she champions" description="The initiatives closest to Margaret’s heart, open to people across Nigeria." /></Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FOUNDER.works.map((w) => {
              const p = ALL_PROGRAMS.find((x) => x.slug === w.slug)
              if (!p) return null
              return (
                <li key={w.slug}>
                  <Link to={p.to} className="group block h-full overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
                    <Photo image={programImage(p.slug)} ratio="aspect-[4/3]" imgClassName="transition duration-500 group-hover:scale-105" />
                    <span className="block p-5"><span className="block text-lg font-bold text-navy">{p.title}</span><span className="mt-1 block text-sm text-charcoal/70">{w.note}</span></span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="section" id="gallery">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Gallery" title="Moments and works" description="A look at Margaret’s work with communities, partners and young people. Select a photo to view it full screen." />
            <Button to="/impact/stories" variant="outline" size="sm">Read impact stories</Button>
          </div>
          <div className="mt-10"><FounderGallery /></div>
        </div>
      </section>

      <CtaBand title="Join Margaret’s mission" text="Give, volunteer or partner with the foundation and help build communities that thrive across Nigeria." />
    </>
  )
}
