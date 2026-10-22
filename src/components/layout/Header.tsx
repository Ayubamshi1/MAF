import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HandHeart } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`sticky top-0 z-40 border-b transition-all duration-300 ${scrolled ? 'border-navy/10 bg-white/85 shadow-soft backdrop-blur-xl' : 'border-transparent bg-white/95 backdrop-blur-md'}`}>
      <div className="container-x relative flex h-[76px] items-center justify-between gap-4">
        <Logo priority />
        <DesktopNav />
        <div className="flex items-center gap-2.5">
          <Link to="/donate" className="btn btn-primary btn-sm">
            <HandHeart aria-hidden className="h-4 w-4" /> Donate
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
