import { Link } from 'react-router-dom'
import { Download, FileText } from 'lucide-react'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import WhatsAppForm from '@/components/forms/WhatsAppForm'
import Photo from '@/components/ui/Photo'
import SectionHeading from '@/components/ui/SectionHeading'
import { REPORTS } from '@/content/reports'
import { reportImage } from '@/content/images'
import { formatDate } from '@/lib/format'

export default function Reports() {
  return (
    <>
      <Seo title="Annual reports" description="Read the annual reports and reviews of Margaret Amshi Foundation: results, finances and lessons learned." />
      <PageHero title="Annual reports" description="Results, finances and lessons, published every year." />
      <section className="section">
        <div className="container-x">
          <ul className="grid gap-8 md:grid-cols-2">
            {REPORTS.map((r) => (
              <li key={r.slug} className="grid overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-sm sm:grid-cols-[0.8fr_1.2fr]">
                <Photo image={reportImage(r.slug)} ratio="aspect-[4/5] sm:aspect-auto" className="min-h-[14rem]"><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-extrabold text-navy">{r.year}</span></Photo>
                <div className="flex flex-col p-6 sm:p-7">
                  <h2 className="text-2xl font-extrabold">{r.title}</h2>
                  <p className="mt-1 text-sm text-charcoal/65">Published <time dateTime={r.published}>{formatDate(r.published)}</time> · {r.pages} pages</p>
                  <p className="mt-3 text-charcoal/80">{r.summary}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-charcoal/80">{r.highlights.map((h) => <li key={h} className="flex gap-2"><FileText aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-ocean" />{h}</li>)}</ul>
                  <div className="mt-auto pt-6">
                    {r.file ? <a href={r.file} download className="btn btn-primary btn-sm"><Download aria-hidden className="h-4 w-4" /> Download PDF</a> : <Link to={{ hash: '#request' }} className="btn btn-outline btn-sm">Request a copy</Link>}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="request" className="section scroll-mt-20 bg-mist/70">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading title="Request a report or document" description="Tell us which document you need and we will send it to you." />
          <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-lift sm:p-10"><WhatsAppForm formKey="document-request" heading={null} /></div>
        </div>
      </section>
      <div className="pt-20 sm:pt-28"><CtaBand title="See where your support goes" text="Explore our financial summaries and transparency commitments." /></div>
    </>
  )
}
