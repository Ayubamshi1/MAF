import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import { LEGAL_UPDATED, PRIVACY, TERMS } from '@/content/legal'
import { formatDate } from '@/lib/format'

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export default function Legal({ kind }: { kind: 'privacy' | 'terms' }) {
  const privacy = kind === 'privacy'
  const sections = privacy ? PRIVACY : TERMS
  const title = privacy ? 'Privacy Policy' : 'Terms of Use'
  return (
    <>
      <Seo title={title} description={privacy ? 'How Margaret Amshi Foundation collects, uses and protects your information.' : 'The terms that apply when you use the Margaret Amshi Foundation website.'} />
      <PageHero title={title} description={`Last updated ${formatDate(LEGAL_UPDATED)}`} />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-28 rounded-3xl bg-mist p-6">
              <p className="mb-3 text-sm font-bold text-navy">On this page</p>
              <ul className="space-y-2 text-sm">{sections.map((s) => <li key={s.heading}><a href={`#${slugify(s.heading)}`} className="text-charcoal/80 underline-offset-4 hover:text-ocean hover:underline">{s.heading}</a></li>)}</ul>
            </div>
          </nav>
          <div className="max-w-3xl space-y-10">
            {sections.map((s) => (
              <section key={s.heading} id={slugify(s.heading)} className="scroll-mt-28">
                <h2 className="text-2xl font-extrabold">{s.heading}</h2>
                {s.paragraphs?.map((p) => <p key={p} className="mt-3 text-charcoal/85">{p}</p>)}
                {s.items && <ul className="mt-3 list-disc space-y-2 pl-6 text-charcoal/85 marker:text-ocean">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
