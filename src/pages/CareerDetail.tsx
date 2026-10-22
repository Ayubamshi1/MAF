import { Link, useParams } from 'react-router-dom'
import { Check, Clock, MapPin, Briefcase } from 'lucide-react'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import WhatsAppForm from '@/components/forms/WhatsAppForm'
import { CAREERS } from '@/content/careers'
import { IMAGES } from '@/content/images'
import { formatDate } from '@/lib/format'
import NotFound from './NotFound'

const GENERAL = { title: 'General application', department: 'Any team', location: 'Nigeria', type: 'Full-time', deadline: '', summary: 'Tell us about your skills and the kind of role you are looking for.', responsibilities: [] as string[], requirements: [] as string[], benefits: [] as string[] }

function List({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null
  return (
    <div>
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <ul className="mt-4 space-y-3">{items.map((i) => <li key={i} className="flex gap-3"><span aria-hidden className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-leaf-dark"><Check className="h-4 w-4" /></span><span>{i}</span></li>)}</ul>
    </div>
  )
}

export default function CareerDetail() {
  const { slug = '' } = useParams()
  const job = slug === 'general-application' ? GENERAL : CAREERS.find((c) => c.slug === slug)
  if (!job) return <NotFound />
  return (
    <>
      <Seo title={job.title} description={job.summary} />
      <PageHero image={IMAGES.involve.careers} title={job.title} description={job.summary} trail={[{ label: 'Home', to: '/' }, { label: 'Careers', to: '/careers' }, { label: job.title }]} actions={<Link to={{ hash: '#apply' }} className="btn btn-light btn-lg">Apply now</Link>} />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          <div className="space-y-10">
            <List title="Responsibilities" items={job.responsibilities} />
            <List title="Requirements" items={job.requirements} />
            <List title="What we offer" items={job.benefits} />
            {!job.responsibilities.length && <p className="text-lg text-charcoal/80">Tell us about your experience, the type of role you want and when you could start. We will keep your application on file and contact you when a suitable role opens.</p>}
          </div>
          <aside className="h-fit rounded-[2rem] border border-navy/10 bg-white p-7 shadow-soft">
            <dl className="space-y-5">
              <div className="flex gap-3"><Briefcase aria-hidden className="mt-0.5 h-5 w-5 text-ocean" /><div><dt className="text-sm text-charcoal/65">Team and type</dt><dd className="font-bold text-navy">{job.department} · {job.type}</dd></div></div>
              <div className="flex gap-3"><MapPin aria-hidden className="mt-0.5 h-5 w-5 text-ocean" /><div><dt className="text-sm text-charcoal/65">Location</dt><dd className="font-bold text-navy">{job.location}</dd></div></div>
              {job.deadline && <div className="flex gap-3"><Clock aria-hidden className="mt-0.5 h-5 w-5 text-ocean" /><div><dt className="text-sm text-charcoal/65">Apply by</dt><dd className="font-bold text-navy"><time dateTime={job.deadline}>{formatDate(job.deadline)}</time></dd></div></div>}
            </dl>
          </aside>
        </div>
      </section>
      <section id="apply" className="section scroll-mt-20 bg-mist/70">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div><h2 className="text-3xl font-extrabold sm:text-4xl">Apply for this role</h2><p className="mt-4 text-lg text-charcoal/80">Complete the form. WhatsApp opens with your answers, and you can attach your CV in the same chat.</p></div>
          <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-lift sm:p-10"><WhatsAppForm formKey="career" defaults={{ position: job.title }} heading={null} /></div>
        </div>
      </section>
      <div className="pt-20 sm:pt-28"><CtaBand title="Not the right role?" text="See all open roles or learn more about the foundation." actions={<Link to="/careers" className="btn btn-light btn-lg">All open roles</Link>} /></div>
    </>
  )
}
