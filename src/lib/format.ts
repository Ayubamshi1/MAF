export const formatNaira = (n: number) => `₦${new Intl.NumberFormat('en-NG').format(n)}`
export const formatNumber = (n: number | string) =>
  new Intl.NumberFormat('en-NG').format(typeof n === 'string' ? Number(n) || 0 : n)
export const digitsOnly = (s: string) => s.replace(/\D/g, '')
export const formatDate = (iso: string, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }) =>
  new Date(iso).toLocaleDateString('en-NG', opts)

/** Accepts 0803..., +234803..., 234803... and returns the local 11-digit form, or null when invalid. */
export function normalizeNgPhone(input: string): string | null {
  let v = input.replace(/[\s\-().]/g, '')
  if (v.startsWith('+234')) v = '0' + v.slice(4)
  else if (v.startsWith('234') && v.length === 13) v = '0' + v.slice(3)
  return /^0[789][01]\d{8}$/.test(v) ? v : null
}

export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    /* fall through to legacy copy */
  }
  try {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(ta)
    return ok
  } catch {
    return false
  }
}

/** True when an ISO date (YYYY-MM-DD) is today or later. */
export const isUpcoming = (iso: string) => new Date(`${iso}T23:59:59`).getTime() >= Date.now()
