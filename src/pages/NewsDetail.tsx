import { Link, useParams } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import Photo from '@/components/ui/Photo'
import SectionHeading from '@/components/ui/SectionHeading'
import { NEWS } from '@/content/news'
import { newsImage } from '@/content/images'
import { SITE } from '@/config/site'
import { formatDate } from '@/lib/format'
import JsonLd from '@/components/common/JsonLd'
import { blogPostingSchema } from '@/lib/schema'
import NotFound from './NotFound'

export default function NewsDetail() {
  const { slug = '' } = useParams()
  const post = NEWS.find((n) => n.slug === slug)
  if (!post) return <NotFound />
  const more = NEWS.filter((n) => n.slug !== slug).slice(0, 3)
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(`${post.title} ${SITE.url}/news/${post.slug}`)}`
  return (
    <>
      <Seo title={post.title} description={post.excerpt} image={newsImage(post.slug).src} />
      <JsonLd data={blogPostingSchema(post, newsImage(post.slug).src)} />
      <PageHero image={newsImage(post.slug)} title={post.title} description={`${post.category} · ${formatDate(post.date)}`} trail={[{ label: 'Home', to: '/' }, { label: 'News', to: '/news' }, { label: post.category }]} />
      <section className="section">
        <div className="container-x">
          <article className="mx-auto max-w-3xl">
            <Photo image={newsImage(post.slug)} ratio="aspect-[16/9]" className="rounded-[2rem] shadow-lift" />
            <p className="mt-6 text-sm text-charcoal/65">By {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time></p>
            <div className="prose-soft mt-6 text-lg text-charcoal/85">{post.body.map((p) => <p key={p}>{p}</p>)}</div>
            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-navy/10 pt-6">
              <a href={shareUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm"><MessageCircle aria-hidden className="h-4 w-4" /> Share on WhatsApp</a>
              <Link to="/news" className="link-inline">Back to all news</Link>
            </div>
          </article>
        </div>
      </section>
      <section className="section bg-mist/70">
        <div className="container-x">
          <SectionHeading title="More news" />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {more.map((n) => <li key={n.slug}><Link to={`/news/${n.slug}`} className="group block overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lift"><Photo image={newsImage(n.slug)} ratio="aspect-[16/9]" /><span className="block p-5 text-lg font-bold text-navy">{n.title}</span></Link></li>)}
          </ul>
        </div>
      </section>
      <div className="pt-20 sm:pt-28"><CtaBand title="Support our work" text="Give, volunteer or partner with us." /></div>
    </>
  )
}
