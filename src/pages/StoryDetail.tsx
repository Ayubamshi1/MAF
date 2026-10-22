import { Link, useParams } from 'react-router-dom'
import { Quote } from 'lucide-react'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import Photo from '@/components/ui/Photo'
import SectionHeading from '@/components/ui/SectionHeading'
import { STORIES } from '@/content/stories'
import { storyImage } from '@/content/images'
import JsonLd from '@/components/common/JsonLd'
import { articleSchema } from '@/lib/schema'
import NotFound from './NotFound'

export default function StoryDetail() {
  const { slug = '' } = useParams()
  const story = STORIES.find((s) => s.slug === slug)
  if (!story) return <NotFound />
  const more = STORIES.filter((s) => s.slug !== slug).slice(0, 3)
  return (
    <>
      <Seo title={story.title} description={story.quote} image={storyImage(story.slug).src} />
      <JsonLd data={articleSchema(story, storyImage(story.slug).src)} />
      <PageHero image={storyImage(story.slug)} title={story.title} description={`${story.name} · ${story.detail}`} trail={[{ label: 'Home', to: '/' }, { label: 'Impact', to: '/impact' }, { label: 'Stories', to: '/impact/stories' }, { label: story.name }]} />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          <article>
            <blockquote className="relative rounded-[2rem] bg-gradient-to-br from-ocean-50 to-leaf-100/60 p-8 font-heading text-2xl font-semibold leading-snug text-navy sm:p-10"><Quote aria-hidden className="absolute right-6 top-6 h-12 w-12 text-ocean/15" />“{story.quote}”</blockquote>
            <div className="prose-soft mt-8 max-w-2xl text-lg text-charcoal/85">{story.body.map((p) => <p key={p}>{p}</p>)}</div>
          </article>
          <aside className="space-y-6">
            <Photo image={storyImage(story.slug)} ratio="aspect-[4/5]" className="rounded-[2rem] shadow-lift" />
            <dl className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm">
              <div><dt className="text-sm text-charcoal/65">Program</dt><dd className="font-bold text-navy">{story.program}</dd></div>
              <div className="mt-4"><dt className="text-sm text-charcoal/65">Location</dt><dd className="font-bold text-navy">{story.location}</dd></div>
            </dl>
          </aside>
        </div>
      </section>
      <section className="section bg-mist/70">
        <div className="container-x">
          <SectionHeading title="More stories" />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {more.map((s) => (
              <li key={s.slug}><Link to={`/impact/stories/${s.slug}`} className="group block overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lift"><Photo image={storyImage(s.slug)} ratio="aspect-[4/3]" /><span className="block p-5 text-lg font-bold text-navy">{s.title}</span></Link></li>
            ))}
          </ul>
        </div>
      </section>
      <div className="pt-20 sm:pt-28"><CtaBand title="Help write the next story" text="Give, volunteer or partner with us." /></div>
    </>
  )
}
