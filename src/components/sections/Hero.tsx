import { m, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Lock, ShieldCheck, Users } from 'lucide-react'
import Swoosh from '@/components/ui/Swoosh'
import QuickDonate from '@/components/donation/QuickDonate'
import { ABOUT_TEXT } from '@/content/values'
import { IMAGES } from '@/content/images'
import BgImage from '@/components/ui/BgImage'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } } }

export default function Hero() {
  const reduce = useReducedMotion()
  return (
    <section className="on-dark relative isolate overflow-hidden bg-grad-deep text-white">
      <BgImage image={IMAGES.hero} priority overlay="bg-gradient-to-r from-navy-900/95 via-navy/85 to-ocean/65" />
      <div aria-hidden className="absolute -left-32 -top-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-sky/25 blur-3xl" />
      <div aria-hidden className="absolute -bottom-20 right-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-leaf/25 blur-3xl" />

      <div className="container-x grid items-center gap-12 pb-44 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-52">
        <m.div variants={container} initial={reduce ? 'show' : 'hidden'} animate="show">
          <m.h1 variants={item} className="text-[2.6rem] font-extrabold leading-[1.05] !text-white sm:text-6xl lg:text-7xl">
            Enduring generosity.
            <span className="mt-1 block text-sky">Thriving communities.</span>
          </m.h1>
          <m.p variants={item} className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">{ABOUT_TEXT}</m.p>
          <m.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <Link to="/donate" className="btn btn-light btn-lg">Donate now</Link>
            <Link to="/programs" className="btn btn-ghost btn-lg">Explore programs</Link>
          </m.div>
          <m.ul variants={item} className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-white/85">
            <li className="flex items-center gap-2"><Lock aria-hidden className="h-4 w-4 text-sky" /> Secure giving with Paystack</li>
            <li className="flex items-center gap-2"><ShieldCheck aria-hidden className="h-4 w-4 text-sky" /> Transparent reporting</li>
            <li className="flex items-center gap-2"><Users aria-hidden className="h-4 w-4 text-sky" /> Community-led programs</li>
          </m.ul>
        </m.div>

        <m.div initial={reduce ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
          <QuickDonate tone="dark" />
        </m.div>
      </div>
      <Swoosh />
    </section>
  )
}
