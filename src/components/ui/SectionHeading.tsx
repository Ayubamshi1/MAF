import type { ReactNode } from 'react'

interface Props {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  as?: 'h1' | 'h2' | 'h3'
}

export default function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'dark', as: Tag = 'h2' }: Props) {
  const light = tone === 'light'
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className={`mb-3 text-sm font-semibold ${light ? 'text-sky-300' : 'text-leaf-dark'}`}>{eyebrow}</p>}
      <Tag className={`text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem] ${light ? '!text-white' : ''}`}>{title}</Tag>
      {description && <p className={`mt-4 text-lg ${light ? 'text-white/80' : 'text-charcoal/75'}`}>{description}</p>}
    </div>
  )
}
