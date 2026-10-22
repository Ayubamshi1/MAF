import { AlertTriangle, Check, Info, Phone, Siren } from 'lucide-react'
import type { Block } from '@/content/pageContent'
import { ALLOCATION } from '@/content/stats'
import { formatDate } from '@/lib/format'
import { SITE, phoneLinks } from '@/config/site'
import StepList from './StepList'
import CourseList from './CourseList'

function Head({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="mb-7 max-w-2xl">
      <h3 className="text-2xl font-extrabold sm:text-3xl">{title}</h3>
      {intro && <p className="mt-2 text-charcoal/75">{intro}</p>}
    </div>
  )
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case 'list':
      return (
        <div>
          <Head title={block.title} intro={block.intro} />
          <ul className="grid gap-3 rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8">
            {block.items.map((it) => (
              <li key={it} className="flex gap-3"><span aria-hidden className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-leaf-dark"><Check className="h-4 w-4" /></span><span>{it}</span></li>
            ))}
          </ul>
        </div>
      )
    case 'cards':
      return (
        <div>
          <Head title={block.title} intro={block.intro} />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {block.items.map((it) => (
              <li key={it.title} className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-bold text-navy">{it.title}</h4>
                <p className="mt-2 text-[0.95rem] text-charcoal/75">{it.text}</p>
              </li>
            ))}
          </ul>
        </div>
      )
    case 'steps':
      return (
        <div>
          <Head title={block.title} intro={block.intro} />
          <StepList items={block.items} />
        </div>
      )
    case 'table':
      return (
        <div>
          <Head title={block.title} intro={block.intro} />
          <div className="overflow-x-auto rounded-[2rem] border border-navy/10 bg-white shadow-sm">
            <table className="w-full min-w-[34rem] text-left text-[0.95rem]">
              <caption className="sr-only">{block.title}</caption>
              <thead className="bg-mist text-navy">
                <tr>{block.columns.map((c) => <th key={c} scope="col" className="px-5 py-4 font-bold">{c}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-navy/10">
                {block.rows.map((r) => (
                  <tr key={r.join('|')}>{r.map((cell, i) => (i === 0 ? <th key={i} scope="row" className="px-5 py-4 font-semibold text-navy">{cell}</th> : <td key={i} className="px-5 py-4 text-charcoal/80">{cell}</td>))}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    case 'dates':
      return (
        <div>
          <Head title={block.title} intro={block.intro} />
          <ul className="grid gap-4 sm:grid-cols-2">
            {block.items.map((d) => (
              <li key={d.label} className="rounded-3xl border border-navy/10 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-leaf-dark">{d.label}</p>
                <p className="mt-1 font-heading text-xl font-extrabold text-navy"><time dateTime={d.date}>{formatDate(d.date)}</time></p>
                {d.note && <p className="mt-1 text-sm text-charcoal/70">{d.note}</p>}
              </li>
            ))}
          </ul>
        </div>
      )
    case 'notice': {
      const warn = block.tone === 'warning'
      const Icon = warn ? AlertTriangle : Info
      return (
        <div role="note" className={`flex gap-4 rounded-3xl border p-6 ${warn ? 'border-amber-300 bg-amber-50 text-amber-950' : 'border-sky/40 bg-sky-100/50 text-navy'}`}>
          <Icon aria-hidden className="mt-0.5 h-6 w-6 shrink-0" />
          <div><p className="font-bold">{block.title}</p><p className="mt-1 text-[0.95rem]">{block.text}</p></div>
        </div>
      )
    }
    case 'allocation':
      return (
        <div>
          <Head title={block.title} intro={block.intro} />
          <ul className="space-y-5 rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
            {ALLOCATION.map((a) => (
              <li key={a.label}>
                <div className="mb-1.5 flex justify-between font-semibold text-navy"><span>{a.label}</span><span>{a.value}%</span></div>
                <div className="h-3.5 overflow-hidden rounded-full bg-mist" role="img" aria-label={`${a.label}: ${a.value} percent`}><div className={`h-full rounded-full ${a.color}`} style={{ width: `${a.value}%` }} /></div>
              </li>
            ))}
          </ul>
        </div>
      )
    case 'courses':
      return (
        <div>
          <Head title={block.title} intro={block.intro} />
          <CourseList />
        </div>
      )
    case 'contacts':
      return (
        <div>
          <Head title={block.title} intro={block.intro} />
          <ul className="grid gap-4 sm:grid-cols-3">
            <li className="rounded-3xl bg-red-50 p-5 ring-1 ring-red-200">
              <Siren aria-hidden className="h-6 w-6 text-red-700" />
              <p className="mt-2 text-sm font-semibold text-red-900">Emergency services</p>
              <a href={`tel:${SITE.emergencyNumber}`} className="font-heading text-2xl font-extrabold text-red-800">{SITE.emergencyNumber}</a>
            </li>
            {phoneLinks().map((p) => (
              <li key={p.tel} className="rounded-3xl bg-ocean-50 p-5 ring-1 ring-ocean/15">
                <Phone aria-hidden className="h-6 w-6 text-ocean" />
                <p className="mt-2 text-sm font-semibold text-navy">Foundation line</p>
                <a href={p.href} className="font-heading text-2xl font-extrabold text-ocean">{p.display}</a>
              </li>
            ))}
          </ul>
        </div>
      )
  }
}

export default function InfoBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-16">
      {blocks.map((b, i) => <BlockView key={`${b.kind}-${i}`} block={b} />)}
    </div>
  )
}
