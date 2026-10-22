import { useState, type ReactNode } from 'react'
import type { ImageSlot } from '@/content/images'

interface Props {
  image: ImageSlot
  /** Tailwind aspect ratio class, for example aspect-[4/3]. */
  ratio?: string
  className?: string
  imgClassName?: string
  /** Set on the first large image of a page (hero) so it loads early. */
  priority?: boolean
  /** Overlay content (badges, captions) placed on top of the photo. */
  children?: ReactNode
}

/** Responsive photo that fills its box, crops neatly and falls back to a gradient if the file is missing. */
export default function Photo({ image, ratio = 'aspect-[4/3]', className = '', imgClassName = '', priority = false, children }: Props) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`relative isolate overflow-hidden bg-grad-ocean ${ratio} ${className}`}>
      {!failed && (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width ?? 1600}
          height={image.height ?? 1200}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          {...(priority ? { fetchPriority: 'high' as const } : {})}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
          style={image.position ? { objectPosition: image.position } : undefined}
        />
      )}
      {children}
    </div>
  )
}
