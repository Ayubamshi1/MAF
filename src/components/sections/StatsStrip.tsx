import { IMPACT_STATS } from '@/content/stats'
import Counter from '@/components/ui/Counter'

export default function StatsStrip() {
  return (
    <section aria-label="Our impact in numbers" className="relative z-10 -mt-24 sm:-mt-28">
      <div className="container-x">
        <dl className="glass-light grid grid-cols-2 gap-x-4 gap-y-8 rounded-[2rem] p-6 sm:p-8 lg:grid-cols-4 lg:p-10">
          {IMPACT_STATS.map((s) => (
            <div key={s.label} className="lg:border-l lg:border-navy/10 lg:pl-8 lg:first:border-0 lg:first:pl-0">
              <dd className="font-heading text-4xl font-extrabold text-ocean sm:text-5xl"><Counter value={s.value} suffix={s.suffix} /></dd>
              <dt className="mt-1 text-base font-bold text-navy">{s.label}</dt>
              <dd className="mt-0.5 hidden text-sm text-charcoal/65 sm:block">{s.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
