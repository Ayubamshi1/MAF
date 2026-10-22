import { SITE } from '@/config/site'
import { trackEvent } from '@/lib/analytics'
import { SOCIAL_ICONS } from './SocialIcon'

export default function SocialLinks({ tone = 'dark', className = '' }: { tone?: 'dark' | 'light'; className?: string }) {
  const items = SITE.socials.filter((s) => s.url)
  const color = tone === 'light' ? 'border-white/25 text-white hover:bg-white hover:text-navy' : 'border-navy/15 text-ocean hover:bg-ocean hover:text-white'
  return (
    <ul className={`flex flex-wrap gap-2.5 ${className}`} aria-label="Social media">
      {items.map((s) => {
        const Icon = SOCIAL_ICONS[s.key]
        return (
          <li key={s.key}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${SITE.name} on ${s.label} (opens in a new tab)`}
              onClick={() => trackEvent('social_click', { platform: s.key })}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${color}`}
            >
              {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
