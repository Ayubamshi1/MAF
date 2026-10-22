import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Download, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { FOOTER_LEGAL } from '@/content/navigation'
import { SITE, phoneLinks, whatsappChatUrl } from '@/config/site'
import { trackEvent } from '@/lib/analytics'
import SocialLinks from '@/components/common/SocialLinks'
import { useInstall } from '@/hooks/useInstallPrompt'

const COLUMNS = [
  {
    title: 'The foundation',
    links: [
      ['About Us', '/about'], ['Our Founder', '/about/founder'], ['Mission and Vision', '/about/mission-vision'], ['Our Values', '/about/values'],
      ['Leadership', '/about/leadership'], ['Board', '/about/board'], ['Team', '/about/team'], ['Volunteers', '/about/volunteers'],
    ],
  },
  {
    title: 'Programs',
    links: [
      ['Grants', '/programs/grants'], ['Scholarships', '/programs/scholarships'], ['Cooperative Society', '/programs/cooperative-society'],
      ['Youth Empowerment', '/programs/youth-empowerment'], ["Women's Empowerment", '/programs/womens-empowerment'],
      ['Education', '/programs/education'], ['Training', '/programs/training'], ['All programs', '/programs'],
    ],
  },
  {
    title: 'Get involved',
    links: [
      ['Donate', '/donate'], ['Fundraise', '/get-involved/fundraise'], ['Volunteer', '/get-involved/volunteer'],
      ['Become a Member', '/get-involved/become-a-member'], ['Refer Someone', '/get-involved/refer-someone'],
      ['How to Partner', '/get-involved/partner'], ['Careers', '/careers'],
    ],
  },
  {
    title: 'Impact and resources',
    links: [
      ['Impact Overview', '/impact'], ['Stories', '/impact/stories'], ['Annual Reports', '/impact/reports'],
      ['Donation Transparency', '/impact/transparency'], ['Financial and Legal', '/financial-and-legal'],
      ['News', '/news'], ['Events', '/events'], ['FAQs', '/faqs'],
    ],
  },
] as const

export default function Footer() {
  const { canPrompt, isIOS, promptInstall } = useInstall()
  const [iosHelp, setIosHelp] = useState(false)
  return (
    <footer className="on-dark relative mt-0 bg-navy-900 text-white">
      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_2.5fr]">
          <div>
            <Link to="/" aria-label={`${SITE.name} home`} className="inline-block">
              <img src="/logo/logo-stacked-white.webp" alt={SITE.name} width={620} height={473} loading="lazy" decoding="async" className="h-28 w-auto sm:h-32" />
            </Link>
            <p className="mt-6 max-w-sm text-white/75">
              We partner with donors and local leaders to improve lives through strategic grantmaking and dedicated leadership.
            </p>
            <SocialLinks tone="light" className="mt-6" />
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h2 className="!text-base !font-bold !text-white">{col.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map(([label, to]) => (
                    <li key={to}>
                      <Link to={to} className="text-[0.95rem] text-white/75 underline-offset-4 transition hover:text-white hover:underline">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 grid gap-4 rounded-[2rem] border border-white/15 bg-white/5 p-6 backdrop-blur sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
          {phoneLinks().map((p) => (
            <a key={p.tel} href={p.href} onClick={() => trackEvent('phone_click')} className="flex items-center gap-3 rounded-2xl p-2 transition hover:bg-white/10">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10"><Phone aria-hidden className="h-5 w-5 text-sky" /></span>
              <span><span className="block text-xs text-white/60">Call us</span><span className="font-semibold">{p.display}</span></span>
            </a>
          ))}
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 rounded-2xl p-2 transition hover:bg-white/10">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10"><Mail aria-hidden className="h-5 w-5 text-sky" /></span>
            <span className="min-w-0"><span className="block text-xs text-white/60">Email</span><span className="block break-all text-sm font-semibold">{SITE.email}</span></span>
          </a>
          <div className="flex items-center gap-3 p-2">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10"><MapPin aria-hidden className="h-5 w-5 text-sky" /></span>
            <span><span className="block text-xs text-white/60">Where we work</span><span className="text-sm font-semibold">{SITE.address.line}</span></span>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/15 pt-8 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {FOOTER_LEGAL.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-white hover:underline">{l.label}</Link></li>
            ))}
            {(canPrompt || isIOS) && (
              <li>
                <button type="button" onClick={() => (canPrompt ? promptInstall() : setIosHelp((v) => !v))} aria-expanded={!canPrompt ? iosHelp : undefined} className="inline-flex items-center gap-1.5 hover:text-white hover:underline">
                  <Download aria-hidden className="h-4 w-4" /> Install app
                </button>
                {iosHelp && !canPrompt && <span role="status" className="mt-1 block text-xs text-white/70">Tap Share, then Add to Home Screen.</span>}
              </li>
            )}
            <li>
              <a href={whatsappChatUrl('Hello Margaret Amshi Foundation, please add me to your updates.')} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('whatsapp_click', { location: 'footer' })} className="inline-flex items-center gap-1.5 hover:text-white hover:underline">
                <MessageCircle aria-hidden className="h-4 w-4" /> Join updates on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex justify-center border-t border-white/10 pt-6">
          <a href="https://sickdevs.ng" target="_blank" rel="noopener noreferrer" aria-label="Developed by SickDevs NG (opens in a new tab)" onClick={() => trackEvent('developer_credit_click')} className="dev-credit">
            Developed by <strong>SickDevs NG</strong>
          </a>
        </div>
      </div>
    </footer>
  )
}
