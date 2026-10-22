import { useRef, useState, type KeyboardEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CreditCard, Landmark, Lock, ShieldCheck, Smartphone, Phone } from 'lucide-react'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import DonationForm from '@/components/donation/DonationForm'
import BankTransfer from '@/components/donation/BankTransfer'
import Accordion from '@/components/ui/Accordion'
import { ALLOCATION } from '@/content/stats'
import { FAQS } from '@/content/faqs'
import { SITE, phoneLinks } from '@/config/site'
import { Link } from 'react-router-dom'
import Photo from '@/components/ui/Photo'
import { IMAGES } from '@/content/images'

type Tab = 'online' | 'bank'
const TABS: { id: Tab; label: string; icon: typeof CreditCard }[] = [
  { id: 'online', label: 'Pay online', icon: CreditCard },
  { id: 'bank', label: 'Bank transfer', icon: Landmark },
]

export default function Donate() {
  const [params] = useSearchParams()
  const amount = (params.get('amount') ?? '').replace(/\D/g, '').slice(0, 9)
  const [tab, setTab] = useState<Tab>(params.get('tab') === 'bank' ? 'bank' : 'online')
  const refs = useRef<Record<Tab, HTMLButtonElement | null>>({ online: null, bank: null })

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const next: Tab = tab === 'online' ? 'bank' : 'online'
    setTab(next)
    refs.current[next]?.focus()
  }

  return (
    <>
      <Seo title="Donate" description="Give securely online with Paystack or by bank transfer to Margaret Amshi Foundation. Choose the program your gift supports." />
      <PageHero image={IMAGES.donateHero} title="Give with confidence" description="Your gift funds education, empowerment and care across our communities. Choose the way that suits you." />

      <section className="relative z-10 -mt-16 pb-20 sm:-mt-20 sm:pb-28">
        <div className="container-x grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-[2rem] border border-navy/10 bg-white p-5 shadow-lift sm:p-9">
            <div role="tablist" aria-label="Ways to give" className="mb-8 grid grid-cols-2 gap-2 rounded-full bg-mist p-1.5" onKeyDown={onKey}>
              {TABS.map((t) => (
                <button
                  key={t.id}
                  ref={(el) => { refs.current[t.id] = el }}
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={tab === t.id}
                  aria-controls={`panel-${t.id}`}
                  tabIndex={tab === t.id ? 0 : -1}
                  onClick={() => setTab(t.id)}
                  className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-4 text-sm font-bold transition sm:text-base ${tab === t.id ? 'bg-white text-ocean shadow-soft' : 'text-navy/65 hover:text-navy'}`}
                >
                  <t.icon aria-hidden className="h-5 w-5" /> {t.label}
                </button>
              ))}
            </div>
            <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} tabIndex={0} className="outline-none">
              {tab === 'online' ? <DonationForm initialAmount={amount} /> : <BankTransfer />}
            </div>
          </div>

          <aside className="space-y-6" aria-label="About giving">
            <figure className="overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-navy/10">
              <Photo image={IMAGES.donateSide} ratio="aspect-[16/10]" />
              <figcaption className="p-5 text-[0.95rem] font-semibold text-navy">Every gift reaches real families and communities.</figcaption>
            </figure>
            <div className="rounded-[2rem] bg-grad-deep p-7 text-white shadow-soft">
              <h2 className="flex items-center gap-2 text-xl font-extrabold !text-white"><ShieldCheck aria-hidden className="h-6 w-6 text-sky" /> Safe and secure</h2>
              <ul className="mt-4 space-y-3 text-[0.95rem] text-white/90">
                <li className="flex gap-3"><Lock aria-hidden className="mt-1 h-4 w-4 shrink-0 text-sky" /> Card details are handled by Paystack and never stored on this website.</li>
                <li className="flex gap-3"><Smartphone aria-hidden className="mt-1 h-4 w-4 shrink-0 text-sky" /> Pay by card, bank transfer or USSD.</li>
                <li className="flex gap-3"><Landmark aria-hidden className="mt-1 h-4 w-4 shrink-0 text-sky" /> Prefer your bank app? Use the bank transfer tab.</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-navy/10 bg-white p-7 shadow-soft">
              <h2 className="text-xl font-extrabold">How gifts are used</h2>
              <ul className="mt-5 space-y-4">
                {ALLOCATION.map((a) => (
                  <li key={a.label}>
                    <div className="mb-1 flex justify-between text-sm font-semibold text-navy"><span>{a.label}</span><span>{a.value}%</span></div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-mist" role="img" aria-label={`${a.label}: ${a.value} percent`}><div className={`h-full rounded-full ${a.color}`} style={{ width: `${a.value}%` }} /></div>
                  </li>
                ))}
              </ul>
              <Link to="/impact/transparency" className="link-inline mt-5 inline-block text-sm">Read our transparency commitments</Link>
            </div>

            <div className="rounded-[2rem] bg-mist p-7">
              <h2 className="text-xl font-extrabold">Need help giving?</h2>
              <p className="mt-2 text-[0.95rem] text-charcoal/75">Our team can walk you through it.</p>
              <ul className="mt-4 space-y-2">
                {phoneLinks().map((p) => (
                  <li key={p.tel}><a href={p.href} className="inline-flex items-center gap-2 font-bold text-ocean hover:text-navy"><Phone aria-hidden className="h-4 w-4" /> {p.display}</a></li>
                ))}
                <li className="text-sm text-charcoal/70">{SITE.email}</li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="container-x mt-16">
          <h2 className="mb-6 text-2xl font-extrabold sm:text-3xl">Questions about giving</h2>
          <Accordion items={FAQS.filter((f) => f.category === 'Giving')} />
        </div>
      </section>
    </>
  )
}
