import { useId, useRef, useState, type FormEvent } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { AlertTriangle, Check, Copy, Info, MessageCircle, Phone, RotateCcw } from 'lucide-react'
import { getForm, type FormDef } from '@/content/forms'
import { submitForm, type SubmitResult } from '@/services/forms'
import { copyText, normalizeNgPhone } from '@/lib/format'
import { phoneLinks } from '@/config/site'
import FormField from './FormField'

type Values = Record<string, string>
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(def: FormDef, values: Values): Values {
  const errors: Values = {}
  for (const f of def.fields) {
    const v = (values[f.name] ?? '').trim()
    if (f.required && !v) {
      errors[f.name] = f.type === 'checkbox' ? 'Please confirm to continue.' : f.type === 'select' ? 'Please choose an option.' : 'This field is required.'
      continue
    }
    if (!v) continue
    if (f.type === 'tel' && !normalizeNgPhone(v)) errors[f.name] = 'Enter a valid Nigerian phone number, for example 0803 123 4567.'
    else if (f.type === 'email' && !EMAIL.test(v)) errors[f.name] = 'Enter a valid email address.'
    else if (f.type === 'number' && f.min !== undefined && Number(v) < f.min) errors[f.name] = `Enter ${new Intl.NumberFormat('en-NG').format(f.min)} or more.`
  }
  return errors
}

interface Props {
  formKey: string
  /** Prefill values, for example { course: 'Web Design Basics' }. */
  defaults?: Values
  /** Heading shown above the form. Pass null to hide. */
  heading?: string | null
  className?: string
}

export default function WhatsAppForm({ formKey, defaults = {}, heading, className = '' }: Props) {
  const def = getForm(formKey)
  const uid = useId()
  const [values, setValues] = useState<Values>(() => Object.fromEntries(def.fields.map((f) => [f.name, defaults[f.name] ?? ''])))
  const [errors, setErrors] = useState<Values>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [result, setResult] = useState<SubmitResult | null>(null)
  const [copied, setCopied] = useState<'idle' | 'ok' | 'fail'>('idle')
  const successRef = useRef<HTMLHeadingElement>(null)

  const onChange = (name: string, value: string) => {
    setValues((s) => ({ ...s, [name]: value }))
    if (touched[name]) setErrors((e) => ({ ...e, [name]: validate(def, { ...values, [name]: value })[name] ?? '' }))
  }
  const onBlur = (name: string) => {
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((e) => ({ ...e, [name]: validate(def, values)[name] ?? '' }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const found = validate(def, values)
    setErrors(found)
    setTouched(Object.fromEntries(def.fields.map((f) => [f.name, true])))
    const firstBad = def.fields.find((f) => found[f.name])
    if (firstBad) {
      document.getElementById(`${uid}-${firstBad.name}`)?.focus()
      return
    }
    const cleaned = { ...values }
    for (const f of def.fields) if (f.type === 'tel' && cleaned[f.name]) cleaned[f.name] = normalizeNgPhone(cleaned[f.name]) ?? cleaned[f.name]
    // Opens WhatsApp immediately (inside the click handler) so pop-up blockers allow it.
    setResult(submitForm(def, cleaned))
    setCopied('idle')
    window.setTimeout(() => successRef.current?.focus(), 80)
  }

  const reset = () => {
    setResult(null)
    setValues(Object.fromEntries(def.fields.map((f) => [f.name, defaults[f.name] ?? ''])))
    setErrors({})
    setTouched({})
  }

  const shownHeading = heading === undefined ? def.title : heading

  return (
    <div className={className}>
      <AnimatePresence mode="wait" initial={false}>
        {result ? (
          <m.div key="done" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="rounded-[2rem] border border-leaf/30 bg-gradient-to-br from-leaf-100 to-white p-6 text-center sm:p-10">
            <m.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }} className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-grad-leaf text-white shadow-soft">
              <Check aria-hidden className="h-8 w-8" />
            </m.span>
            <h3 ref={successRef} tabIndex={-1} className="mt-5 text-2xl font-extrabold outline-none">Almost done. Your message is ready in WhatsApp.</h3>
            <p className="mx-auto mt-3 max-w-md text-charcoal/80" role="status">Tap <strong>Send</strong> in WhatsApp to complete your request. Nothing reaches us until you do.</p>
            <p className="mx-auto mt-2 max-w-md text-sm text-charcoal/65">Need to share a document, such as a CV or letter? Attach it in the same chat after sending.</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a href={result.url} target="_blank" rel="noopener noreferrer" className="btn btn-leaf"><MessageCircle aria-hidden className="h-5 w-5" /> Open WhatsApp again</a>
              <button type="button" onClick={async () => setCopied((await copyText(result.message)) ? 'ok' : 'fail')} className="btn btn-outline">
                <Copy aria-hidden className="h-4 w-4" /> {copied === 'ok' ? 'Message copied' : 'Copy message'}
              </button>
              <a href={phoneLinks()[0].href} className="btn btn-outline"><Phone aria-hidden className="h-4 w-4" /> Call us instead</a>
            </div>
            <p aria-live="polite" className="mt-3 min-h-[1.25rem] text-sm text-charcoal/70">{copied === 'fail' ? 'Copy was blocked by your browser. Select and copy the message from WhatsApp instead.' : ''}</p>
            <button type="button" onClick={reset} className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-ocean underline underline-offset-4 hover:text-navy">
              <RotateCcw aria-hidden className="h-4 w-4" /> Fill in another request
            </button>
          </m.div>
        ) : (
          <m.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-label={def.title}>
            {shownHeading && <h3 className="mb-2 text-2xl font-extrabold">{shownHeading}</h3>}
            {def.intro && <p className="mb-5 text-charcoal/75">{def.intro}</p>}
            {def.notice && (
              <div role="note" className={`mb-6 flex gap-3 rounded-2xl border p-4 text-sm ${def.notice.tone === 'warning' ? 'border-amber-300 bg-amber-50 text-amber-950' : 'border-sky/40 bg-sky-100/50 text-navy'}`}>
                {def.notice.tone === 'warning' ? <AlertTriangle aria-hidden className="mt-0.5 h-5 w-5 shrink-0" /> : <Info aria-hidden className="mt-0.5 h-5 w-5 shrink-0" />}
                <p>{def.notice.text}</p>
              </div>
            )}
            <div className="grid gap-5 sm:grid-cols-2">
              {def.fields.map((f) => (
                <FormField key={f.name} field={f} id={`${uid}-${f.name}`} value={values[f.name] ?? ''} error={errors[f.name] || undefined} onChange={onChange} onBlur={onBlur} />
              ))}
            </div>
            <div className="mt-7">
              <button type="submit" className="btn btn-leaf btn-lg w-full sm:w-auto">
                <MessageCircle aria-hidden className="h-5 w-5" /> {def.submitLabel}
              </button>
              <p className="mt-3 text-sm text-charcoal/65">Submitting opens WhatsApp with your details filled in. Nothing is sent until you tap Send.</p>
            </div>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  )
}
