import { Link } from 'react-router-dom'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'
import Counter from '@/components/ui/Counter'
import Photo from '@/components/ui/Photo'
import SectionHeading from '@/components/ui/SectionHeading'
import StatusBadge from '@/components/ui/StatusBadge'
import { IMAGES, projectImage, reportImage, storyImage } from '@/content/images'
import { RESULTS } from '@/content/stats'
import { STORIES } from '@/content/stories'
import { PROJECT_UPDATES } from '@/content/projects'
import { REPORTS } from '@/content/reports'
import { formatDate } from '@/lib/format'

export default function Impact() {
  return (
    <>
      <Seo title="Impact overview" description="See the results of Margaret Amshi Foundation: people reached, scholarships and grants awarded, communities served and stories of change." />
      <PageHero image={IMAGES.impactHero} title="Our impact" description="What we have delivered, who it reached and what we are learning." />

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Results" title="The difference your support makes" description="Figures cover the most recent reporting year. We publish methods and limits in our annual reports." />
          <dl className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RESULTS.map((r) => (
              <div key={r.label} className="rounded-3xl border border-navy/10 bg-white p-7 shadow-sm">
                <dd className="font-heading text-5xl font-extrabold text-ocean"><Counter value={r.value} suffix={r.suffix} /></dd>
                <dt className="mt-2 text-lg font-bold text-navy">{r.label}</dt>
                <dd className="mt-1 text-sm text-charcoal/70">{r.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section bg-grad-wash">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Stories" title="Real people. Lasting change." />
            <Button to="/impact/stories" variant="outline" size="sm">All stories</Button>
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {STORIES.slice(0, 3).map((s) => (
              <li key={s.slug}>
                <Link to={`/impact/stories/${s.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
                  <Photo image={storyImage(s.slug)} ratio="aspect-[4/3]" imgClassName="transition duration-500 group-hover:scale-105" />
                  <span className="flex flex-1 flex-col p-6"><span className="text-sm font-semibold text-leaf-dark">{s.program}</span><span className="mt-1 text-lg font-bold text-navy">{s.title}</span><span className="mt-2 text-sm text-charcoal/70">{s.name} · {s.detail}</span></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Project updates" title="Progress on current work" />
            <Button to="/impact/project-updates" variant="outline" size="sm">All updates</Button>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {PROJECT_UPDATES.slice(0, 3).map((p) => (
              <li key={p.slug} className="overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm">
                <Photo image={projectImage(p.slug)} ratio="aspect-[16/9]" />
                <div className="p-6">
                  <StatusBadge status={p.status} />
                  <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-charcoal/70">{p.location} · <time dateTime={p.date}>{formatDate(p.date, { day: 'numeric', month: 'short', year: 'numeric' })}</time></p>
                  <p className="mt-3 text-[0.95rem] text-charcoal/75">{p.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-mist/70">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Accountability" title="Read our reports. Check our numbers." description="Annual reports, financial summaries and our transparency commitments are open to everyone." />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/impact/reports" variant="primary">Annual reports</Button>
              <Button to="/impact/financial-summaries" variant="outline">Financial summaries</Button>
              <Button to="/impact/transparency" variant="outline">Transparency</Button>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-4">
            {REPORTS.slice(0, 2).map((r) => (
              <li key={r.slug}><Link to="/impact/reports" className="block overflow-hidden rounded-3xl bg-white shadow-soft"><Photo image={reportImage(r.slug)} ratio="aspect-[4/5]" /><span className="block p-4 font-bold text-navy">{r.title}</span></Link></li>
            ))}
          </ul>
        </div>
      </section>
      <div className="pt-20 sm:pt-28"><CtaBand title="Help us reach more people" text="Give, volunteer or partner with us and be part of the next report." /></div>
    </>
  )
}
