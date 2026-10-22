import { Link } from 'react-router-dom'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import { ALLOCATION } from '@/content/stats'
import { FINANCE_YEARS, FINANCIAL_NOTE, INCOME_SOURCES_2025, SPEND_BY_PROGRAM_2025 } from '@/content/financials'
import { formatNaira } from '@/lib/format'

const M = (n: number) => `₦${(n / 1_000_000).toFixed(1)}M`

export default function FinancialSummaries() {
  const max = Math.max(...FINANCE_YEARS.map((y) => Math.max(y.income, y.expenditure)))
  const latest = FINANCE_YEARS[FINANCE_YEARS.length - 1]
  return (
    <>
      <Seo title="Financial summaries" description="How Margaret Amshi Foundation receives and uses funds: income, spending and program allocation." />
      <PageHero title="Financial summaries" description="How funds are received and how they are used." />

      <section className="section">
        <div className="container-x">
          <dl className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-3xl bg-grad-ocean p-7 text-white shadow-glow"><dt className="text-sm font-semibold text-sky-100">Income, {latest.year}</dt><dd className="mt-1 font-heading text-4xl font-extrabold">{formatNaira(latest.income)}</dd></div>
            <div className="rounded-3xl border border-navy/10 bg-white p-7 shadow-sm"><dt className="text-sm font-semibold text-leaf-dark">Expenditure, {latest.year}</dt><dd className="mt-1 font-heading text-4xl font-extrabold text-navy">{formatNaira(latest.expenditure)}</dd></div>
            <div className="rounded-3xl border border-navy/10 bg-white p-7 shadow-sm"><dt className="text-sm font-semibold text-leaf-dark">Spent on programs</dt><dd className="mt-1 font-heading text-4xl font-extrabold text-navy">{ALLOCATION[0].value}%</dd></div>
          </dl>

          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionHeading as="h2" title="Income and expenditure" />
              <figure className="mt-8 rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
                <div role="img" aria-label={`Income and expenditure by year: ${FINANCE_YEARS.map((y) => `${y.year} income ${M(y.income)}, expenditure ${M(y.expenditure)}`).join('; ')}`} className="flex h-64 items-end justify-around gap-4">
                  {FINANCE_YEARS.map((y) => (
                    <div key={y.year} className="flex h-full flex-1 flex-col justify-end">
                      <div className="flex flex-1 items-end justify-center gap-2">
                        <div className="w-full max-w-[3.5rem] rounded-t-xl bg-grad-ocean" style={{ height: `${(y.income / max) * 100}%` }} />
                        <div className="w-full max-w-[3.5rem] rounded-t-xl bg-leaf" style={{ height: `${(y.expenditure / max) * 100}%` }} />
                      </div>
                      <p className="mt-3 text-center text-sm font-bold text-navy">{y.year}</p>
                    </div>
                  ))}
                </div>
                <figcaption className="mt-4 flex flex-wrap gap-5 text-sm text-charcoal/75"><span className="inline-flex items-center gap-2"><span aria-hidden className="h-3 w-3 rounded bg-ocean" /> Income</span><span className="inline-flex items-center gap-2"><span aria-hidden className="h-3 w-3 rounded bg-leaf" /> Expenditure</span></figcaption>
              </figure>
              <div className="mt-6 overflow-x-auto rounded-3xl border border-navy/10 bg-white">
                <table className="w-full min-w-[22rem] text-left text-[0.95rem]">
                  <caption className="sr-only">Income and expenditure by year</caption>
                  <thead className="bg-mist text-navy"><tr><th scope="col" className="px-4 py-3">Year</th><th scope="col" className="px-4 py-3">Income</th><th scope="col" className="px-4 py-3">Expenditure</th></tr></thead>
                  <tbody className="divide-y divide-navy/10">{FINANCE_YEARS.map((y) => <tr key={y.year}><th scope="row" className="px-4 py-3 font-semibold">{y.year}</th><td className="px-4 py-3">{formatNaira(y.income)}</td><td className="px-4 py-3">{formatNaira(y.expenditure)}</td></tr>)}</tbody>
                </table>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <SectionHeading as="h2" title={`Where ${latest.year} income came from`} />
                <div className="mt-8 flex h-5 overflow-hidden rounded-full bg-mist" role="img" aria-label={INCOME_SOURCES_2025.map((s) => `${s.label} ${s.pct} percent`).join(', ')}>
                  {INCOME_SOURCES_2025.map((s) => <div key={s.label} className={s.color} style={{ width: `${s.pct}%` }} />)}
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {INCOME_SOURCES_2025.map((s) => <li key={s.label} className="flex items-center gap-3"><span aria-hidden className={`h-3.5 w-3.5 rounded ${s.color}`} /><span className="flex-1">{s.label}</span><strong className="text-navy">{s.pct}%</strong></li>)}
                </ul>
              </div>
              <div>
                <SectionHeading as="h2" title="How funds are allocated" />
                <ul className="mt-6 space-y-4">
                  {ALLOCATION.map((a) => (
                    <li key={a.label}><div className="mb-1.5 flex justify-between font-semibold text-navy"><span>{a.label}</span><span>{a.value}%</span></div><div className="h-3 overflow-hidden rounded-full bg-mist" role="img" aria-label={`${a.label}: ${a.value} percent`}><div className={`h-full rounded-full ${a.color}`} style={{ width: `${a.value}%` }} /></div></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <SectionHeading as="h2" title="Program spending by area" description="Share of program spending in the latest year." />
            <ul className="mt-8 grid gap-x-12 gap-y-4 md:grid-cols-2">
              {SPEND_BY_PROGRAM_2025.map((p) => (
                <li key={p.label}><div className="mb-1.5 flex justify-between font-semibold text-navy"><span>{p.label}</span><span>{p.pct}%</span></div><div className="h-3 overflow-hidden rounded-full bg-mist" role="img" aria-label={`${p.label}: ${p.pct} percent`}><div className="h-full rounded-full bg-grad-ocean" style={{ width: `${p.pct * 3}%` }} /></div></li>
              ))}
            </ul>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-5 rounded-[2rem] bg-mist p-7 sm:p-9">
            <p className="max-w-2xl text-charcoal/80">{FINANCIAL_NOTE}</p>
            <Button to="/financial-and-legal" variant="primary">Request financial statements</Button>
          </div>
          <p className="mt-6 text-sm text-charcoal/65">See also <Link to="/impact/transparency" className="link-inline">how donations are used</Link> and our <Link to="/impact/reports" className="link-inline">annual reports</Link>.</p>
        </div>
      </section>
      <CtaBand title="Give with confidence" text="We report openly on what we receive and what we deliver." />
    </>
  )
}
