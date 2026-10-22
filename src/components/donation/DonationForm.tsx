import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Heart, Loader2, Lock, WifiOff } from 'lucide-react'
import { DONATION, FUND_OPTIONS, PAYSTACK_PUBLIC_KEY } from '@/config/paystack'
import { formatNaira } from '@/lib/format'
import { trackEvent } from '@/lib/analytics'
import { useOnline } from '@/hooks/useOnline'
import { usePaystack } from '@/hooks/usePaystack'
import AmountPicker from './AmountPicker'
import Button from '@/components/ui/Button'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const makeRef = () => `MAF-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`

export default function DonationForm({ initialAmount = '' }: { initialAmount?: string }) {
  const uid = useId()
  const online = useOnline()
  const { load, open, loading, error: scriptError } = usePaystack()

  const [amount, setAmount] = useState(initialAmount)
  const [fund, setFund] = useState<string>(FUND_OPTIONS[0])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [anonymous, setAnonymous] = useState(false)
  const [note, setNote] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [busy, setBusy] = useState(false)
  const [payError, setPayError] = useState('')
  const [done, setDone] = useState<{ reference: string; amount: number; name: string } | null>(null)
  const doneRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (initialAmount) setAmount(initialAmount)
  }, [initialAmount])

  const amountNum = Number(amount) || 0

  const validate = () => {
    const e: Record<string, string> = {}
    if (amountNum < DONATION.min) e.amount = `Enter at least ${formatNaira(DONATION.min)}.`
    else if (amountNum > DONATION.max) e.amount = `For gifts above ${formatNaira(DONATION.max)}, please contact us directly.`
    if (!name.trim()) e.name = 'Enter your full name.'
    if (!EMAIL.test(email.trim())) e.email = 'Enter a valid email address. Paystack sends your receipt here.'
    return e
  }

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault()
    setPayError('')
    const e = validate()
    setErrors(e)
    const first = (['amount', 'name', 'email'] as const).find((k) => e[k])
    if (first) {
      document.getElementById(`${uid}-${first}`)?.focus()
      return
    }
    if (!online) return
    setBusy(true)
    trackEvent('donate_started', { value: amountNum, currency: DONATION.currency })
    const donorName = name.trim()
    try {
      await open({
        key: PAYSTACK_PUBLIC_KEY,
        email: email.trim(),
        amount: amountNum * 100, // Paystack expects kobo
        currency: DONATION.currency,
        ref: makeRef(),
        metadata: {
          custom_fields: [
            { display_name: 'Donor name', variable_name: 'donor_name', value: donorName },
            { display_name: 'Phone', variable_name: 'phone', value: phone.trim() || 'Not provided' },
            { display_name: 'Fund', variable_name: 'fund', value: fund },
            { display_name: 'Anonymous', variable_name: 'anonymous', value: anonymous ? 'Yes' : 'No' },
            { display_name: 'Message', variable_name: 'message', value: note.trim() || 'None' },
          ],
        },
        // FUTURE INTEGRATION: verify the transaction on a server using Paystack's verify endpoint,
        // then record the donor and send your own receipt. Never expose the secret key in the browser.
        callback: (res) => {
          setDone({ reference: res.reference, amount: amountNum, name: donorName })
          setBusy(false)
          trackEvent('donate_completed', { value: amountNum, currency: DONATION.currency })
          window.setTimeout(() => doneRef.current?.focus(), 100)
        },
        onClose: () => setBusy(false),
      })
    } catch {
      setBusy(false)
      setPayError('We could not open the payment window. Check your connection and try again, or give by bank transfer.')
    }
  }

  const reset = () => {
    setDone(null)
    setAmount('')
    setNote('')
  }

  const inputErr = (k: string) => (errors[k] ? { 'aria-invalid': true as const, 'aria-describedby': `${uid}-${k}-err` } : {})
  const Err = ({ k }: { k: string }) => (errors[k] ? <p id={`${uid}-${k}-err`} role="alert" className="mt-1.5 text-sm font-medium text-red-700">{errors[k]}</p> : null)

  return (
    <AnimatePresence mode="wait" initial={false}>
      {done ? (
        <m.div key="thanks" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="rounded-[2rem] border border-leaf/30 bg-gradient-to-br from-leaf-100 to-white p-8 text-center sm:p-12">
          <m.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 240, damping: 14, delay: 0.1 }} className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-grad-ocean text-white shadow-glow">
            <Heart aria-hidden className="h-10 w-10" fill="currentColor" />
          </m.span>
          <h3 ref={doneRef} tabIndex={-1} className="mt-6 text-3xl font-extrabold outline-none">Thank you, {done.name.split(' ')[0]}.</h3>
          <p className="mx-auto mt-3 max-w-md text-lg text-charcoal/80">Your gift of <strong>{formatNaira(done.amount)}</strong> has been received. You are helping build thriving communities.</p>
          <p className="mt-5 text-sm text-charcoal/70">Payment reference</p>
          <p className="mt-1 break-all rounded-xl bg-white px-4 py-2 font-mono text-sm font-semibold text-navy shadow-sm sm:inline-block">{done.reference}</p>
          <p className="mx-auto mt-4 max-w-md text-sm text-charcoal/65" role="status">Paystack will email a payment receipt to you. If it does not arrive, use the receipt request form on this page and quote your reference.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="primary" onClick={reset}>Make another gift</Button>
            <Button variant="outline" to="/impact/transparency">See how gifts are used</Button>
          </div>
        </m.div>
      ) : (
        <m.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} aria-label="Donate online" onFocus={() => { load().catch(() => undefined) }}>
          <AmountPicker value={amount} onChange={(v) => { setAmount(v); setErrors((x) => ({ ...x, amount: '' })) }} error={errors.amount} />

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor={`${uid}-fund`} className="label">Direct my gift to</label>
              <select id={`${uid}-fund`} value={fund} onChange={(e) => setFund(e.target.value)} className="field">
                {FUND_OPTIONS.map((f) => <option key={f}>{f}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor={`${uid}-name`} className="label">Full name <span className="text-red-700">*</span></label>
              <input id={`${uid}-name`} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className="field" {...inputErr('name')} />
              <Err k="name" />
            </div>
            <div>
              <label htmlFor={`${uid}-email`} className="label">Email address <span className="text-red-700">*</span></label>
              <input id={`${uid}-email`} type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" placeholder="you@example.com" className="field" {...inputErr('email')} />
              <Err k="email" />
            </div>
            <div>
              <label htmlFor={`${uid}-phone`} className="label">Phone number <span className="font-normal text-charcoal/55">(optional)</span></label>
              <input id={`${uid}-phone`} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" placeholder="0803 123 4567" className="field" />
            </div>
            <div className="flex items-end">
              <label className="flex w-full cursor-pointer items-center gap-3 rounded-2xl border border-navy/10 bg-mist/60 px-4 py-3.5 text-sm font-medium text-navy">
                <input type="checkbox" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} className="h-5 w-5 accent-ocean" />
                Give anonymously
              </label>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor={`${uid}-note`} className="label">Message <span className="font-normal text-charcoal/55">(optional)</span></label>
              <textarea id={`${uid}-note`} value={note} onChange={(e) => setNote(e.target.value)} rows={3} maxLength={300} className="field resize-y" />
            </div>
          </div>

          <div className="mt-7 rounded-3xl bg-gradient-to-br from-mist to-white p-5 ring-1 ring-navy/10" aria-live="polite">
            <p className="text-sm text-charcoal/70">Your gift</p>
            <p className="font-heading text-3xl font-extrabold text-navy">{amountNum ? formatNaira(amountNum) : '₦0'}</p>
            <p className="text-sm text-charcoal/70">to {fund}{anonymous ? ' (anonymous)' : ''}</p>
          </div>

          {!online && (
            <p role="alert" className="mt-5 flex items-start gap-2 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
              <WifiOff aria-hidden className="mt-0.5 h-5 w-5 shrink-0" /> You are offline. Reconnect to pay online, or use the bank transfer details on this page.
            </p>
          )}
          {(payError || scriptError) && <p role="alert" className="mt-5 rounded-2xl border border-red-300 bg-red-50 p-4 text-sm font-medium text-red-900">{payError || scriptError}</p>}

          <button type="submit" disabled={busy || !online || amountNum < DONATION.min || !EMAIL.test(email.trim())} className="btn btn-primary btn-lg mt-6 w-full">
            {busy || loading ? <><Loader2 aria-hidden className="h-5 w-5 animate-spin" /> Opening secure payment</> : <><Lock aria-hidden className="h-5 w-5" /> Donate with Paystack</>}
          </button>
          <p className="mt-3 text-center text-sm text-charcoal/65">Pay by card, bank transfer or USSD. Payments are processed securely by Paystack.</p>
        </m.form>
      )}
    </AnimatePresence>
  )
}
