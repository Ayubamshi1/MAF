/** Google Analytics 4 helpers. Never pass names, phone numbers, emails or message text. */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function trackPageView(path: string, title: string) {
  try {
    window.gtag?.('event', 'page_view', { page_path: path, page_title: title, page_location: window.location.href })
  } catch {
    /* analytics blocked: ignore */
  }
}

export function trackEvent(name: string, params: Record<string, string | number | boolean> = {}) {
  try {
    window.gtag?.('event', name, params)
  } catch {
    /* analytics blocked: ignore */
  }
}
