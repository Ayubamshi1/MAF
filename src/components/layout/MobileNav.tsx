import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, m } from 'framer-motion'
import { ChevronDown, Menu, MessageCircle, Phone, X } from 'lucide-react'
import { NAV } from '@/content/navigation'
import { SITE, phoneLinks, whatsappChatUrl } from '@/config/site'
import Logo from '@/components/ui/Logo'

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const drawer = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    drawer.current?.querySelector<HTMLElement>('button')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        trigger.current?.focus()
        return
      }
      if (e.key !== 'Tab' || !drawer.current) return
      const f = Array.from(drawer.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled])'))
      if (!f.length) return
      const first = f[0]
      const last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="xl:hidden">
      <button
        ref={trigger}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-navy/15 text-navy transition hover:bg-mist"
      >
        <Menu aria-hidden className="h-6 w-6" />
      </button>

      {/* Rendered into <body>: the header's blur effect would otherwise trap fixed-position children inside it. */}
      {createPortal(
      <AnimatePresence>
        {open && (
          <>
            <m.div key="overlay" className="fixed inset-0 z-50 bg-navy-900/60 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
            <m.div
              key="drawer"
              ref={drawer}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Main menu"
              className="fixed inset-y-0 right-0 z-50 flex w-[min(24rem,92vw)] flex-col overflow-hidden bg-white shadow-lift"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-navy/10 px-5 py-4">
                <Logo className="h-9" />
                <button type="button" aria-label="Close menu" onClick={() => { setOpen(false); trigger.current?.focus() }} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy hover:bg-mist">
                  <X aria-hidden className="h-5 w-5" />
                </button>
              </div>

              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-3">
                <ul className="space-y-1">
                  {NAV.map((item) => {
                    if (!item.groups) {
                      return (
                        <li key={item.to}>
                          <Link to={item.to} className={`flex min-h-[48px] items-center rounded-2xl px-4 text-base font-semibold ${pathname === item.to ? 'bg-ocean-50 text-ocean' : 'text-navy hover:bg-mist'}`}>{item.label}</Link>
                        </li>
                      )
                    }
                    const isOpen = expanded === item.label
                    const links = item.groups.flatMap((g) => g.links)
                    const hasOverview = links.some((l) => l.to === item.to)
                    return (
                      <li key={item.label}>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={`mm-${item.to.replace(/\W/g, '')}`}
                          onClick={() => setExpanded(isOpen ? null : item.label)}
                          className="flex min-h-[48px] w-full items-center justify-between rounded-2xl px-4 text-left text-base font-semibold text-navy hover:bg-mist"
                        >
                          {item.label}
                          <ChevronDown aria-hidden className={`h-5 w-5 text-ocean transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <m.div id={`mm-${item.to.replace(/\W/g, '')}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
                              <div className="ml-4 space-y-3 border-l-2 border-sky/40 py-2 pl-3">
                                {!hasOverview && (
                                  <Link to={item.to} className="block rounded-xl px-3 py-2.5 text-[0.95rem] font-semibold text-ocean hover:bg-mist">All {item.label.toLowerCase()}</Link>
                                )}
                                {item.groups.map((g) => (
                                  <div key={g.title}>
                                    <p className="px-3 pb-1 text-xs font-bold text-leaf-dark">{g.title}</p>
                                    {g.links.map((l) => (
                                      <Link key={l.to} to={l.to} className={`block rounded-xl px-3 py-2.5 text-[0.95rem] ${pathname === l.to ? 'bg-ocean-50 font-semibold text-ocean' : 'text-charcoal hover:bg-mist'}`}>{l.label}</Link>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </m.div>
                          )}
                        </AnimatePresence>
                      </li>
                    )
                  })}
                </ul>
              </nav>

              <div className="space-y-3 border-t border-navy/10 bg-mist/60 p-5">
                <Link to="/donate" className="btn btn-primary w-full">Donate</Link>
                <div className="grid grid-cols-2 gap-3">
                  <a href={phoneLinks()[0].href} className="btn btn-outline btn-sm"><Phone aria-hidden className="h-4 w-4" /> Call us</a>
                  <a href={whatsappChatUrl('Hello Margaret Amshi Foundation,')} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm"><MessageCircle aria-hidden className="h-4 w-4" /> WhatsApp</a>
                </div>
                <p className="text-center text-xs text-charcoal/60">{SITE.address.line}</p>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>,
      document.body,
      )}
    </div>
  )
}
