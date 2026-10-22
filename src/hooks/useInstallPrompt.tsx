import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { trackEvent } from '@/lib/analytics'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

interface InstallState {
  /** The browser offered an install prompt (Chrome, Edge, Samsung Internet, Android). */
  canPrompt: boolean
  /** iPhone or iPad Safari, where install means Share > Add to Home Screen. */
  isIOS: boolean
  installed: boolean
  promptInstall: () => Promise<boolean>
}

const Ctx = createContext<InstallState>({ canPrompt: false, isIOS: false, installed: false, promptInstall: async () => false })

const standalone = () =>
  typeof window !== 'undefined' &&
  (window.matchMedia?.('(display-mode: standalone)').matches || (navigator as Navigator & { standalone?: boolean }).standalone === true)

export function InstallProvider({ children }: { children: ReactNode }) {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null)
  const [installed, setInstalled] = useState(standalone())
  const ios = useMemo(() => typeof navigator !== 'undefined' && /iphone|ipad|ipod/i.test(navigator.userAgent), [])

  useEffect(() => {
    const onPrompt = (e: Event) => {
      e.preventDefault()
      setDeferred(e as BeforeInstallPromptEvent)
    }
    const onInstalled = () => {
      setInstalled(true)
      setDeferred(null)
      trackEvent('pwa_installed')
    }
    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  const promptInstall = useCallback(async () => {
    if (!deferred) return false
    await deferred.prompt()
    const choice = await deferred.userChoice
    setDeferred(null)
    return choice.outcome === 'accepted'
  }, [deferred])

  const value = useMemo<InstallState>(() => ({ canPrompt: !!deferred && !installed, isIOS: ios && !installed, installed, promptInstall }), [deferred, installed, ios, promptInstall])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useInstall = () => useContext(Ctx)
