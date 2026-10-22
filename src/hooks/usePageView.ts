import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '@/lib/analytics'

export function usePageView() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    const id = window.setTimeout(() => trackPageView(pathname + search, document.title), 150)
    return () => window.clearTimeout(id)
  }, [pathname, search])
}
