import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { formatNumber } from '@/lib/format'

/** Counts up once when scrolled into view. Shows the final number immediately for reduced-motion users. */
export default function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? value : 0)

  useEffect(() => {
    if (reduce) {
      setN(value)
      return
    }
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setN(value)
      return
    }
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const dur = 1400
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur)
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, reduce])

  return (
    <span ref={ref} aria-label={`${formatNumber(value)}${suffix}`}>
      <span aria-hidden="true">
        {formatNumber(n)}
        {suffix}
      </span>
    </span>
  )
}
