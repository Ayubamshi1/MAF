import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { m } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import CookieNotice from '@/components/common/CookieNotice'
import InstallPrompt from '@/components/common/InstallPrompt'
import ReloadPrompt from '@/components/common/ReloadPrompt'
import JsonLd from '@/components/common/JsonLd'
import { organizationSchema, websiteSchema } from '@/lib/schema'
import { enablePrefetchOnIntent } from '@/lib/prefetch'
import { usePageView } from '@/hooks/usePageView'

function PageLoader() {
  return (
    <div role="status" aria-live="polite" className="flex min-h-[60vh] items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-sky/30 border-t-ocean" />
      <span className="sr-only">Loading page</span>
    </div>
  )
}

export default function Layout() {
  const { pathname, hash, search } = useLocation()
  usePageView()
  useEffect(() => enablePrefetchOnIntent(), [])

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, search])

  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
      <a href="#main" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Suspense fallback={<PageLoader />}>
          <m.div key={pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
            <Outlet />
          </m.div>
        </Suspense>
      </main>
      <Footer />
      <CookieNotice />
      <InstallPrompt />
      <ReloadPrompt />
    </>
  )
}
