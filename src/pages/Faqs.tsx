import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import Accordion from '@/components/ui/Accordion'
import FilterChips from '@/components/ui/FilterChips'
import { FAQS, FAQ_CATEGORIES } from '@/content/faqs'
import JsonLd from '@/components/common/JsonLd'
import { faqSchema } from '@/lib/schema'

export default function Faqs() {
  const [cat, setCat] = useState('All')
  const [params] = useSearchParams()
  const [q, setQ] = useState(params.get('q') ?? '')
  const list = useMemo(() => {
    const s = q.trim().toLowerCase()
    return FAQS.filter((f) => (cat === 'All' || f.category === cat) && (!s || `${f.q} ${f.a}`.toLowerCase().includes(s)))
  }, [cat, q])
  return (
    <>
      <Seo title="FAQs" description="Answers to common questions about giving, programs, volunteering, partnerships and privacy at Margaret Amshi Foundation." />
      <JsonLd data={faqSchema(FAQS)} />
      <PageHero title="Frequently asked questions" description="Quick answers about giving, programs, volunteering and more." />
      <section className="section">
        <div className="container-x max-w-4xl">
          <div className="relative">
            <label htmlFor="faq-search" className="sr-only">Search questions</label>
            <Search aria-hidden className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-ocean" />
            <input id="faq-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search questions" className="field !rounded-full !py-4 !pl-14" />
          </div>
          <div className="mt-6"><FilterChips label="Filter by category" options={['All', ...FAQ_CATEGORIES]} value={cat} onChange={setCat} /></div>
          <p className="mt-6 text-sm text-charcoal/70" role="status" aria-live="polite">{list.length} {list.length === 1 ? 'question' : 'questions'} found</p>
          <div className="mt-4">
            {list.length ? <Accordion key={`${cat}-${q}`} items={list} defaultOpen={q ? 0 : null} /> : <p className="rounded-3xl bg-mist p-8 text-charcoal/80">We could not find a match. Try different words, or call or message us and we will help.</p>}
          </div>
        </div>
      </section>
      <CtaBand title="Still have a question?" text="Call us, message us on WhatsApp or send a message." />
    </>
  )
}
