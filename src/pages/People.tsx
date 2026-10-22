import { Link } from 'react-router-dom'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import PersonCard from '@/components/sections/PersonCard'
import Button from '@/components/ui/Button'
import { PEOPLE_GROUPS, peopleIn, type PeopleGroup } from '@/content/people'

export default function People({ group }: { group: PeopleGroup }) {
  const meta = PEOPLE_GROUPS[group]
  const people = peopleIn(group)
  const cols = group === 'leadership' ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  return (
    <>
      <Seo title={meta.title} description={meta.description} />
      <PageHero title={meta.title} description={meta.intro} />
      <section className="section">
        <div className="container-x">
          <nav aria-label="People sections" className="mb-12 flex flex-wrap gap-2">
            {(Object.keys(PEOPLE_GROUPS) as PeopleGroup[]).map((g) => (
              <Link key={g} to={PEOPLE_GROUPS[g].to} aria-current={g === group ? 'page' : undefined} className={`inline-flex min-h-[44px] items-center rounded-full border px-5 text-sm font-semibold transition ${g === group ? 'border-ocean bg-ocean text-white shadow-soft' : 'border-navy/15 bg-white text-navy hover:border-ocean hover:bg-ocean-50'}`}>{PEOPLE_GROUPS[g].title}</Link>
            ))}
          </nav>
          <ul className={`grid gap-6 ${cols}`}>
            {people.map((p) => <li key={p.slug}><PersonCard person={p} large={group === 'leadership'} /></li>)}
          </ul>
          {group === 'volunteers' && (
            <div className="mt-14 flex flex-wrap items-center justify-between gap-5 rounded-[2rem] bg-gradient-to-br from-ocean-50 to-leaf-100/60 p-8 ring-1 ring-navy/5 sm:p-10">
              <div><h2 className="text-2xl font-extrabold">Join our volunteers</h2><p className="mt-1 text-charcoal/75">Give a few hours a week or a few hours a year. Training is provided.</p></div>
              <Button to="/get-involved/volunteer" variant="primary">Apply to volunteer</Button>
            </div>
          )}
        </div>
      </section>
      <CtaBand title="Work with a team you can trust" text="Meet us, ask us anything, or join us." />
    </>
  )
}
