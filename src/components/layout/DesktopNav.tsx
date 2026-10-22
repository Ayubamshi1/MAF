import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, m } from 'framer-motion'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { NAV, type NavItem, type NavLinkItem } from '@/content/navigation'
import { getIcon } from '@/lib/icons'
import { whatsappChatUrl } from '@/config/site'

const SHORT: Record<string, string> = {
  'Programs and Services': 'Programs',
  'Impact and Accountability': 'Impact',
  'News and Resources': 'Resources',
}

function Row({ link }: { link: NavLinkItem }) {
  const Icon = getIcon(link.icon)
  return (
    <Link to={link.to} className="group flex items-start gap-3 rounded-2xl p-3 transition hover:bg-mist">
      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean transition group-hover:bg-ocean group-hover:text-white">
        <Icon aria-hidden className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.95rem] font-semibold leading-snug text-navy">{link.label}</span>
        <span className="mt-0.5 block text-sm leading-snug text-charcoal/65">{link.description}</span>
      </span>
    </Link>
  )
}

function Panel({ item }: { item: NavItem }) {
  const groups = item.groups ?? []
  const base = 'rounded-[1.75rem] border border-white/70 bg-white/95 p-3 shadow-lift backdrop-blur-xl'
  if (item.mega) {
    return (
      <div>
        <div className={`${base} p-5`}>
          <div className="grid grid-cols-3 gap-4">
            {groups.map((g) => (
              <div key={g.title}>
                <p className="px-3 pb-2 text-sm font-bold text-leaf-dark">{g.title}</p>
                {g.links.map((l) => <Row key={l.to} link={l} />)}
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-grad-deep px-5 py-4 text-white">
            <p className="text-sm font-semibold">Not sure which program fits? Talk to our team.</p>
            <div className="flex gap-2">
              <Link to="/programs" className="btn btn-light btn-sm">View all programs</Link>
              <a href={whatsappChatUrl('Hello Margaret Amshi Foundation, I need help choosing a program.')} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                <MessageCircle aria-hidden className="h-4 w-4" /> WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className={`${base} grid gap-2 ${groups.length > 1 ? 'w-[38rem] grid-cols-2' : 'w-[20rem]'}`}>
        {groups.map((g) => (
          <div key={g.title}>
            <p className="px-3 pb-1 pt-2 text-sm font-bold text-leaf-dark">{g.title}</p>
            {g.links.map((l) => <Row key={l.to} link={l} />)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function DesktopNav() {
  const [openKey, setOpenKey] = useState<string | null>(null)
  const ref = useRef<HTMLUListElement>(null)
  const { pathname } = useLocation()

  useEffect(() => setOpenKey(null), [pathname])
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpenKey(null)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [])

  const isActive = (item: NavItem) =>
    item.to === '/' ? pathname === '/' : pathname === item.to || (item.groups ?? []).some((g) => g.links.some((l) => l.to !== '/' && pathname.startsWith(l.to)))

  return (
    <nav aria-label="Main" className="hidden xl:block">
      <ul ref={ref} className="flex items-center gap-1">
        {NAV.map((item, idx) => {
          const label = SHORT[item.label] ?? item.label
          if (!item.groups) {
            return (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} className={({ isActive: a }) => `rounded-full px-4 py-2.5 text-[0.95rem] font-semibold transition hover:bg-mist hover:text-ocean ${a ? 'text-ocean' : 'text-navy'}`}>
                  {label}
                </NavLink>
              </li>
            )
          }
          const open = openKey === item.label
          const active = isActive(item)
          return (
            <li
              key={item.label}
              className={item.mega ? '' : 'relative'}
              onMouseEnter={() => setOpenKey(item.label)}
              onMouseLeave={() => setOpenKey(null)}
              onKeyDown={(e) => {
                if (e.key === 'Escape' && open) {
                  setOpenKey(null)
                  e.currentTarget.querySelector('button')?.focus()
                }
              }}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenKey(null)
              }}
            >
              <button
                type="button"
                aria-expanded={open}
                aria-haspopup="true"
                onClick={() => setOpenKey(open ? null : item.label)}
                className={`inline-flex items-center gap-1 rounded-full px-4 py-2.5 text-[0.95rem] font-semibold transition hover:bg-mist hover:text-ocean ${open || active ? 'text-ocean' : 'text-navy'}`}
              >
                {label}
                <ChevronDown aria-hidden className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open && (
                  <m.div
                    className={item.mega ? 'absolute inset-x-0 top-full pt-3' : `absolute top-full pt-3 ${idx >= 4 ? 'right-0' : 'left-0'}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Panel item={item} />
                  </m.div>
                )}
              </AnimatePresence>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
