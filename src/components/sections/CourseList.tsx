import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, GraduationCap, MapPin, Wallet } from 'lucide-react'
import { COURSES, type Course } from '@/content/courses'
import { courseImage } from '@/content/images'
import Photo from '@/components/ui/Photo'
import JsonLd from '@/components/common/JsonLd'
import { courseSchema } from '@/lib/schema'

const CATEGORIES = ['All', 'Digital skills', 'Business', 'Trades', 'Personal development'] as const

export default function CourseList() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>('All')
  const list: Course[] = cat === 'All' ? COURSES : COURSES.filter((c) => c.category === cat)
  return (
    <div>
      <JsonLd data={COURSES.map(courseSchema)} />
      <div role="group" aria-label="Filter courses by category" className="mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)} className={`min-h-[44px] rounded-full border px-5 text-sm font-semibold transition ${cat === c ? 'border-ocean bg-ocean text-white shadow-soft' : 'border-navy/15 bg-white text-navy hover:border-ocean hover:bg-ocean-50'}`}>{c}</button>
        ))}
      </div>
      <p className="sr-only" role="status" aria-live="polite">{list.length} courses shown</p>
      <ul className="grid gap-6 md:grid-cols-2">
        {list.map((c) => (
          <li key={c.slug} className="group flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition hover:shadow-lift">
            <Photo image={courseImage(c.slug)} ratio="aspect-[16/9]" imgClassName="transition duration-500 group-hover:scale-105">
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-navy backdrop-blur">{c.category}</span>
            </Photo>
            <div className="flex flex-1 flex-col p-6">
              <h4 className="text-xl font-extrabold">{c.title}</h4>
              <p className="mt-2 text-[0.95rem] text-charcoal/75">{c.summary}</p>
              <dl className="mt-5 space-y-2.5 text-sm">
                <div className="flex gap-2.5"><Clock aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-ocean" /><dt className="sr-only">Duration</dt><dd>{c.duration}</dd></div>
                <div className="flex gap-2.5"><Calendar aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-ocean" /><dt className="sr-only">Schedule</dt><dd>{c.schedule}</dd></div>
                <div className="flex gap-2.5"><MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-ocean" /><dt className="sr-only">Mode</dt><dd>{c.mode}</dd></div>
                <div className="flex gap-2.5"><GraduationCap aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-ocean" /><dt className="sr-only">Eligibility</dt><dd>{c.eligibility}</dd></div>
                <div className="flex gap-2.5"><Wallet aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-ocean" /><dt className="sr-only">Fee</dt><dd className="font-semibold text-navy">{c.fee}</dd></div>
              </dl>
              <div className="mt-6 pt-1">
                <Link to={{ search: `?course=${c.slug}`, hash: '#apply' }} className="btn btn-primary btn-sm">Register for this course</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
