import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import WhatsAppForm from '@/components/forms/WhatsAppForm'
import MapEmbed from '@/components/common/MapEmbed'
import SocialLinks from '@/components/common/SocialLinks'
import { SITE, phoneLinks, whatsappChatUrl } from '@/config/site'
import { trackEvent } from '@/lib/analytics'
import Photo from '@/components/ui/Photo'
import JsonLd from '@/components/common/JsonLd'
import { contactPageSchema, localBusinessSchema } from '@/lib/schema'
import { IMAGES } from '@/content/images'

export default function Contact() {
  const card = 'flex items-start gap-4 rounded-3xl border border-navy/10 bg-white p-5 shadow-sm transition hover:border-ocean/30 hover:shadow-soft'
  const bubble = 'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ocean-50 text-ocean'
  return (
    <>
      <Seo title="Contact us" description="Call, WhatsApp or email Margaret Amshi Foundation. We serve communities across Nigeria and reply the same day." />
      <JsonLd data={[localBusinessSchema(), contactPageSchema()]} />
      <PageHero image={IMAGES.contactHero} title="Contact us" description="Questions, partnerships, applications or feedback. We would love to hear from you." />

      <section className="relative z-10 -mt-16 pb-20 sm:-mt-20 sm:pb-28">
        <div className="container-x grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <Photo image={IMAGES.contactSide} ratio="aspect-[16/9]" className="rounded-[2rem] shadow-soft" />
            {phoneLinks().map((p) => (
              <a key={p.tel} href={p.href} onClick={() => trackEvent('phone_click')} className={card}>
                <span className={bubble}><Phone aria-hidden className="h-6 w-6" /></span>
                <span><span className="block text-sm text-charcoal/65">Call us</span><span className="text-lg font-bold text-navy">{p.display}</span></span>
              </a>
            ))}
            <a href={whatsappChatUrl('Hello Margaret Amshi Foundation,')} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('whatsapp_click', { location: 'contact_page' })} className={card}>
              <span className={bubble}><MessageCircle aria-hidden className="h-6 w-6" /></span>
              <span><span className="block text-sm text-charcoal/65">WhatsApp</span><span className="text-lg font-bold text-navy">{SITE.whatsapp.display}</span></span>
            </a>
            <a href={`mailto:${SITE.email}`} className={card}>
              <span className={bubble}><Mail aria-hidden className="h-6 w-6" /></span>
              <span className="min-w-0"><span className="block text-sm text-charcoal/65">Email</span><span className="block break-all text-lg font-bold text-navy">{SITE.email}</span></span>
            </a>
            <div className={card}>
              <span className={bubble}><MapPin aria-hidden className="h-6 w-6" /></span>
              <span><span className="block text-sm text-charcoal/65">Where we work</span><span className="text-lg font-bold text-navy">{SITE.address.line}</span></span>
            </div>
            <div className={card}>
              <span className={bubble}><Clock aria-hidden className="h-6 w-6" /></span>
              <div>
                <p className="text-sm text-charcoal/65">Office hours</p>
                <dl className="mt-1 space-y-0.5">
                  {SITE.hours.map((h) => (
                    <div key={h.days} className="flex flex-wrap gap-x-3"><dt className="font-semibold text-navy">{h.days}</dt><dd className="text-charcoal/75">{h.time}</dd></div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="rounded-3xl bg-mist p-5">
              <p className="mb-3 font-bold text-navy">Follow us</p>
              <SocialLinks />
            </div>
          </div>

          <div id="message" className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-lift sm:p-10">
            <WhatsAppForm formKey="contact" heading="Send us a message" />
          </div>
        </div>

        <div className="container-x mt-14"><MapEmbed /></div>
      </section>
    </>
  )
}
