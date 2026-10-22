import { Link } from 'react-router-dom'
import { PROGRAM_GROUPS } from '@/content/programs'
import { programImage } from '@/content/images'
import { getIcon } from '@/lib/icons'
import Photo from '@/components/ui/Photo'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const BADGE = ['bg-ocean', 'bg-leaf-dark', 'bg-navy']

export default function ProgramsOverview() {
  return (
    <section className="section bg-grad-wash">
      <div className="container-x">
        <Reveal>
          <SectionHeading eyebrow="Programs and services" title="Support that meets people where they are" description="Fourteen programs across giving, care and learning, each shaped with the communities it serves." />
        </Reveal>

        <div className="mt-14 space-y-16">
          {PROGRAM_GROUPS.map((g, gi) => (
            <div key={g.title}>
              <h3 className="mb-6 flex items-center gap-3 text-xl font-extrabold">
                <span aria-hidden className={`inline-block h-3 w-10 rounded-full ${BADGE[gi % 3]}`} />
                {g.title}
              </h3>
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {g.programs.map((p) => {
                  const Icon = getIcon(p.icon)
                  return (
                    <li key={p.slug}>
                      <Link to={p.to} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-ocean/30 hover:shadow-lift">
                        <Photo image={programImage(p.slug)} ratio="aspect-[16/10]" imgClassName="transition duration-500 group-hover:scale-105">
                          <span className={`absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-soft ${BADGE[gi % 3]}`}><Icon aria-hidden className="h-5 w-5" /></span>
                        </Photo>
                        <span className="flex flex-1 flex-col p-6">
                          <span className="text-lg font-bold text-navy">{p.title}</span>
                          <span className="mt-1.5 text-[0.95rem] text-charcoal/70">{p.summary}</span>
                          <span className="mt-4 text-sm font-semibold text-ocean underline decoration-sky decoration-2 underline-offset-4 group-hover:text-navy">Learn more</span>
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center"><Button to="/programs" variant="outline">See all programs</Button></div>
      </div>
    </section>
  )
}
