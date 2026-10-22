import { Link, useLocation } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { findRoute } from '@/content/navigation'
import JsonLd from '@/components/common/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export interface Crumb {
  label: string
  to?: string
}

export default function Breadcrumbs({ trail, tone = 'light' }: { trail?: Crumb[]; tone?: 'light' | 'dark' }) {
  const { pathname } = useLocation()
  let items = trail
  if (!items) {
    const info = findRoute(pathname)
    items = [{ label: 'Home', to: '/' }]
    if (info?.parent) items.push({ label: info.parent.label, to: info.parent.to })
    items.push({ label: info?.title ?? 'Page' })
  }
  const link = tone === 'light' ? 'text-white/80 hover:text-white' : 'text-ocean hover:text-navy'
  const current = tone === 'light' ? 'text-white' : 'text-navy'
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <JsonLd data={breadcrumbSchema(items.map((c, i) => ({ name: c.label, path: c.to && i < items!.length - 1 ? c.to : pathname })))} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => {
          const last = i === items!.length - 1
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
              {c.to && !last ? (
                <Link to={c.to} className={`font-medium underline-offset-4 hover:underline ${link}`}>{c.label}</Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className={`font-semibold ${current}`}>{c.label}</span>
              )}
              {!last && <ChevronRight aria-hidden className={`h-4 w-4 ${tone === 'light' ? 'text-white/50' : 'text-navy/40'}`} />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
