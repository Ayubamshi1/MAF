import { useState } from 'react'
import type { ImageSlot } from '@/content/images'

/** Full-bleed background photo with a colour overlay so text on top stays readable. Parent needs `relative isolate overflow-hidden`. */
export default function BgImage({ image, overlay = 'bg-gradient-to-b from-navy-900/85 via-navy/80 to-navy-900/90', priority = false }: { image: ImageSlot; overlay?: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false)
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-20">
      {!failed && (
        <img
          src={image.src}
          alt=""
          width={image.width ?? 1600}
          height={image.height ?? 1200}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          {...(priority ? { fetchPriority: 'high' as const } : {})}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
          style={image.position ? { objectPosition: image.position } : undefined}
        />
      )}
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  )
}
