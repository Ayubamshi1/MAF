import { useState } from 'react'
import { AlertTriangle, Check, Copy, Landmark } from 'lucide-react'
import { SITE } from '@/config/site'
import { copyText } from '@/lib/format'
import { trackEvent } from '@/lib/analytics'
import WhatsAppForm from '@/components/forms/WhatsAppForm'

export default function BankTransfer() {
  const [copied, setCopied] = useState(false)
  const [which, setWhich] = useState<'transfer-notification' | 'receipt-request'>('transfer-notification')
  const { bank } = SITE

  const copy = async () => {
    const ok = await copyText(bank.accountNumber)
    setCopied(ok)
    if (ok) {
      trackEvent('bank_details_copied')
      window.setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <div>
      <div className="overflow-hidden rounded-[2rem] bg-grad-deep p-6 text-white shadow-glow sm:p-8">
        <p className="flex items-center gap-2 text-sm font-semibold text-sky-300"><Landmark aria-hidden className="h-5 w-5" /> Bank transfer</p>
        <dl className="mt-5 grid gap-5 sm:grid-cols-2">
          <div><dt className="text-sm text-white/65">Bank</dt><dd className="text-lg font-bold">{bank.bankName}</dd></div>
          <div><dt className="text-sm text-white/65">Account name</dt><dd className="text-lg font-bold">{bank.accountName}</dd></div>
          <div className="sm:col-span-2">
            <dt className="text-sm text-white/65">Account number ({bank.currency})</dt>
            <dd className="mt-1 flex flex-wrap items-center gap-4">
              <span className="font-heading text-4xl font-extrabold tracking-wider">{bank.accountNumber}</span>
              <button type="button" onClick={copy} className="btn btn-light btn-sm">
                {copied ? <><Check aria-hidden className="h-4 w-4 text-leaf-dark" /> Copied</> : <><Copy aria-hidden className="h-4 w-4" /> Copy account number</>}
              </button>
            </dd>
          </div>
        </dl>
        <p className="sr-only" role="status" aria-live="polite">{copied ? 'Account number copied to clipboard' : ''}</p>
      </div>

      <p className="mt-5 flex gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        <AlertTriangle aria-hidden className="mt-0.5 h-5 w-5 shrink-0" />
        Always confirm our account details on this website or by calling our official numbers before you send a transfer.
      </p>

      <div className="mt-10">
        <div role="group" aria-label="Choose a form" className="inline-flex rounded-full bg-mist p-1">
          {([['transfer-notification', 'I have made a transfer'], ['receipt-request', 'Request a receipt']] as const).map(([k, label]) => (
            <button key={k} type="button" aria-pressed={which === k} onClick={() => setWhich(k)} className={`min-h-[44px] rounded-full px-5 text-sm font-semibold transition ${which === k ? 'bg-white text-ocean shadow-soft' : 'text-navy/70 hover:text-navy'}`}>
              {label}
            </button>
          ))}
        </div>
        <div className="mt-6">
          <WhatsAppForm key={which} formKey={which} heading={null} />
        </div>
      </div>
    </div>
  )
}
