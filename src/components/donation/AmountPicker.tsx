import { useId } from 'react'
import { DONATION } from '@/config/paystack'
import { digitsOnly, formatNaira, formatNumber } from '@/lib/format'

interface Props {
  value: string
  onChange: (digits: string) => void
  error?: string
  tone?: 'light' | 'dark'
  label?: string
}

/** Empty amount field with preset buttons underneath. Clicking a preset fills the field. */
export default function AmountPicker({ value, onChange, error, tone = 'light', label = 'Amount' }: Props) {
  const id = useId()
  const dark = tone === 'dark'
  const selected = Number(value)
  return (
    <div>
      <label htmlFor={`${id}-amount`} className={`label ${dark ? '!text-white' : ''}`}>{label}</label>
      <div className="relative">
        <span aria-hidden className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 font-heading text-2xl font-bold text-ocean">₦</span>
        <input
          id={`${id}-amount`}
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder="Enter amount"
          value={value ? formatNumber(value) : ''}
          onChange={(e) => onChange(digitsOnly(e.target.value).slice(0, 9))}
          aria-invalid={error ? true : undefined}
          aria-describedby={`${id}-hint${error ? ` ${id}-err` : ''}`}
          className="field !rounded-2xl !py-4 !pl-12 font-heading text-2xl font-bold text-navy placeholder:text-base placeholder:font-normal"
        />
      </div>
      <p id={`${id}-hint`} className={`mt-1.5 text-sm ${dark ? 'text-white/70' : 'text-charcoal/65'}`}>Minimum gift {formatNaira(DONATION.min)}.</p>
      {error && <p id={`${id}-err`} role="alert" className={`mt-1 text-sm font-semibold ${dark ? 'text-red-200' : 'text-red-700'}`}>{error}</p>}

      <p className={`mb-2 mt-5 text-sm font-semibold ${dark ? 'text-white' : 'text-navy'}`}>Or choose an amount</p>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4" role="group" aria-label="Preset donation amounts">
        {DONATION.presets.map((p) => {
          const on = selected === p
          return (
            <button
              key={p}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(String(p))}
              className={`min-h-[48px] rounded-2xl border px-2 text-sm font-bold transition sm:text-[0.95rem] ${
                on
                  ? dark ? 'border-white bg-white text-navy shadow-soft' : 'border-ocean bg-grad-ocean text-white shadow-glow'
                  : dark ? 'border-white/30 text-white hover:bg-white/15' : 'border-navy/15 bg-white text-navy hover:border-ocean hover:bg-ocean-50'
              }`}
            >
              {formatNaira(p)}
            </button>
          )
        })}
      </div>
    </div>
  )
}
