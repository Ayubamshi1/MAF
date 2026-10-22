import type { FormDef } from '@/content/forms'
import { trackEvent } from '@/lib/analytics'
import { buildMessage, buildWhatsAppUrl, type FormValues } from './whatsapp'

export interface SubmitResult {
  url: string
  message: string
}

/**
 * All website forms submit through here.
 *
 * Right now a submission opens the foundation's WhatsApp chat with every answer prefilled.
 * FUTURE INTEGRATION: to also store submissions (database, email or a form service), call your API
 * from this function before or alongside openWhatsApp(). Keep the WhatsApp handoff if you want a
 * live chat with the applicant. No other file needs to change.
 *
 * Must be called synchronously from the submit handler, otherwise browsers may block the new tab.
 */
export function submitForm(def: FormDef, values: FormValues): SubmitResult {
  const message = buildMessage(def, values)
  const url = buildWhatsAppUrl(message, def.whatsappNumber)
  trackEvent('whatsapp_form_submitted', { form_name: def.key })
  openWhatsApp(url)
  return { url, message }
}

export function openWhatsApp(url: string) {
  const w = window.open(url, '_blank')
  if (w) {
    try {
      w.opener = null
    } catch {
      /* ignore */
    }
  } else {
    // Pop-up blocked: navigate in the same tab instead.
    window.location.href = url
  }
}
