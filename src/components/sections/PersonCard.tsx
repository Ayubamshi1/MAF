import type { Person } from '@/content/people'
import { personImage } from '@/content/images'
import Photo from '@/components/ui/Photo'

export default function PersonCard({ person, large = false }: { person: Person; large?: boolean }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
      <Photo image={personImage(person.slug)} ratio={large ? 'aspect-[4/5]' : 'aspect-[4/5]'} imgClassName="transition duration-500 group-hover:scale-105" />
      <div className="p-5">
        <h3 className={`font-extrabold text-navy ${large ? 'text-xl' : 'text-lg'}`}>{person.name}</h3>
        <p className="mt-0.5 text-sm font-semibold text-ocean">{person.role}</p>
        <p className="mt-3 text-[0.95rem] text-charcoal/75">{person.bio}</p>
      </div>
    </article>
  )
}
