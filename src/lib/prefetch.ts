/**
 * Warms the next page's code when a visitor hovers or focuses a link, so navigation feels instant.
 * Imports here match the lazy imports in App.tsx, so the browser reuses the same files.
 */
const exact: Record<string, () => Promise<unknown>> = {
  '/donate': () => import('@/pages/Donate'),
  '/contact': () => import('@/pages/Contact'),
  '/about': () => import('@/pages/About'),
  '/about/founder': () => import('@/pages/Founder'),
  '/about/mission-vision': () => import('@/pages/MissionVision'),
  '/about/values': () => import('@/pages/Values'),
  '/programs': () => import('@/pages/Programs'),
  '/get-involved': () => import('@/pages/GetInvolved'),
  '/impact': () => import('@/pages/Impact'),
  '/impact/stories': () => import('@/pages/Stories'),
  '/impact/reports': () => import('@/pages/Reports'),
  '/impact/financial-summaries': () => import('@/pages/FinancialSummaries'),
  '/impact/project-updates': () => import('@/pages/ProjectUpdates'),
  '/impact/transparency': () => import('@/pages/Transparency'),
  '/financial-and-legal': () => import('@/pages/FinancialLegal'),
  '/news': () => import('@/pages/News'),
  '/events': () => import('@/pages/Events'),
  '/resources': () => import('@/pages/Resources'),
  '/resources/application-notices': () => import('@/pages/ApplicationNotices'),
  '/resources/downloads': () => import('@/pages/Downloads'),
  '/faqs': () => import('@/pages/Faqs'),
  '/careers': () => import('@/pages/Careers'),
  '/privacy': () => import('@/pages/Legal'),
  '/terms': () => import('@/pages/Legal'),
}
const prefix: [string, () => Promise<unknown>][] = [
  ['/programs/', () => import('@/pages/ProgramPage')],
  ['/get-involved/', () => import('@/pages/ActionPage')],
  ['/about/', () => import('@/pages/People')],
  ['/impact/stories/', () => import('@/pages/StoryDetail')],
  ['/news/', () => import('@/pages/NewsDetail')],
  ['/events/', () => import('@/pages/EventDetail')],
  ['/careers/', () => import('@/pages/CareerDetail')],
]
const done = new Set<string>()

export function prefetchRoute(path: string) {
  const p = path.replace(/\/$/, '') || '/'
  if (done.has(p)) return
  const loader = exact[p] ?? prefix.find(([pre]) => p.startsWith(pre))?.[1]
  if (!loader) return
  done.add(p)
  loader().catch(() => done.delete(p))
}

export function enablePrefetchOnIntent(): () => void {
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
  if (conn?.saveData) return () => undefined
  const handler = (e: Event) => {
    const a = (e.target as Element | null)?.closest?.('a[href^="/"]') as HTMLAnchorElement | null
    if (a && a.origin === window.location.origin) prefetchRoute(a.pathname)
  }
  document.addEventListener('pointerover', handler, { passive: true })
  document.addEventListener('focusin', handler)
  return () => {
    document.removeEventListener('pointerover', handler)
    document.removeEventListener('focusin', handler)
  }
}
