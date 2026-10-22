import { IMAGES } from '@/content/images'
import Photo from '@/components/ui/Photo'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

/** Photo grid. Edit the six photos in src/content/images.ts (gallery). */
const SPANS = ['md:col-span-2 md:row-span-2', '', '', 'md:row-span-2', '', 'md:col-span-2']

export default function PhotoGallery() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="In the community" title="Life across the communities we serve" />
            <Button to="/impact/stories" variant="outline" size="sm">See impact stories</Button>
          </div>
        </Reveal>
        <ul className="mt-12 grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[13rem] sm:gap-4 md:grid-cols-4">
          {IMAGES.gallery.map((img, i) => (
            <li key={i} className={`overflow-hidden rounded-3xl shadow-soft ${SPANS[i] ?? ''}`}>
              <Photo image={img} ratio="h-full w-full" className="h-full w-full" imgClassName="transition duration-700 hover:scale-105" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
