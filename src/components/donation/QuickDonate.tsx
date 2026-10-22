import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HandHeart, Lock } from 'lucide-react'
import { DONATION } from '@/config/paystack'
import { formatNaira } from '@/lib/format'
import AmountPicker from './AmountPicker'

/** Compact donation card for the home page. Sends the chosen amount to /donate. */
export default function QuickDonate({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const [amount, setAmount] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const dark = tone === 'dark'

  const go = () => {
    if (Number(amount) < DONATION.min) {
      setError(`Enter at least ${formatNaira(DONATION.min)} to continue.`)
      return
    }
    navigate(`/donate?amount=${amount}`)
  }

  return (
    <div className={`rounded-[2rem] p-6 sm:p-8 ${dark ? 'glass shadow-lift' : 'border border-navy/10 bg-white shadow-soft'}`}>
      <h2 className={`flex items-center gap-2.5 text-xl font-extrabold ${dark ? '!text-white' : ''}`}>
        <HandHeart aria-hidden className={`h-6 w-6 ${dark ? 'text-sky' : 'text-ocean'}`} /> Give today
      </h2>
      <p className={`mt-1 text-sm ${dark ? 'text-white/80' : 'text-charcoal/70'}`}>Every gift helps us reach another family.</p>
      <div className="mt-5">
        <AmountPicker value={amount} onChange={(v) => { setAmount(v); setError('') }} error={error} tone={tone} />
      </div>
      <button type="button" onClick={go} className={`btn btn-lg mt-6 w-full ${dark ? 'btn-light' : 'btn-primary'}`}>Continue to donate</button>
      <p className={`mt-3 flex items-center justify-center gap-1.5 text-xs ${dark ? 'text-white/70' : 'text-charcoal/60'}`}>
        <Lock aria-hidden className="h-3.5 w-3.5" /> Secure payment by Paystack
      </p>
    </div>
  )
}
