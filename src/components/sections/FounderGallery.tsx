import { useState } from 'react'
import { Expand } from 'lucide-react'
import { IMAGES } from '@/content/images'
import { GALLERY_CATEGORIES } from '@/content/founder'
import Photo from '@/components/ui/Photo'
import Lightbox from '@/components/ui/Lightbox'
import FilterChips from '@/components/ui/FilterChips'

/** Photo gallery with category filter and full-screen viewer. Edit the photos in src/content/images.ts. */
export default function FounderGallery() {
  const [cat, setCat] = useState<string>('All')
  const [open, setOpen] = useState<number | null>(null)
  const items = cat === 'All' ? IMAGES.founderGallery : IMAGES.founderGallery.filter((g) => g.category === cat)
  return (
    <div>
      <FilterChips label="Filter gallery by category" options={GALLERY_CATEGORIES} value={cat} onChange={(v) => { setCat(v); setOpen(null) }} />
      <p className="sr-only" role="status" aria-live="polite">{items.length} photos shown</p>
      <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {items.map((g, i) => (
          <li key={g.caption} className={cat === 'All' && i === 0 ? 'col-span-2 row-span-2' : ''}>
            <button type="button" onClick={() => setOpen(i)} aria-label={`Open photo: ${g.caption}`} className="group relative block h-full w-full overflow-hidden rounded-3xl shadow-soft focus-visible:outline-offset-4">
              <Photo image={g} ratio={cat === 'All' && i === 0 ? 'aspect-square sm:aspect-[4/3]' : 'aspect-[4/3]'} className="h-full w-full" imgClassName="transition duration-700 group-hover:scale-105" />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-navy-900/85 via-navy-900/30 to-transparent p-4 pt-14 text-left text-white opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                <span className="text-sm font-semibold sm:text-base">{g.caption}</span>
                <Expand aria-hidden className="h-5 w-5 shrink-0" />
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </div>
  )
}
