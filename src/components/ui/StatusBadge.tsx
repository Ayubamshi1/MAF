const TONES: Record<string, string> = {
  Open: 'bg-leaf-100 text-leaf-dark ring-leaf/30',
  'Opening soon': 'bg-sky-100 text-ocean ring-sky/40',
  Rolling: 'bg-ocean-50 text-ocean ring-ocean/20',
  Closed: 'bg-navy/5 text-charcoal/70 ring-navy/10',
  Completed: 'bg-leaf-100 text-leaf-dark ring-leaf/30',
  'On track': 'bg-sky-100 text-ocean ring-sky/40',
  'In progress': 'bg-amber-50 text-amber-900 ring-amber-200',
}
export default function StatusBadge({ status }: { status: string }) {
  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ring-1 ${TONES[status] ?? TONES.Closed}`}>{status}</span>
}
