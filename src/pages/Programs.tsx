import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import Photo from '@/components/ui/Photo'
import Button from '@/components/ui/Button'
import { PROGRAM_GROUPS } from '@/content/programs'
import { programImage } from '@/content/images'
import { getIcon } from '@/lib/icons'
import { whatsappChatUrl } from '@/config/site'

const BADGE = ['bg-ocean', 'bg-leaf-dark', 'bg-navy']

export default function Programs() {
  const [filter, setFilter] = useState('All')
  const groups = PROGRAM_GROUPS.map((g, i) => ({ ...g, badge: BADGE[i % 3] })).filter((g) => filter === 'All' || g.title === filter)
  return (
    <>
      <Seo title="Programs and Services" description="Fourteen programs across giving, empowerment, care and learning: grants, scholarships, cooperative society, training, counselling and more." />
      <PageHero title="Programs and Services" description="Fourteen programs across giving, care and learning, shaped with the communities they serve." />

      <section className="section">
        <div className="container-x">
          <div role="group" aria-label="Filter programs" className="mb-12 flex flex-wrap gap-2">
            {['All', ...PROGRAM_GROUPS.map((g) => g.title)].map((t) => (
              <button key={t} type="button" aria-pressed={filter === t} onClick={() => setFilter(t)} className={`min-h-[44px] rounded-full border px-5 text-sm font-semibold transition ${filter === t ? 'border-ocean bg-ocean text-white shadow-soft' : 'border-navy/15 bg-white text-navy hover:border-ocean hover:bg-ocean-50'}`}>{t}</button>
            ))}
          </div>

          <div className="space-y-16">
            {groups.map((g) => (
              <div key={g.title}>
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-extrabold"><span aria-hidden className={`inline-block h-3 w-10 rounded-full ${g.badge}`} />{g.title}</h2>
                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {g.programs.map((p) => {
                    const Icon = getIcon(p.icon)
                    return (
                      <li key={p.slug}>
                        <Link to={p.to} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-ocean/30 hover:shadow-lift">
                          <Photo image={programImage(p.slug)} ratio="aspect-[16/10]" imgClassName="transition duration-500 group-hover:scale-105">
                            <span className={`absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-soft ${g.badge}`}><Icon aria-hidden className="h-5 w-5" /></span>
                          </Photo>
                          <span className="flex flex-1 flex-col p-6">
                            <span className="text-lg font-bold text-navy">{p.title}</span>
                            <span className="mt-1.5 text-[0.95rem] text-charcoal/70">{p.summary}</span>
                            <span className="mt-4 text-sm font-semibold text-ocean underline decoration-sky decoration-2 underline-offset-4 group-hover:text-navy">View details and apply</span>
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-5 rounded-[2rem] bg-gradient-to-br from-ocean-50 to-leaf-100/60 p-8 ring-1 ring-navy/5 sm:p-10">
            <div>
              <h2 className="text-2xl font-extrabold">Not sure where to start?</h2>
              <p className="mt-1 text-charcoal/75">Tell us your situation and we will point you to the right program.</p>
            </div>
            <Button href={whatsappChatUrl('Hello Margaret Amshi Foundation, I need help choosing a program.')} variant="primary"><MessageCircle aria-hidden className="h-5 w-5" /> Ask on WhatsApp</Button>
          </div>
        </div>
      </section>
      <CtaBand title="Help us reach more people" text="Your gift or volunteer time keeps these programs running." />
    </>
  )
}
