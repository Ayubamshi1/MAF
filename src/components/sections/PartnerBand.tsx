import { MessageCircle } from 'lucide-react'
import { whatsappChatUrl } from '@/config/site'
import { trackEvent } from '@/lib/analytics'
import Button from '@/components/ui/Button'
import Swoosh from '@/components/ui/Swoosh'
import BgImage from '@/components/ui/BgImage'
import { IMAGES } from '@/content/images'

const TYPES = ['Corporate giving', 'Program partnerships', 'Grant co-funding', 'Skills and in-kind support']

export default function PartnerBand() {
  return (
    <section className="section pb-0">
      <div className="container-x">
        <div className="on-dark relative isolate overflow-hidden rounded-[2.5rem] bg-grad-deep p-8 text-white shadow-lift sm:p-14">
          <BgImage image={IMAGES.partner} overlay="bg-gradient-to-r from-navy-900/95 via-navy/90 to-ocean/75" />
          <div aria-hidden className="absolute -right-16 -top-16 -z-10 h-72 w-72 rounded-full bg-leaf/30 blur-3xl" />
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-extrabold !text-white sm:text-4xl">Partner with us to co-create lasting impact</h2>
              <p className="mt-4 max-w-xl text-lg text-white/85">Organizations, businesses and individuals work with us to fund, deliver and measure change that outlives any single project.</p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {TYPES.map((t) => <li key={t} className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium">{t}</li>)}
              </ul>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button to="/get-involved/partner" variant="light" size="lg">How to partner</Button>
              <Button href={whatsappChatUrl('Hello Margaret Amshi Foundation, I would like to discuss a partnership.')} variant="ghost" size="lg" onClick={() => trackEvent('whatsapp_click', { location: 'partner_band' })}>
                <MessageCircle aria-hidden className="h-5 w-5" /> Chat on WhatsApp
              </Button>
            </div>
          </div>
          <Swoosh className="opacity-60" />
        </div>
      </div>
    </section>
  )
}
