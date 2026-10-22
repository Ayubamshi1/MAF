import { useCallback, useRef, useState } from 'react'
import { PAYSTACK_SCRIPT_URL } from '@/config/paystack'

export interface PaystackResponse {
  reference: string
  status?: string
}
export interface PaystackSetup {
  key: string
  email: string
  amount: number
  currency: string
  ref: string
  metadata?: Record<string, unknown>
  callback: (response: PaystackResponse) => void
  onClose: () => void
}
declare global {
  interface Window {
    PaystackPop?: { setup: (opts: PaystackSetup) => { openIframe: () => void } }
  }
}

/** Loads Paystack's inline script only when it is needed (on first interaction with a donation form). */
export function usePaystack() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const promise = useRef<Promise<void> | null>(null)

  const load = useCallback((): Promise<void> => {
    if (window.PaystackPop) return Promise.resolve()
    if (promise.current) return promise.current
    setLoading(true)
    promise.current = new Promise<void>((resolve, reject) => {
      const s = document.createElement('script')
      s.src = PAYSTACK_SCRIPT_URL
      s.async = true
      s.onload = () => {
        setLoading(false)
        setError(null)
        resolve()
      }
      s.onerror = () => {
        setLoading(false)
        promise.current = null
        s.remove()
        const msg = 'We could not reach Paystack. Check your internet connection and try again.'
        setError(msg)
        reject(new Error(msg))
      }
      document.head.appendChild(s)
    })
    return promise.current
  }, [])

  const open = useCallback(
    async (opts: PaystackSetup) => {
      await load()
      if (!window.PaystackPop) throw new Error('Paystack is unavailable')
      window.PaystackPop.setup(opts).openIframe()
    },
    [load],
  )

  return { load, open, loading, error }
}
