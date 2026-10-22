import { m, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

/** Gentle scroll reveal. Used on section content only, never on every card. */
export default function Reveal({ children, delay = 0, y = 18, className = '' }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <m.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  )
}
