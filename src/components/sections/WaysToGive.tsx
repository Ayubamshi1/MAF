import { Link } from 'react-router-dom'
import { ALLOCATION } from '@/content/stats'
import { IMAGES } from '@/content/images'
import Photo from '@/components/ui/Photo'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'

const WAYS = [
  { key: 'online', title: 'Give online', text: 'Card, bank transfer or USSD through Paystack.', to: '/donate' },
  { key: 'bank', title: 'Bank transfer', text: 'Send directly to our Zenith Bank account.', to: '/donate?tab=bank' },
  { key: 'fundraise', title: 'Start a fundraiser', text: 'Rally friends and family around a cause.', to: '/get-involved/fundraise' },
  { key: 'partner', title: 'Partner with us', text: 'Corporate and institutional giving.', to: '/get-involved/partner' },
]

export default function WaysToGive() {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-grad-deep py-20 text-white sm:py-28">
      <div aria-hidden className="absolute -right-20 top-10 -z-10 h-80 w-80 rounded-full bg-sky/20 blur-3xl" />
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading tone="light" eyebrow="Your gift, put to work" title="Know where every naira goes" description="We publish how contributions are allocated and report results regularly, so you can see the difference you make." />
          <div className="mt-9 space-y-5">
            {ALLOCATION.map((a) => (
              <div key={a.label}>
                <div className="mb-1.5 flex items-baseline justify-between text-sm font-semibold"><span>{a.label}</span><span>{a.value}%</span></div>
                <div className="h-3 overflow-hidden rounded-full bg-white/15" role="img" aria-label={`${a.label}: ${a.value} percent`}>
                  <div className={`h-full rounded-full ${a.color}`} style={{ width: `${a.value}%` }} />
                </div>
              </div>
            ))}
          </div>
          <Link to="/impact/transparency" className="mt-8 inline-block font-semibold text-sky-300 underline decoration-2 underline-offset-4 hover:text-white">Read our transparency commitments</Link>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {WAYS.map((w) => (
              <li key={w.key}>
                <Link to={w.to} className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:bg-white/20">
                  <Photo image={IMAGES.ways[w.key]} ratio="aspect-[16/10]" imgClassName="transition duration-500 group-hover:scale-105" />
                  <span className="block p-5">
                    <span className="block text-lg font-bold">{w.title}</span>
                    <span className="mt-1 block text-sm text-white/80">{w.text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
