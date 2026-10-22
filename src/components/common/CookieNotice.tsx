import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const KEY = 'maf-cookie-notice'

export default function CookieNotice() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true)
    } catch {
      setShow(true)
    }
  }, [])
  if (!show) return null
  const close = () => {
    try {
      localStorage.setItem(KEY, '1')
    } catch {
      /* storage unavailable */
    }
    setShow(false)
  }
  return (
    <section aria-label="Cookie notice" className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-3xl border border-white/60 bg-white/90 p-4 shadow-lift backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-charcoal/85">
          We use cookies to understand how people use this site and improve it.{' '}
          <Link to="/privacy" className="link-inline">Learn more</Link>
        </p>
        <button type="button" onClick={close} className="btn btn-primary btn-sm shrink-0">OK</button>
      </div>
    </section>
  )
}
