import { Clock, Mail, MessageCircle, Phone } from 'lucide-react'
import { SITE, phoneLinks, whatsappChatUrl } from '@/config/site'
import { trackEvent } from '@/lib/analytics'
import MapEmbed from '@/components/common/MapEmbed'
import SectionHeading from '@/components/ui/SectionHeading'

export default function ContactStrip() {
  const row = 'flex items-center gap-4 rounded-2xl border border-navy/10 bg-white p-4 transition hover:border-ocean/40 hover:shadow-soft'
  const bubble = 'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean'
  return (
    <section className="section">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Reach us" title="Talk to a real person" description="Call, message or visit. We usually reply the same day." />
          <ul className="mt-8 space-y-3">
            {phoneLinks().map((p) => (
              <li key={p.tel}><a href={p.href} onClick={() => trackEvent('phone_click')} className={row}><span className={bubble}><Phone aria-hidden className="h-5 w-5" /></span><span><span className="block text-sm text-charcoal/65">Call</span><span className="font-bold text-navy">{p.display}</span></span></a></li>
            ))}
            <li><a href={whatsappChatUrl('Hello Margaret Amshi Foundation,')} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('whatsapp_click', { location: 'contact_strip' })} className={row}><span className={bubble}><MessageCircle aria-hidden className="h-5 w-5" /></span><span><span className="block text-sm text-charcoal/65">WhatsApp</span><span className="font-bold text-navy">{SITE.whatsapp.display}</span></span></a></li>
            <li><a href={`mailto:${SITE.email}`} className={row}><span className={bubble}><Mail aria-hidden className="h-5 w-5" /></span><span className="min-w-0"><span className="block text-sm text-charcoal/65">Email</span><span className="block break-all font-bold text-navy">{SITE.email}</span></span></a></li>
            <li className={row}><span className={bubble}><Clock aria-hidden className="h-5 w-5" /></span><span><span className="block text-sm text-charcoal/65">Opening hours</span><span className="font-bold text-navy">Mon to Fri, 8:30 am to 5:00 pm</span></span></li>
          </ul>
        </div>
        <MapEmbed />
      </div>
    </section>
  )
}
