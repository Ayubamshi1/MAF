import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, Clock, MapPin } from 'lucide-react'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import FilterChips from '@/components/ui/FilterChips'
import Photo from '@/components/ui/Photo'
import SectionHeading from '@/components/ui/SectionHeading'
import { CAREERS } from '@/content/careers'
import { IMAGES } from '@/content/images'
import { formatDate } from '@/lib/format'

const WHY = [
  { title: 'Work that matters', text: 'Every role connects directly to people and communities.' },
  { title: 'Grow with us', text: 'Learning budgets, mentoring and room to take on more.' },
  { title: 'A values-led team', text: 'Integrity, equity and accountability in daily practice.' },
]

export default function Careers() {
  const types = ['All', ...Array.from(new Set(CAREERS.map((c) => c.type)))]
  const [t, setT] = useState('All')
  const list = CAREERS.filter((c) => t === 'All' || c.type === t)
  return (
    <>
      <Seo title="Careers" description="Open roles at Margaret Amshi Foundation and how to apply." />
      <PageHero image={IMAGES.involve.careers} title="Careers" description="Join a team that helps communities thrive." />
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Open roles" title="Current opportunities" />
          <div className="mt-8"><FilterChips label="Filter roles by type" options={types} value={t} onChange={setT} /></div>
          <ul className="mt-10 space-y-5">
            {list.map((c) => (
              <li key={c.slug} className="flex flex-col gap-5 rounded-3xl border border-navy/10 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <h2 className="text-2xl font-extrabold"><Link to={`/careers/${c.slug}`} className="hover:text-ocean">{c.title}</Link></h2>
                  <p className="mt-2 max-w-2xl text-charcoal/75">{c.summary}</p>
                  <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-charcoal/75"><li className="flex items-center gap-1.5"><Briefcase aria-hidden className="h-4 w-4 text-ocean" />{c.department} · {c.type}</li><li className="flex items-center gap-1.5"><MapPin aria-hidden className="h-4 w-4 text-ocean" />{c.location}</li><li className="flex items-center gap-1.5"><Clock aria-hidden className="h-4 w-4 text-ocean" />Apply by {formatDate(c.deadline)}</li></ul>
                </div>
                <Link to={`/careers/${c.slug}`} className="btn btn-primary btn-sm shrink-0">View and apply</Link>
              </li>
            ))}
          </ul>
          {list.length === 0 && <p className="mt-10 text-charcoal/70">No roles of this type right now.</p>}
        </div>
      </section>
      <section className="section bg-grad-wash">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Why join us" title="A place to do meaningful work" />
            <ul className="mt-8 space-y-5">{WHY.map((w) => <li key={w.title}><h3 className="text-lg font-bold">{w.title}</h3><p className="text-charcoal/75">{w.text}</p></li>)}</ul>
          </div>
          <Photo image={IMAGES.involve.careers} ratio="aspect-[4/3]" className="rounded-[2.5rem] shadow-lift" />
        </div>
      </section>
      <CtaBand title="Do not see the right role?" text="Send us a general application and we will keep your details in mind." actions={<Link to="/careers/general-application" className="btn btn-light btn-lg">Send a general application</Link>} />
    </>
  )
}
