/** Accessible row of filter buttons (toggle style). */
export default function FilterChips({ options, value, onChange, label }: { options: readonly string[]; value: string; onChange: (v: string) => void; label: string }) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button key={o} type="button" aria-pressed={value === o} onClick={() => onChange(o)} className={`min-h-[44px] rounded-full border px-5 text-sm font-semibold transition ${value === o ? 'border-ocean bg-ocean text-white shadow-soft' : 'border-navy/15 bg-white text-navy hover:border-ocean hover:bg-ocean-50'}`}>{o}</button>
      ))}
    </div>
  )
}
