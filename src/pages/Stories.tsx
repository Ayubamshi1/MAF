import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import FilterChips from '@/components/ui/FilterChips'
import Photo from '@/components/ui/Photo'
import { STORIES } from '@/content/stories'
import { storyImage } from '@/content/images'

export default function Stories() {
  const programs = ['All', ...Array.from(new Set(STORIES.map((s) => s.program)))]
  const [f, setF] = useState('All')
  const list = f === 'All' ? STORIES : STORIES.filter((s) => s.program === f)
  return (
    <>
      <Seo title="Impact stories" description="Read real stories from the people and communities supported by Margaret Amshi Foundation." />
      <PageHero title="Impact stories" description="Real experiences from the people and communities we serve, shared with their consent." />
      <section className="section">
        <div className="container-x">
          <FilterChips label="Filter stories by program" options={programs} value={f} onChange={setF} />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => (
              <li key={s.slug}>
                <Link to={`/impact/stories/${s.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
                  <Photo image={storyImage(s.slug)} ratio="aspect-[4/3]" imgClassName="transition duration-500 group-hover:scale-105"><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-navy backdrop-blur">{s.program}</span></Photo>
                  <span className="flex flex-1 flex-col p-6"><span className="text-xl font-extrabold text-navy">{s.title}</span><span className="mt-3 text-[0.95rem] italic text-charcoal/75">“{s.quote}”</span><span className="mt-4 text-sm font-semibold text-ocean">{s.name} · {s.location}</span></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title="Be part of the next story" text="Your gift or your time can change a life." />
    </>
  )
}
