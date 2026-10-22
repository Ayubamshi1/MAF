import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from 'lucide-react'
import { STORIES } from '@/content/stories'
import { getIcon } from '@/lib/icons'
import { storyImage } from '@/content/images'
import Photo from '@/components/ui/Photo'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'

export default function StoriesCarousel() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  const [playing, setPlaying] = useState(false)
  const n = STORIES.length
  const story = STORIES[i]
  const Icon = getIcon(story.icon)

  // Autoplay is opt-in for reduced-motion users and can always be paused.
  useEffect(() => setPlaying(!reduce), [reduce])
  useEffect(() => {
    if (!playing) return
    const id = window.setInterval(() => setI((x) => (x + 1) % n), 8000)
    return () => window.clearInterval(id)
  }, [playing, n])

  const go = (d: number) => setI((x) => (x + d + n) % n)

  return (
    <section className="section" aria-roledescription="carousel" aria-label="Impact stories">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Impact stories" title="Real people. Lasting change." />
          <Button to="/impact/stories" variant="outline" size="sm">Read more stories</Button>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[2.5rem] bg-grad-ocean p-8 text-white shadow-glow sm:p-14">
          <Quote aria-hidden className="absolute right-8 top-8 h-32 w-32 text-white/10 sm:h-48 sm:w-48" />
          <div aria-live={playing ? 'off' : 'polite'} className="relative min-h-[28rem] md:min-h-[24rem]">
            <AnimatePresence mode="wait" initial={false}>
              <m.figure key={story.slug} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${n}`} className="grid items-center gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-12" initial={{ opacity: 0, x: reduce ? 0 : 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: reduce ? 0 : -24 }} transition={{ duration: 0.4 }}>
                <Photo image={storyImage(story.slug)} ratio="aspect-[4/3] md:aspect-[4/5]" className="rounded-[2rem] ring-4 ring-white/25 shadow-lift" />
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold"><Icon aria-hidden className="h-4 w-4" /> {story.program}</p>
                  <blockquote className="mt-6 max-w-3xl font-heading text-xl font-semibold leading-snug sm:text-2xl lg:text-3xl">{story.quote}</blockquote>
                  <figcaption className="mt-6 text-white/85"><span className="font-bold text-white">{story.name}</span> · {story.detail}</figcaption>
                  <Link to={`/impact/stories/${story.slug}`} className="mt-5 inline-block font-semibold text-white underline decoration-sky decoration-2 underline-offset-4 hover:text-sky-100">Read the full story</Link>
                </div>
              </m.figure>
            </AnimatePresence>
          </div>

          <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2" role="group" aria-label="Choose a story">
              {STORIES.map((s, k) => (
                <button key={s.slug} type="button" aria-label={`Show story ${k + 1}`} aria-current={k === i} onClick={() => setI(k)} className={`h-3 rounded-full transition-all ${k === i ? 'w-10 bg-white' : 'w-3 bg-white/40 hover:bg-white/70'}`} />
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" aria-label={playing ? 'Pause automatic slides' : 'Play automatic slides'} onClick={() => setPlaying((p) => !p)} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 hover:bg-white/15">
                {playing ? <Pause aria-hidden className="h-5 w-5" /> : <Play aria-hidden className="h-5 w-5" />}
              </button>
              <button type="button" aria-label="Previous story" onClick={() => go(-1)} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 hover:bg-white/15"><ChevronLeft aria-hidden className="h-5 w-5" /></button>
              <button type="button" aria-label="Next story" onClick={() => go(1)} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 hover:bg-white/15"><ChevronRight aria-hidden className="h-5 w-5" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
