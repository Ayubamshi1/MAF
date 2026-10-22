import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import type { SVGProps } from 'react'

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' } as const
type P = SVGProps<SVGSVGElement>

const X = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M4 4l16 16M20 4L4 20" /></svg>
)
const TikTok = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M14 3v11.5a4.5 4.5 0 1 1-4.5-4.5" /><path d="M14 3c.4 2.6 2.2 4.2 5 4.4" /></svg>
)
const Medium = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><circle cx="7.5" cy="12" r="4.5" /><ellipse cx="16" cy="12" rx="2.3" ry="4.5" /><path d="M21 8v8" /></svg>
)
const Pinterest = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><circle cx="12" cy="12" r="9" /><path d="M11 20l1.6-7" /><path d="M9.3 11.2c0-1.7 1.3-3 3-3s2.9 1.2 2.9 2.8c0 1.9-1.2 3.3-2.7 3.3-.8 0-1.4-.4-1.6-1" /></svg>
)

/** Brand glyphs. lucide icons where available, simple outline glyphs for the rest. */
export const SOCIAL_ICONS: Record<string, (p: P) => JSX.Element> = {
  facebook: (p) => <Facebook {...(p as object)} />,
  instagram: (p) => <Instagram {...(p as object)} />,
  linkedin: (p) => <Linkedin {...(p as object)} />,
  youtube: (p) => <Youtube {...(p as object)} />,
  x: X,
  tiktok: TikTok,
  medium: Medium,
  pinterest: Pinterest,
}
