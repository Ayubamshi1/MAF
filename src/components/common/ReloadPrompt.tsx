import { useEffect } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'
import { CheckCircle2, RefreshCw } from 'lucide-react'

/** Registers the service worker and shows "Update available" and "Ready to work offline" toasts. */
export default function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(_url, registration) {
      // Check for a new version once an hour while the site stays open.
      if (registration) window.setInterval(() => registration.update().catch(() => undefined), 60 * 60 * 1000)
    },
  })

  useEffect(() => {
    if (!offlineReady) return
    const id = window.setTimeout(() => setOfflineReady(false), 6000)
    return () => window.clearTimeout(id)
  }, [offlineReady, setOfflineReady])

  if (!offlineReady && !needRefresh) return null
  return (
    <div role="status" aria-live="polite" className="fixed inset-x-3 top-24 z-[60] mx-auto max-w-md rounded-3xl border border-white/70 bg-white/95 p-4 shadow-lift backdrop-blur-xl sm:inset-x-auto sm:right-6">
      {needRefresh ? (
        <div className="flex items-center gap-3">
          <RefreshCw aria-hidden className="h-6 w-6 shrink-0 text-ocean" />
          <p className="flex-1 text-sm font-semibold text-navy">A new version of the site is available.</p>
          <button type="button" onClick={() => updateServiceWorker(true)} className="btn btn-primary btn-sm">Reload</button>
          <button type="button" onClick={() => setNeedRefresh(false)} className="btn btn-outline btn-sm">Later</button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <CheckCircle2 aria-hidden className="h-6 w-6 shrink-0 text-leaf-dark" />
          <p className="flex-1 text-sm font-semibold text-navy">Ready to work offline. Pages you visit are saved on this device.</p>
          <button type="button" onClick={() => setOfflineReady(false)} className="btn btn-outline btn-sm">OK</button>
        </div>
      )}
    </div>
  )
}
