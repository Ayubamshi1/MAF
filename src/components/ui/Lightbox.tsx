import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, m } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryItem } from '@/content/images'

interface Props {
  items: GalleryItem[]
  /** Index of the photo to show, or null when closed. */
  index: number | null
  onClose: () => void
  onIndex: (i: number) => void
}

/** Full-screen photo viewer. Keyboard: Esc closes, arrow keys move, Tab stays inside. */
export default function Lightbox({ items, index, onClose, onIndex }: Props) {
  const open = index !== null
  const n = items.length
  const closeBtn = useRef<HTMLButtonElement>(null)
  const dialog = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const opener = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()
    return () => {
      document.body.style.overflow = ''
      opener?.focus?.()
    }
  }, [open])

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') onIndex((index + 1) % n)
      else if (e.key === 'ArrowLeft') onIndex((index - 1 + n) % n)
      else if (e.key === 'Tab' && dialog.current) {
        const f = Array.from(dialog.current.querySelectorAll<HTMLElement>('button'))
        if (!f.length) return
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [index, n, onClose, onIndex])

  const item = index !== null ? items[index] : null
  return createPortal(
    <AnimatePresence>
      {open && item && (
        <m.div
          key="lightbox"
          ref={dialog}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-navy-900/95 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button ref={closeBtn} type="button" aria-label="Close photo viewer" onClick={onClose} className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 sm:right-8 sm:top-8">
            <X aria-hidden className="h-6 w-6" />
          </button>
          <figure className="flex max-h-full w-full max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={item.src} alt={item.alt} className="max-h-[70vh] w-auto max-w-full rounded-3xl object-contain shadow-lift" />
            <figcaption className="mt-5 text-center text-white">
              <p className="text-lg font-semibold">{item.caption}</p>
              <p className="mt-1 text-sm text-white/70" aria-live="polite">{(index ?? 0) + 1} of {n}</p>
            </figcaption>
          </figure>
          {n > 1 && (
            <>
              <button type="button" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); onIndex(((index ?? 0) - 1 + n) % n) }} className="absolute left-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 sm:left-8">
                <ChevronLeft aria-hidden className="h-6 w-6" />
              </button>
              <button type="button" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); onIndex(((index ?? 0) + 1) % n) }} className="absolute right-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 sm:right-8">
                <ChevronRight aria-hidden className="h-6 w-6" />
              </button>
            </>
          )}
        </m.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
