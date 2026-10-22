import { Link, useParams } from 'react-router-dom'
import { Calendar, Clock, MapPin, Users, Wallet } from 'lucide-react'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import WhatsAppForm from '@/components/forms/WhatsAppForm'
import Button from '@/components/ui/Button'
import { EVENTS } from '@/content/events'
import { eventImage } from '@/content/images'
import { formatDate, isUpcoming } from '@/lib/format'
import JsonLd from '@/components/common/JsonLd'
import { eventSchema } from '@/lib/schema'
import NotFound from './NotFound'

export default function EventDetail() {
  const { slug = '' } = useParams()
  const ev = EVENTS.find((e) => e.slug === slug)
  if (!ev) return <NotFound />
  const upcoming = isUpcoming(ev.date)
  const rows = [
    { icon: Calendar, label: 'Date', value: formatDate(ev.date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) },
    { icon: Clock, label: 'Time', value: ev.time },
    { icon: MapPin, label: 'Venue', value: ev.venue },
    { icon: Users, label: 'Who it is for', value: ev.audience },
    { icon: Wallet, label: 'Cost', value: ev.free ? 'Free' : 'See details' },
  ]
  return (
    <>
      <Seo title={ev.title} description={ev.summary} image={eventImage(ev.slug).src} />
      <JsonLd data={eventSchema(ev, eventImage(ev.slug).src)} />
      <PageHero image={eventImage(ev.slug)} title={ev.title} description={ev.summary} trail={[{ label: 'Home', to: '/' }, { label: 'Events', to: '/events' }, { label: ev.title }]} actions={upcoming && ev.registration ? <Link to={{ hash: '#register' }} className="btn btn-light btn-lg">Register now</Link> : undefined} />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-extrabold">About this event</h2>
            <div className="prose-soft mt-5 max-w-2xl text-lg text-charcoal/85">{ev.description.map((p) => <p key={p}>{p}</p>)}</div>
            {!upcoming && <p className="mt-6 rounded-2xl bg-mist p-5 font-semibold text-navy">This event has taken place. See our <Link to="/impact/project-updates" className="link-inline">project updates</Link> and <Link to="/news" className="link-inline">news</Link> for what happened.</p>}
          </div>
          <aside>
            <dl className="space-y-5 rounded-[2rem] border border-navy/10 bg-white p-7 shadow-soft">
              {rows.map((r) => <div key={r.label} className="flex gap-4"><span aria-hidden className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean"><r.icon className="h-5 w-5" /></span><div><dt className="text-sm text-charcoal/65">{r.label}</dt><dd className="font-bold text-navy">{r.value}</dd></div></div>)}
            </dl>
            <div className="mt-5"><Button href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${ev.venue}`)}`} variant="outline" size="sm">Get directions</Button></div>
          </aside>
        </div>
      </section>
      {upcoming && ev.registration && (
        <section id="register" className="section scroll-mt-20 bg-mist/70">
          <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div><h2 className="text-3xl font-extrabold sm:text-4xl">Register to attend</h2><p className="mt-4 text-lg text-charcoal/80">Tell us who is coming so we can plan seating, refreshments and materials.</p></div>
            <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-lift sm:p-10"><WhatsAppForm formKey="event" defaults={{ event: ev.title }} heading={null} /></div>
          </div>
        </section>
      )}
      <div className="pt-20 sm:pt-28"><CtaBand title="Join us at our next event" text="See all upcoming events or help us host one." actions={<Link to="/events" className="btn btn-light btn-lg">All events</Link>} /></div>
    </>
  )
}
