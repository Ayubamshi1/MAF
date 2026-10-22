import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import FilterChips from '@/components/ui/FilterChips'
import Photo from '@/components/ui/Photo'
import { NEWS } from '@/content/news'
import { newsImage } from '@/content/images'
import { formatDate } from '@/lib/format'

export default function News() {
  const cats = ['All', ...Array.from(new Set(NEWS.map((n) => n.category)))]
  const [f, setF] = useState('All')
  const list = [...NEWS].sort((a, b) => b.date.localeCompare(a.date)).filter((n) => f === 'All' || n.category === f)
  const [lead, ...rest] = list
  return (
    <>
      <Seo title="News" description="News and announcements from Margaret Amshi Foundation: applications, programs, outreach and emergency response." />
      <PageHero title="News" description="Announcements, updates and stories from the foundation." />
      <section className="section">
        <div className="container-x">
          <FilterChips label="Filter news by category" options={cats} value={f} onChange={setF} />
          {lead && (
            <article className="group mt-10 grid overflow-hidden rounded-[2.5rem] border border-navy/10 bg-white shadow-soft lg:grid-cols-2">
              <Photo image={newsImage(lead.slug)} ratio="aspect-[16/10] lg:aspect-auto" className="min-h-[16rem]" imgClassName="transition duration-500 group-hover:scale-105" />
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <p className="text-sm"><span className="font-semibold text-ocean">{lead.category}</span> · <time dateTime={lead.date} className="text-charcoal/65">{formatDate(lead.date)}</time></p>
                <h2 className="mt-3 text-3xl font-extrabold"><Link to={`/news/${lead.slug}`} className="hover:text-ocean">{lead.title}</Link></h2>
                <p className="mt-4 text-lg text-charcoal/75">{lead.excerpt}</p>
                <Link to={`/news/${lead.slug}`} className="link-inline mt-6 self-start">Read the article</Link>
              </div>
            </article>
          )}
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((n) => (
              <li key={n.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
                  <Photo image={newsImage(n.slug)} ratio="aspect-[16/9]" imgClassName="transition duration-500 group-hover:scale-105" />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm"><span className="font-semibold text-ocean">{n.category}</span> · <time dateTime={n.date} className="text-charcoal/65">{formatDate(n.date, { day: 'numeric', month: 'short', year: 'numeric' })}</time></p>
                    <h2 className="mt-2 text-xl font-bold"><Link to={`/news/${n.slug}`} className="hover:text-ocean">{n.title}</Link></h2>
                    <p className="mt-2 text-[0.95rem] text-charcoal/70">{n.excerpt}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          {list.length === 0 && <p className="mt-10 text-charcoal/70">No articles in this category yet.</p>}
        </div>
      </section>
      <CtaBand title="Never miss an update" text="Join our WhatsApp updates for news, events and application notices." actions={<a href="/#updates" className="btn btn-light btn-lg">Join our updates</a>} />
    </>
  )
}
