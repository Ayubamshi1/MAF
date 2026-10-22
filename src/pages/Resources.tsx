import { Link } from 'react-router-dom'
import { Bell, CalendarDays, CircleHelp, Download, FileText, Newspaper } from 'lucide-react'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import Photo from '@/components/ui/Photo'
import StatusBadge from '@/components/ui/StatusBadge'
import SectionHeading from '@/components/ui/SectionHeading'
import { NOTICES } from '@/content/notices'
import { IMAGES } from '@/content/images'
import { formatDate } from '@/lib/format'

const HUB = [
  { title: 'Application notices', text: 'Open calls, deadlines and how to apply.', to: '/resources/application-notices', icon: Bell },
  { title: 'Downloads', text: 'Application and registration forms in PDF.', to: '/resources/downloads', icon: Download },
  { title: 'FAQs', text: 'Answers to the questions we are asked most.', to: '/faqs', icon: CircleHelp },
  { title: 'News', text: 'Announcements and stories from the foundation.', to: '/news', icon: Newspaper },
  { title: 'Events', text: 'Upcoming and past events.', to: '/events', icon: CalendarDays },
  { title: 'Annual reports', text: 'Results and finances, published every year.', to: '/impact/reports', icon: FileText },
]

export default function Resources() {
  const open = NOTICES.filter((n) => n.status !== 'Closed').slice(0, 3)
  return (
    <>
      <Seo title="News and resources" description="Announcements, events, application notices, downloadable forms and FAQs from Margaret Amshi Foundation." />
      <PageHero title="News and resources" description="Everything you need to apply, attend and stay informed." />
      <section className="section">
        <div className="container-x">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HUB.map((h) => (
              <li key={h.title}><Link to={h.to} className="group flex h-full gap-4 rounded-3xl border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lift"><span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-grad-ocean text-white shadow-soft"><h.icon aria-hidden className="h-6 w-6" /></span><span><span className="block text-lg font-bold text-navy">{h.title}</span><span className="text-sm text-charcoal/70">{h.text}</span></span></Link></li>
            ))}
          </ul>

          <div className="mt-20 grid items-start gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <div>
              <SectionHeading eyebrow="Open now" title="Current application notices" />
              <ul className="mt-8 space-y-4">
                {open.map((n) => (
                  <li key={n.slug} className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm">
                    <div className="flex flex-wrap items-center gap-3"><StatusBadge status={n.status} />{n.deadline && <span className="text-sm text-charcoal/70">Deadline: {formatDate(n.deadline)}</span>}</div>
                    <h3 className="mt-3 text-xl font-bold">{n.title}</h3>
                    <p className="mt-1 text-charcoal/75">{n.summary}</p>
                    <Link to={n.to} className="link-inline mt-3 inline-block text-sm">{n.cta}</Link>
                  </li>
                ))}
              </ul>
              <Link to="/resources/application-notices" className="link-inline mt-6 inline-block">See all notices</Link>
            </div>
            <Photo image={IMAGES.generic} ratio="aspect-[4/5]" className="hidden rounded-[2.5rem] shadow-lift lg:block" />
          </div>
        </div>
      </section>
      <CtaBand title="Cannot find what you need?" text="Call or message us and we will help." />
    </>
  )
}
