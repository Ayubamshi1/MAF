import type { ChangeEvent } from 'react'
import type { FieldDef } from '@/content/forms'
import { digitsOnly } from '@/lib/format'

interface Props {
  field: FieldDef
  id: string
  value: string
  error?: string
  onChange: (name: string, value: string) => void
  onBlur: (name: string) => void
}

const todayIso = () => new Date().toISOString().slice(0, 10)

export default function FormField({ field, id, value, error, onChange, onBlur }: Props) {
  const errId = `${id}-error`
  const hintId = `${id}-hint`
  const describedBy = [error ? errId : '', field.hint ? hintId : ''].filter(Boolean).join(' ') || undefined
  const common = {
    id,
    name: field.name,
    'aria-invalid': error ? (true as const) : undefined,
    'aria-describedby': describedBy,
    'aria-required': field.required || undefined,
    onBlur: () => onBlur(field.name),
  }
  const set = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => onChange(field.name, e.target.value)
  const span = field.full || field.type === 'textarea' ? 'sm:col-span-2' : ''

  if (field.type === 'checkbox') {
    return (
      <div className={`sm:col-span-2 ${span}`}>
        <label htmlFor={id} className="flex cursor-pointer items-start gap-3 rounded-2xl border border-navy/10 bg-mist/60 p-4 text-sm text-charcoal">
          <input
            {...common}
            type="checkbox"
            checked={value === 'yes'}
            onChange={(e) => onChange(field.name, e.target.checked ? 'yes' : '')}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-navy/30 accent-ocean"
          />
          <span>
            {field.label}
            {field.required && <span className="text-red-700"> *</span>}
          </span>
        </label>
        {error && <p id={errId} role="alert" className="mt-1.5 text-sm font-medium text-red-700">{error}</p>}
      </div>
    )
  }

  return (
    <div className={span}>
      <label htmlFor={id} className="label">
        {field.label}
        {field.required ? <span className="text-red-700"> *</span> : <span className="font-normal text-charcoal/55"> (optional)</span>}
      </label>
      {field.type === 'textarea' ? (
        <textarea {...common} rows={field.rows ?? 4} maxLength={field.maxLength} value={value} onChange={set} placeholder={field.placeholder} className="field resize-y" />
      ) : field.type === 'select' ? (
        <select {...common} value={value} onChange={set} className="field field-select">
          <option value="">Select an option</option>
          {field.options?.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      ) : field.type === 'number' ? (
        <input
          {...common}
          type="text"
          inputMode="numeric"
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(field.name, digitsOnly(e.target.value).slice(0, 12))}
          placeholder={field.placeholder}
          className="field"
        />
      ) : field.type === 'date' ? (
        <input
          {...common}
          type="date"
          value={value}
          onChange={set}
          min={field.dateRange === 'future' ? todayIso() : undefined}
          max={field.dateRange === 'past' ? todayIso() : undefined}
          className="field"
        />
      ) : (
        <input {...common} type={field.type} autoComplete={field.autoComplete} maxLength={field.maxLength} value={value} onChange={set} placeholder={field.placeholder} className="field" />
      )}
      {field.hint && <p id={hintId} className="mt-1.5 text-sm text-charcoal/65">{field.hint}</p>}
      {error && <p id={errId} role="alert" className="mt-1.5 text-sm font-medium text-red-700">{error}</p>}
    </div>
  )
}
