import { Link } from 'react-router-dom'
import { MessageCircle, Phone } from 'lucide-react'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import StepList from '@/components/sections/StepList'
import Button from '@/components/ui/Button'
import Photo from '@/components/ui/Photo'
import SectionHeading from '@/components/ui/SectionHeading'
import { ALLOCATION } from '@/content/stats'
import { IMAGES } from '@/content/images'
import { SITE, phoneLinks, whatsappChatUrl } from '@/config/site'

const COMMITMENTS = [
  { title: 'Every gift is recorded', text: 'Each donation is logged, reconciled with bank and Paystack records and acknowledged.' },
  { title: 'Funds go where you choose', text: 'Gifts directed to a program are used for that program or a close match, never for unrelated costs.' },
  { title: 'Costs are kept low', text: 'We publish how much goes to programs, operations and fundraising.' },
  { title: 'We tell the whole story', text: 'Our reports include what did not work and what we changed.' },
]

const CALENDAR = [
  ['Project updates', 'Quarterly', 'Impact and Accountability pages'],
  ['Financial summary', 'Every year', 'Financial summaries page'],
  ['Annual report', 'Every March', 'Annual reports page'],
  ['Independent audit', 'Every year', 'Available on request'],
]

export default function Transparency() {
  return (
    <>
      <Seo title="Donation transparency" description="How donations to Margaret Amshi Foundation are received, receipted, used and reported." />
      <PageHero image={IMAGES.transparency} title="Donation transparency" description="How contributions are received, receipted and used." />

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Our commitments" title="What you can expect from us" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {COMMITMENTS.map((c) => <li key={c.title} className="relative overflow-hidden rounded-3xl border border-navy/10 bg-white p-7 shadow-sm"><span aria-hidden className="absolute inset-y-0 left-0 w-1.5 bg-grad-ocean" /><h3 className="text-xl font-extrabold">{c.title}</h3><p className="mt-2 text-charcoal/75">{c.text}</p></li>)}
          </ul>
        </div>
      </section>

      <section className="section bg-grad-wash">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="From your gift to impact" title="How contributions are used" />
            <div className="mt-10"><StepList items={[{ title: 'You give', text: 'Online through Paystack or by bank transfer to our official account.' }, { title: 'We record and acknowledge', text: 'Your gift is logged and you receive a receipt or acknowledgement.' }, { title: 'We allocate', text: 'Funds are assigned to the program you chose.' }, { title: 'We deliver and report', text: 'Programs run, results are measured and we publish updates.' }]} /></div>
          </div>
          <div className="rounded-[2rem] bg-white p-7 shadow-lift sm:p-9">
            <h3 className="text-xl font-extrabold">Allocation of funds</h3>
            <ul className="mt-6 space-y-5">{ALLOCATION.map((a) => <li key={a.label}><div className="mb-1.5 flex justify-between font-semibold text-navy"><span>{a.label}</span><span>{a.value}%</span></div><div className="h-3 overflow-hidden rounded-full bg-mist" role="img" aria-label={`${a.label}: ${a.value} percent`}><div className={`h-full rounded-full ${a.color}`} style={{ width: `${a.value}%` }} /></div></li>)}</ul>
            <Link to="/impact/financial-summaries" className="link-inline mt-6 inline-block text-sm">See financial summaries</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading as="h2" title="Receipts and acknowledgements" />
            <div className="mt-6 space-y-5 text-charcoal/85">
              <p><strong className="text-navy">Online gifts:</strong> Paystack emails a payment receipt to the address you enter. Keep your payment reference.</p>
              <p><strong className="text-navy">Bank transfers:</strong> Send us your transfer details using the form on the Donate page and we will acknowledge your gift. You can also request a receipt there.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3"><Button to="/donate?tab=bank" variant="primary">Notify us of a transfer</Button><Button to="/donate" variant="outline">Donate online</Button></div>
          </div>
          <Photo image={IMAGES.donateSide} ratio="aspect-[16/10]" className="rounded-[2rem] shadow-soft" />
        </div>
      </section>

      <section className="section bg-mist/70 pt-16">
        <div className="container-x">
          <SectionHeading as="h2" title="What we publish, and when" />
          <div className="mt-8 overflow-x-auto rounded-[2rem] border border-navy/10 bg-white shadow-sm">
            <table className="w-full min-w-[32rem] text-left text-[0.95rem]">
              <caption className="sr-only">Reporting calendar</caption>
              <thead className="bg-mist text-navy"><tr><th scope="col" className="px-5 py-4">Report</th><th scope="col" className="px-5 py-4">How often</th><th scope="col" className="px-5 py-4">Where to find it</th></tr></thead>
              <tbody className="divide-y divide-navy/10">{CALENDAR.map((r) => <tr key={r[0]}><th scope="row" className="px-5 py-4 font-semibold">{r[0]}</th><td className="px-5 py-4">{r[1]}</td><td className="px-5 py-4">{r[2]}</td></tr>)}</tbody>
            </table>
          </div>

          <div className="mt-14 rounded-[2rem] bg-navy p-8 text-white sm:p-10">
            <h2 className="text-2xl font-extrabold !text-white">Raise a concern or complaint</h2>
            <p className="mt-2 max-w-2xl text-white/85">If you think something is wrong, or you were asked for money in our name, tell us. We investigate every concern and respond.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {phoneLinks().map((p) => <a key={p.tel} href={p.href} className="btn btn-light btn-sm"><Phone aria-hidden className="h-4 w-4" /> {p.display}</a>)}
              <a href={whatsappChatUrl('Hello Margaret Amshi Foundation, I would like to raise a concern.')} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm"><MessageCircle aria-hidden className="h-4 w-4" /> WhatsApp</a>
            </div>
            <p className="mt-5 text-sm text-white/70">Official account: {SITE.bank.bankName}, {SITE.bank.accountName}, {SITE.bank.accountNumber}. Always confirm before sending money.</p>
          </div>
        </div>
      </section>
      <div className="pt-20 sm:pt-28"><CtaBand title="Questions about how we use gifts?" text="Ask us anything. We are glad to explain." /></div>
    </>
  )
}
