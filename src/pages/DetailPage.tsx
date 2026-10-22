import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Check, Phone } from 'lucide-react'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import WhatsAppForm from '@/components/forms/WhatsAppForm'
import InfoBlocks from '@/components/sections/InfoBlocks'
import StepList from '@/components/sections/StepList'
import RelatedPrograms from '@/components/sections/RelatedPrograms'
import CtaBand from '@/components/sections/CtaBand'
import Accordion from '@/components/ui/Accordion'
import Button from '@/components/ui/Button'
import Photo from '@/components/ui/Photo'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import JsonLd from '@/components/common/JsonLd'
import { faqSchema } from '@/lib/schema'
import { COURSES } from '@/content/courses'
import { IMAGES } from '@/content/images'
import type { PageContent } from '@/content/pageContent'
import { SITE, phoneLinks } from '@/config/site'

interface Props {
  content: PageContent
  parent: { label: string; to: string }
}

/** One layout for every program page and every Get Involved action page. All text comes from the content files. */
export default function DetailPage({ content: c, parent }: Props) {
  const [params] = useSearchParams()
  const courseSlug = params.get('course')
  const defaults = useMemo<Record<string, string>>(() => {
    if (c.form?.key !== 'training' || !courseSlug) return {}
    return { course: COURSES.find((x) => x.slug === courseSlug)?.title ?? '' }
  }, [c.form?.key, courseSlug])

  return (
    <>
      <Seo title={c.title} description={c.tagline} />
      {c.faqs && c.faqs.length > 0 && <JsonLd data={faqSchema(c.faqs)} />}
      <PageHero
        image={c.image}
        title={c.title}
        description={c.tagline}
        trail={[{ label: 'Home', to: '/' }, { label: parent.label, to: parent.to }, { label: c.title }]}
        actions={
          <>
            {c.form && <Link to={{ hash: '#apply' }} className="btn btn-light btn-lg">{c.applyLabel ?? 'Get started'}</Link>}
            <Button to="/donate" variant="ghost" size="lg">Donate</Button>
          </>
        }
      />

      {/* Overview */}
      <section className="section">
        <div className={`container-x grid gap-12 ${c.serves ? 'lg:grid-cols-[1.25fr_0.75fr] lg:gap-16' : ''}`}>
          <Reveal>
            <SectionHeading eyebrow="Overview" title={`About ${c.title}`} />
            <div className="prose-soft mt-6 max-w-2xl text-lg text-charcoal/85">
              {c.overview.map((p) => <p key={p}>{p}</p>)}
            </div>
          </Reveal>
          {c.serves && (
            <Reveal delay={0.1}>
              <aside className="rounded-[2rem] bg-gradient-to-br from-ocean-50 to-leaf-100/60 p-7 ring-1 ring-navy/5 sm:p-9">
                <h3 className="text-xl font-extrabold">{c.servesTitle ?? 'Who it is for'}</h3>
                <ul className="mt-5 space-y-3.5">
                  {c.serves.map((s) => (
                    <li key={s} className="flex gap-3"><span aria-hidden className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ocean text-white"><Check className="h-4 w-4" /></span><span>{s}</span></li>
                  ))}
                </ul>
              </aside>
            </Reveal>
          )}
        </div>
      </section>

      {/* What we offer */}
      {c.offers && (
        <section className="section bg-grad-wash pt-0 sm:pt-0">
          <div className="container-x pt-20 sm:pt-28">
            <Reveal><SectionHeading eyebrow="What we offer" title={c.offersTitle ?? 'What we offer'} /></Reveal>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {c.offers.map((o) => (
                <li key={o.title} className="relative overflow-hidden rounded-3xl border border-navy/10 bg-white p-7 shadow-sm">
                  <span aria-hidden className="absolute inset-y-0 left-0 w-1.5 bg-grad-ocean" />
                  <h3 className="text-xl font-extrabold">{o.title}</h3>
                  <p className="mt-2 text-charcoal/75">{o.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* How it works */}
      {c.steps && (
        <section className="section">
          <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            <div>
              <SectionHeading eyebrow="How it works" title={c.stepsTitle ?? 'How it works'} />
              <div className="mt-10"><StepList items={c.steps} /></div>
            </div>
            <Photo image={IMAGES.aboutApproach} ratio="aspect-[4/5]" className="hidden rounded-[2.5rem] shadow-lift lg:block" />
          </div>
        </section>
      )}

      {/* Specific sections */}
      {c.blocks && c.blocks.length > 0 && (
        <section className="section pt-0 sm:pt-0">
          <div className="container-x"><InfoBlocks blocks={c.blocks} /></div>
        </section>
      )}

      {/* Form */}
      {c.form && (
        <section id="apply" className="section scroll-mt-20 bg-mist/70">
          <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">{c.form.heading}</h2>
              {c.form.intro && <p className="mt-4 text-lg text-charcoal/80">{c.form.intro}</p>}
              {c.form.points && (
                <ul className="mt-6 space-y-3">
                  {c.form.points.map((p) => <li key={p} className="flex gap-3"><span aria-hidden className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-leaf-dark"><Check className="h-4 w-4" /></span><span>{p}</span></li>)}
                </ul>
              )}
              <Photo image={IMAGES.contactSide} ratio="aspect-[16/10]" className="mt-8 hidden rounded-[2rem] shadow-soft lg:block" />
              <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-charcoal/75">
                <span>Prefer to talk?</span>
                {phoneLinks().map((p) => <a key={p.tel} href={p.href} className="inline-flex items-center gap-1.5 font-bold text-ocean hover:text-navy"><Phone aria-hidden className="h-4 w-4" /> {p.display}</a>)}
              </p>
            </div>
            <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-lift sm:p-10">
              <WhatsAppForm key={JSON.stringify(defaults)} formKey={c.form.key} defaults={defaults} heading={null} />
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {c.faqs && c.faqs.length > 0 && (
        <section className="section">
          <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal><SectionHeading eyebrow="Questions" title="Frequently asked questions" description={`Still unsure? Email ${SITE.email} or call us.`} /></Reveal>
            <Reveal delay={0.08}><Accordion items={c.faqs} /></Reveal>
          </div>
        </section>
      )}

      {c.related && <RelatedPrograms slugs={c.related} />}
      <div className="pt-20 sm:pt-28">
        <CtaBand title={c.ctaTitle ?? 'Ready to make a difference?'} text={c.ctaText ?? 'Give, volunteer or partner with us. Every contribution helps build thriving communities.'} />
      </div>
    </>
  )
}
