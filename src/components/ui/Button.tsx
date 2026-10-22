import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react'

type Variant = 'primary' | 'leaf' | 'outline' | 'light' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'> {
  variant?: Variant
  size?: Size
  /** Internal route. Renders a router Link. */
  to?: string
  /** External or tel:/mailto: URL. Renders an anchor. */
  href?: string
  type?: 'button' | 'submit'
  onClick?: MouseEventHandler<HTMLElement>
  children: ReactNode
}

const sizeClass: Record<Size, string> = { sm: 'btn-sm', md: '', lg: 'btn-lg' }

export default function Button({ variant = 'primary', size = 'md', className = '', to, href, type = 'button', onClick, children, ...rest }: Props) {
  const cls = `btn btn-${variant} ${sizeClass[size]} ${className}`.trim()
  const aria = rest['aria-label']

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick} aria-label={aria}>
        {children}
      </Link>
    )
  }
  if (href) {
    const web = /^https?:/.test(href)
    return (
      <a href={href} className={cls} onClick={onClick} aria-label={aria} {...(web ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={cls} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
