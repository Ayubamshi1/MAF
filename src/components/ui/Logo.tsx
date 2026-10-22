import { Link } from 'react-router-dom'
import { SITE } from '@/config/site'

/** Horizontal logo (560x214 source). Use `white` on dark backgrounds. */
export default function Logo({ white = false, className = 'h-10 sm:h-12', priority = false }: { white?: boolean; className?: string; priority?: boolean }) {
  return (
    <Link to="/" aria-label={`${SITE.name} home`} className="inline-flex shrink-0 items-center rounded-lg">
      <img
        src={white ? '/logo/logo-horizontal-white.webp' : '/logo/logo-horizontal.webp'}
        alt={SITE.name}
        width={560}
        height={214}
        decoding="async"
        {...(priority ? { fetchPriority: 'high' as const } : {})}
        className={`w-auto ${className}`}
      />
    </Link>
  )
}
