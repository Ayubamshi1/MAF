import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, MapPin } from 'lucide-react'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import FilterChips from '@/components/ui/FilterChips'
import Photo from '@/components/ui/Photo'
import { EVENTS } from '@/content/events'
import { eventImage } from '@/content/images'
import { formatDate, isUpcoming } from '@/lib/format'

export default function Events() {
  const [tab, setTab] = useState('Upcoming events')
  const up = tab === 'Upcoming events'
  const list = EVENTS.filter((e) => isUpcoming(e.date) === up).sort((a, b) => (up ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)))
  return (
    <>
      <Seo title="Events" description="Upcoming and past events from Margaret Amshi Foundation: wellness days, clinics, ceremonies and more." />
      <PageHero title="Events" description="Join us in person, or see what you missed." />
      <section className="section">
        <div className="container-x">
          <FilterChips label="Show events" options={['Upcoming events', 'Past events']} value={tab} onChange={setTab} />
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((e) => {
              const d = new Date(e.date)
              return (
                <li key={e.slug}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
                    <Photo image={eventImage(e.slug)} ratio="aspect-[16/10]" imgClassName="transition duration-500 group-hover:scale-105">
                      <time dateTime={e.date} className="absolute left-4 top-4 flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-white text-navy shadow-soft"><span className="font-heading text-2xl font-extrabold leading-none">{d.getDate()}</span><span className="text-xs font-bold uppercase text-ocean">{d.toLocaleDateString('en-NG', { month: 'short' })}</span></time>
                    </Photo>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="text-xl font-extrabold"><Link to={`/events/${e.slug}`} className="hover:text-ocean">{e.title}</Link></h2>
                      <p className="mt-2 text-[0.95rem] text-charcoal/75">{e.summary}</p>
                      <ul className="mt-4 space-y-1.5 text-sm text-charcoal/75"><li className="flex gap-2"><Clock aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-ocean" />{formatDate(e.date)}, {e.time}</li><li className="flex gap-2"><MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-ocean" />{e.venue}</li></ul>
                      <Link to={`/events/${e.slug}`} className="btn btn-primary btn-sm mt-5 self-start">{up && e.registration ? 'Details and registration' : 'View details'}</Link>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
          {list.length === 0 && <p className="mt-10 text-charcoal/70">No events to show here right now. Check back soon.</p>}
        </div>
      </section>
      <CtaBand title="Host an event with us" text="Partner with the foundation on a community event." actions={<Link to="/get-involved/partner" className="btn btn-light btn-lg">Partner with us</Link>} />
    </>
  )
}
