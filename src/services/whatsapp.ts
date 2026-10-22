import { SITE } from '@/config/site'
import { formatDate, formatNumber } from '@/lib/format'
import type { FieldDef, FormDef } from '@/content/forms'

export type FormValues = Record<string, string>

const clean = (s: string) => s.replace(/\*/g, '').replace(/\s+\n/g, '\n').trim()
const clip = (s: string, max: number) => (s.length > max ? `${s.slice(0, max - 1).trimEnd()}…` : s)

function display(field: FieldDef, raw: string): string {
  if (field.type === 'checkbox') return raw ? 'Yes' : ''
  if (field.type === 'date' && raw) return formatDate(raw)
  if (field.type === 'number' && raw) return field.label.includes('₦') ? `₦${formatNumber(raw)}` : formatNumber(raw)
  return clean(raw)
}

/** Builds the prefilled WhatsApp text. Empty fields are skipped; long answers are shortened to keep the link reliable. */
export function buildMessage(def: FormDef, values: FormValues, pageUrl = window.location.href): string {
  for (const limit of [500, 250, 120]) {
    const lines = def.fields
      .map((field) => {
        const v = display(field, values[field.name] ?? '')
        if (!v) return ''
        return `*${field.label.replace(/\s*\(.*?\)\s*/g, ' ').replace(/:$/, '').trim()}:* ${clip(v, limit)}`
      })
      .filter(Boolean)
    const msg = [
      def.greeting,
      '',
      `*${def.title}*`,
      ...lines,
      '',
      `Sent from ${new URL(SITE.url).hostname}`,
      `Page: ${pageUrl}`,
      `Date: ${formatDate(new Date().toISOString())}`,
    ].join('\n')
    if (msg.length <= 1500 || limit === 120) return msg
  }
  return def.greeting
}

export function buildWhatsAppUrl(message: string, number: string = SITE.whatsapp.number): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
