import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { NEWS } from '@/content/news'
import { EVENTS } from '@/content/events'
import { eventImage, newsImage } from '@/content/images'
import { formatDate, isUpcoming } from '@/lib/format'
import Photo from '@/components/ui/Photo'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

export default function NewsEvents() {
  const [lead, ...rest] = NEWS.slice(0, 3)
  const upcoming = EVENTS.filter((e) => isUpcoming(e.date)).slice(0, 3)
  return (
    <section className="section">
      <div className="container-x">
        <Reveal><SectionHeading eyebrow="News and events" title="What is happening at the foundation" /></Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          <div className="space-y-6">
            <article className="group overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-soft">
              <Photo image={newsImage(lead.slug)} ratio="aspect-[16/9]" imgClassName="transition duration-500 group-hover:scale-105">
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-navy backdrop-blur">{lead.category}</span>
              </Photo>
              <div className="p-6 sm:p-8">
                <time dateTime={lead.date} className="text-sm font-semibold text-leaf-dark">{formatDate(lead.date)}</time>
                <h3 className="mt-2 text-2xl font-extrabold"><Link to={`/news/${lead.slug}`} className="hover:text-ocean">{lead.title}</Link></h3>
                <p className="mt-3 text-charcoal/75">{lead.excerpt}</p>
              </div>
            </article>
            <ul className="grid gap-5 sm:grid-cols-2">
              {rest.map((p) => (
                <li key={p.slug} className="group overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm">
                  <Photo image={newsImage(p.slug)} ratio="aspect-[16/9]" imgClassName="transition duration-500 group-hover:scale-105" />
                  <div className="p-5">
                    <p className="text-sm"><span className="font-semibold text-ocean">{p.category}</span> · <time dateTime={p.date} className="text-charcoal/65">{formatDate(p.date, { day: 'numeric', month: 'short', year: 'numeric' })}</time></p>
                    <h3 className="mt-2 text-lg font-bold"><Link to={`/news/${p.slug}`} className="hover:text-ocean">{p.title}</Link></h3>
                    <p className="mt-2 text-sm text-charcoal/70">{p.excerpt}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button to="/news" variant="outline" size="sm">All news</Button>
          </div>

          <aside aria-labelledby="events-h" className="rounded-[2rem] bg-mist p-6 sm:p-8">
            <h3 id="events-h" className="text-xl font-extrabold">Upcoming events</h3>
            <ul className="mt-6 space-y-5">
              {upcoming.map((e) => {
                const d = new Date(e.date)
                return (
                  <li key={e.slug} className="flex gap-4">
                    <Photo image={eventImage(e.slug)} ratio="h-24 w-24" className="shrink-0 rounded-2xl shadow-soft">
                      <time dateTime={e.date} className="absolute bottom-1.5 left-1.5 flex h-11 w-11 flex-col items-center justify-center rounded-xl bg-white text-navy shadow-soft">
                        <span className="font-heading text-base font-extrabold leading-none">{d.getDate()}</span>
                        <span className="text-[0.65rem] font-bold uppercase leading-tight tracking-wide text-ocean">{d.toLocaleDateString('en-NG', { month: 'short' })}</span>
                      </time>
                    </Photo>
                    <div className="min-w-0">
                      <h4 className="text-base font-bold text-navy"><Link to={`/events/${e.slug}`} className="hover:text-ocean">{e.title}</Link></h4>
                      <p className="mt-0.5 flex items-center gap-1.5 text-sm text-charcoal/70"><MapPin aria-hidden className="h-4 w-4 shrink-0" /> {e.venue}</p>
                      <p className="text-sm text-charcoal/60">{e.time}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
            <div className="mt-7"><Button to="/events" variant="primary" size="sm">View all events</Button></div>
          </aside>
        </div>
      </div>
    </section>
  )
}
