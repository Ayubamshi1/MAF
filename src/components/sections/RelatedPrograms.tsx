import { Link } from 'react-router-dom'
import { ALL_PROGRAMS } from '@/content/programs'
import { programImage } from '@/content/images'
import Photo from '@/components/ui/Photo'
import SectionHeading from '@/components/ui/SectionHeading'

export default function RelatedPrograms({ slugs, title = 'Related programs' }: { slugs: string[]; title?: string }) {
  const items = slugs.map((s) => ALL_PROGRAMS.find((p) => p.slug === s)).filter((x): x is NonNullable<typeof x> => Boolean(x))
  if (!items.length) return null
  return (
    <section className="section bg-mist/70">
      <div className="container-x">
        <SectionHeading title={title} />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <li key={p.slug}>
              <Link to={p.to} className="group block h-full overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
                <Photo image={programImage(p.slug)} ratio="aspect-[16/10]" imgClassName="transition duration-500 group-hover:scale-105" />
                <span className="block p-5"><span className="block text-lg font-bold text-navy">{p.title}</span><span className="mt-1 block text-sm text-charcoal/70">{p.summary}</span></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
