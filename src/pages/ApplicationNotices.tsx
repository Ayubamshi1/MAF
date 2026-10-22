import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import FilterChips from '@/components/ui/FilterChips'
import StatusBadge from '@/components/ui/StatusBadge'
import { NOTICES } from '@/content/notices'
import { formatDate } from '@/lib/format'

export default function ApplicationNotices() {
  const [f, setF] = useState('Open and upcoming')
  const list = NOTICES.filter((n) => (f === 'All' ? true : f === 'Closed' ? n.status === 'Closed' : n.status !== 'Closed'))
  return (
    <>
      <Seo title="Application notices" description="Open calls, deadlines and notices for grants, scholarships, training, volunteering and cooperative membership." />
      <PageHero title="Application notices" description="Open calls, deadlines and how to apply." />
      <section className="section">
        <div className="container-x">
          <FilterChips label="Filter notices" options={['Open and upcoming', 'Closed', 'All']} value={f} onChange={setF} />
          <ul className="mt-10 space-y-5">
            {list.map((n) => (
              <li key={n.slug} className="flex flex-col gap-5 rounded-3xl border border-navy/10 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <div className="flex flex-wrap items-center gap-3"><StatusBadge status={n.status} /><span className="text-sm text-charcoal/65">Posted <time dateTime={n.posted}>{formatDate(n.posted)}</time></span></div>
                  <h2 className="mt-3 text-2xl font-extrabold">{n.title}</h2>
                  <p className="mt-2 max-w-2xl text-charcoal/75">{n.summary}</p>
                  {n.deadline && <p className="mt-2 text-sm font-semibold text-navy">Deadline: <time dateTime={n.deadline}>{formatDate(n.deadline)}</time></p>}
                </div>
                <Link to={n.to} className="btn btn-primary btn-sm shrink-0">{n.cta}</Link>
              </li>
            ))}
          </ul>
          {list.length === 0 && <p className="mt-10 text-charcoal/70">No notices in this view.</p>}
        </div>
      </section>
      <CtaBand title="Get notices on WhatsApp" text="Join our updates so you never miss a deadline." actions={<a href="/#updates" className="btn btn-light btn-lg">Join our updates</a>} />
    </>
  )
}
