import { useState } from 'react'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import FilterChips from '@/components/ui/FilterChips'
import Photo from '@/components/ui/Photo'
import StatusBadge from '@/components/ui/StatusBadge'
import { PROJECT_UPDATES } from '@/content/projects'
import { projectImage } from '@/content/images'
import { formatDate } from '@/lib/format'

export default function ProjectUpdates() {
  const [f, setF] = useState('All')
  const list = [...PROJECT_UPDATES].filter((p) => f === 'All' || p.status === f).sort((a, b) => b.date.localeCompare(a.date))
  return (
    <>
      <Seo title="Project updates" description="Progress on current Margaret Amshi Foundation projects, from scholarships to emergency recovery." />
      <PageHero title="Project updates" description="Progress on the work we are doing right now." />
      <section className="section">
        <div className="container-x">
          <FilterChips label="Filter by status" options={['All', 'In progress', 'On track', 'Completed']} value={f} onChange={setF} />
          <ul className="mt-10 space-y-6">
            {list.map((p) => (
              <li key={p.slug} className="grid overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-sm md:grid-cols-[0.8fr_1.2fr]">
                <Photo image={projectImage(p.slug)} ratio="aspect-[16/10] md:aspect-auto" className="min-h-[13rem]" />
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3"><StatusBadge status={p.status} /><span className="text-sm font-semibold text-leaf-dark">{p.program}</span></div>
                  <h2 className="mt-3 text-2xl font-extrabold">{p.title}</h2>
                  <p className="mt-1 text-sm text-charcoal/65">{p.location} · Updated <time dateTime={p.date}>{formatDate(p.date)}</time></p>
                  <p className="mt-4 text-charcoal/80">{p.summary}</p>
                  <div className="mt-5">
                    <div className="mb-1.5 flex justify-between text-sm font-semibold text-navy"><span id={`pl-${p.slug}`}>Progress</span><span>{p.progress}%</span></div>
                    <div role="progressbar" aria-labelledby={`pl-${p.slug}`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={p.progress} className="h-3 overflow-hidden rounded-full bg-mist"><div className="h-full rounded-full bg-grad-ocean" style={{ width: `${p.progress}%` }} /></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title="Support work in progress" text="Your gift helps us finish what we have started." />
    </>
  )
}
