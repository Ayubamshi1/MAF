import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, m } from 'framer-motion'
import { Share, X } from 'lucide-react'
import { useInstall } from '@/hooks/useInstallPrompt'
import { trackEvent } from '@/lib/analytics'

const DISMISS_KEY = 'maf-install-dismissed'
const COOKIE_KEY = 'maf-cookie-notice'
const SNOOZE_MS = 14 * 24 * 60 * 60 * 1000

const read = (k: string) => {
  try {
    return localStorage.getItem(k)
  } catch {
    return null
  }
}

/**
 * Friendly, non-intrusive install suggestion. It appears only when:
 * the visitor has seen at least two pages or stayed 30 seconds, the cookie notice is dismissed,
 * they are not on the donate page, the app is not installed and they have not dismissed it in the last 14 days.
 */
export default function InstallPrompt() {
  const { canPrompt, isIOS, installed, promptInstall } = useInstall()
  const { pathname } = useLocation()
  const [views, setViews] = useState(0)
  const [waited, setWaited] = useState(false)
  const [snoozed, setSnoozed] = useState(() => Number(read(DISMISS_KEY) ?? 0) > Date.now())
  const [shown, setShown] = useState(false)

  useEffect(() => setViews((v) => v + 1), [pathname])
  useEffect(() => {
    const id = window.setTimeout(() => setWaited(true), 30000)
    return () => window.clearTimeout(id)
  }, [])

  const eligible = (canPrompt || isIOS) && !installed && !snoozed && (views >= 2 || waited) && pathname !== '/donate' && !!read(COOKIE_KEY)

  useEffect(() => {
    if (eligible && !shown) {
      setShown(true)
      trackEvent('pwa_install_prompt_shown')
    }
  }, [eligible, shown])

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now() + SNOOZE_MS))
    } catch {
      /* storage unavailable */
    }
    setSnoozed(true)
  }

  const install = async () => {
    await promptInstall()
    dismiss()
  }

  return (
    <AnimatePresence>
      {eligible && (
        <m.section
          aria-label="Install the app"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-md rounded-3xl border border-white/70 bg-white/95 p-5 shadow-lift backdrop-blur-xl sm:inset-x-auto sm:bottom-6 sm:left-6 sm:mx-0"
        >
          <button type="button" onClick={dismiss} aria-label="Dismiss install suggestion" className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-charcoal/60 hover:bg-mist hover:text-navy">
            <X aria-hidden className="h-5 w-5" />
          </button>
          <div className="flex gap-4 pr-6">
            <img src="/icons/icon-96.png" alt="" width={56} height={56} className="h-14 w-14 shrink-0 rounded-2xl shadow-soft" />
            <div>
              <p className="font-heading text-base font-extrabold text-navy">Add Margaret Amshi Foundation to your phone</p>
              {canPrompt ? (
                <p className="mt-1 text-sm text-charcoal/75">Open the site like an app, with quick access to Donate and Programs.</p>
              ) : (
                <p className="mt-1 text-sm text-charcoal/75">Tap <Share aria-hidden className="inline h-4 w-4 align-text-bottom text-ocean" /> <strong>Share</strong>, then <strong>Add to Home Screen</strong>.</p>
              )}
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            {canPrompt && <button type="button" onClick={install} className="btn btn-primary btn-sm">Install</button>}
            <button type="button" onClick={dismiss} className="btn btn-outline btn-sm">{canPrompt ? 'Not now' : 'Got it'}</button>
          </div>
        </m.section>
      )}
    </AnimatePresence>
  )
}
