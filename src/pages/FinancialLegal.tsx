import { Link } from 'react-router-dom'
import { AlertTriangle, FileCheck2, Landmark, ScrollText, Shield, Wallet } from 'lucide-react'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import WhatsAppForm from '@/components/forms/WhatsAppForm'
import SectionHeading from '@/components/ui/SectionHeading'
import { SITE } from '@/config/site'

const DOCS = [
  { title: 'Registration details', text: 'Certificate and registration information for the foundation.', icon: FileCheck2 },
  { title: 'Governance documents', text: 'Constitution, board structure and terms of reference.', icon: ScrollText },
  { title: 'Annual reports', text: 'Yearly reports on results and finances.', icon: Wallet, to: '/impact/reports' },
  { title: 'Audited financial statements', text: 'Independently audited accounts.', icon: Landmark },
  { title: 'Policies', text: 'Safeguarding, privacy, anti-fraud and finance policies.', icon: Shield },
] as const

const POLICIES = [
  { title: 'Safeguarding', text: 'Protects children and vulnerable people. All staff and volunteers are screened, trained and sign a code of conduct.' },
  { title: 'Anti-fraud and anti-corruption', text: 'Sets clear rules on gifts, conflicts of interest, procurement and reporting concerns.' },
  { title: 'Data protection', text: 'Explains how personal information is collected, used and protected.' },
  { title: 'Complaints and feedback', text: 'Gives communities, donors and partners a clear way to raise concerns and get a response.' },
]

export default function FinancialLegal() {
  return (
    <>
      <Seo title="Financial and legal information" description="Governance, policies, financial statements and official bank details of Margaret Amshi Foundation." />
      <PageHero title="Financial and legal information" description="Documents, policies and official account details, open to donors, partners and the public." />

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Documents" title="Request our documents" description="These documents are available on request. Send a request and we will respond." />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DOCS.map((d) => (
              <li key={d.title} className="flex flex-col rounded-3xl border border-navy/10 bg-white p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-50 text-ocean"><d.icon aria-hidden className="h-6 w-6" /></span>
                <h3 className="mt-4 text-lg font-bold">{d.title}</h3>
                <p className="mt-1 flex-1 text-[0.95rem] text-charcoal/75">{d.text}</p>
                <p className="mt-4 text-sm font-semibold text-leaf-dark">Available on request</p>
                <Link to={{ hash: '#request' }} className="btn btn-outline btn-sm mt-3 self-start">Request this document</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-grad-wash">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="overflow-hidden rounded-[2rem] bg-grad-deep p-8 text-white shadow-glow sm:p-10">
            <p className="flex items-center gap-2 text-sm font-semibold text-sky-300"><Landmark aria-hidden className="h-5 w-5" /> Official bank account</p>
            <dl className="mt-6 space-y-4">
              <div><dt className="text-sm text-white/65">Bank</dt><dd className="text-lg font-bold">{SITE.bank.bankName}</dd></div>
              <div><dt className="text-sm text-white/65">Account name</dt><dd className="text-lg font-bold">{SITE.bank.accountName}</dd></div>
              <div><dt className="text-sm text-white/65">Account number ({SITE.bank.currency})</dt><dd className="font-heading text-3xl font-extrabold tracking-wider">{SITE.bank.accountNumber}</dd></div>
            </dl>
            <Link to="/donate?tab=bank" className="btn btn-light btn-sm mt-6">Give by bank transfer</Link>
          </div>
          <div className="flex gap-4 rounded-[2rem] border border-amber-300 bg-amber-50 p-8 text-amber-950">
            <AlertTriangle aria-hidden className="mt-1 h-7 w-7 shrink-0" />
            <div><h2 className="text-xl font-extrabold !text-amber-950">Verify before you give</h2><p className="mt-2">Always confirm our account details on this website or by calling our official numbers before sending money. We will never ask you to send money to a personal account.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Policies" title="How we protect people and funds" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {POLICIES.map((p) => <li key={p.title} className="rounded-3xl border border-navy/10 bg-white p-7 shadow-sm"><h3 className="text-xl font-extrabold">{p.title}</h3><p className="mt-2 text-charcoal/75">{p.text}</p></li>)}
          </ul>
          <p className="mt-8 text-sm text-charcoal/70">Read our <Link to="/privacy" className="link-inline">Privacy Policy</Link> and <Link to="/terms" className="link-inline">Terms of Use</Link>.</p>
        </div>
      </section>

      <section id="request" className="section scroll-mt-20 bg-mist/70">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading title="Request a document" description="Choose the document and tell us how you plan to use it." />
          <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-lift sm:p-10"><WhatsAppForm formKey="document-request" heading={null} /></div>
        </div>
      </section>
      <div className="pt-20 sm:pt-28"><CtaBand title="Transparency is part of who we are" text="Read how contributions are used, or get in touch with a question." /></div>
    </>
  )
}
