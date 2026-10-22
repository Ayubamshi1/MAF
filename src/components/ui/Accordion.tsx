import { useId, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'

export interface AccordionItem {
  q: string
  a: string
}

export default function Accordion({ items, defaultOpen = 0 }: { items: AccordionItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen)
  const base = useId()
  return (
    <div className="divide-y divide-navy/10 overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-soft">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q}>
            <h3 className="!text-base !font-semibold">
              <button
                type="button"
                id={`${base}-b${i}`}
                aria-expanded={isOpen}
                aria-controls={`${base}-p${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-navy transition hover:bg-mist sm:px-7"
              >
                <span>{item.q}</span>
                {isOpen ? <Minus aria-hidden className="h-5 w-5 shrink-0 text-ocean" /> : <Plus aria-hidden className="h-5 w-5 shrink-0 text-ocean" />}
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <m.div
                  id={`${base}-p${i}`}
                  role="region"
                  aria-labelledby={`${base}-b${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-6 pt-1 text-charcoal/80 sm:px-7">{item.a}</p>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
