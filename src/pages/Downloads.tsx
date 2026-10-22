import { Download, FileText } from 'lucide-react'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import SectionHeading from '@/components/ui/SectionHeading'
import { DOWNLOADS } from '@/content/downloads'
import { trackEvent } from '@/lib/analytics'

export default function Downloads() {
  const cats = Array.from(new Set(DOWNLOADS.map((d) => d.category)))
  return (
    <>
      <Seo title="Downloads" description="Download application, registration and referral forms from Margaret Amshi Foundation." />
      <PageHero title="Downloads" description="Forms you can print or fill in and send to us." />
      <section className="section">
        <div className="container-x space-y-16">
          <p className="max-w-2xl rounded-2xl bg-mist p-5 text-charcoal/80">Prefer to apply online? Every program page has a form that opens WhatsApp with your answers filled in. These PDFs are for people who prefer paper or need to attach a document.</p>
          {cats.map((c) => (
            <div key={c}>
              <SectionHeading as="h2" title={c} />
              <ul className="mt-8 grid gap-5 md:grid-cols-2">
                {DOWNLOADS.filter((d) => d.category === c).map((d) => (
                  <li key={d.file} className="flex items-center gap-5 rounded-3xl border border-navy/10 bg-white p-5 shadow-sm">
                    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ocean-50 text-ocean"><FileText aria-hidden className="h-7 w-7" /></span>
                    <div className="min-w-0 flex-1"><h3 className="text-lg font-bold">{d.title}</h3><p className="text-sm text-charcoal/70">{d.description}</p><p className="mt-1 text-xs text-charcoal/55">PDF · {d.size}</p></div>
                    <a href={d.file} download onClick={() => trackEvent('form_download', { file: d.title })} className="btn btn-outline btn-sm shrink-0" aria-label={`Download ${d.title}`}><Download aria-hidden className="h-4 w-4" /> Download</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <CtaBand title="Need help with a form?" text="Our team can walk you through it by phone or WhatsApp." />
    </>
  )
}
