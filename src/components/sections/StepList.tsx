import type { TitleText } from '@/content/pageContent'

/** Numbered vertical steps. Numbers are used because the order matters. */
export default function StepList({ items }: { items: TitleText[] }) {
  return (
    <ol className="relative space-y-6">
      {items.map((s, i) => (
        <li key={s.title} className="relative flex gap-5">
          {i < items.length - 1 && <span aria-hidden className="absolute left-[1.4rem] top-14 h-[calc(100%-2rem)] w-0.5 bg-gradient-to-b from-ocean/40 to-transparent" />}
          <span aria-hidden className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-grad-ocean font-heading text-lg font-extrabold text-white shadow-glow">{i + 1}</span>
          <div className="pb-2 pt-1.5">
            <h4 className="text-lg font-bold text-navy">{s.title}</h4>
            <p className="mt-1 text-charcoal/75">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
