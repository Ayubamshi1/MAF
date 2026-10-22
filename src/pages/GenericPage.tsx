import { Link, useLocation } from 'react-router-dom'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import { findRoute } from '@/content/navigation'
import { getIcon } from '@/lib/icons'
import Photo from '@/components/ui/Photo'
import { IMAGES, programImage } from '@/content/images'
import NotFound from './NotFound'

/**
 * Template used for pages whose full content is added in the next stages
 * (About, Programs, Impact, News, Resources, Legal). Content comes from src/content/navigation.ts.
 */
export default function GenericPage() {
  const { pathname } = useLocation()
  const info = findRoute(pathname)
  if (!info) return <NotFound />
  const description = info.description || `Explore ${info.title.toLowerCase()} at Margaret Amshi Foundation.`
  return (
    <>
      <Seo title={info.title} description={description} />
      <PageHero title={info.title} description={description} actions={<><Button to="/donate" variant="light">Donate</Button><Button to="/contact" variant="ghost">Contact us</Button></>} />
      <section className="section">
        <div className="container-x">
          {info.siblings.length > 0 && (
            <>
              <SectionHeading title="Explore more" description="Related pages in this section." />
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {info.siblings.map((s) => {
                  const Icon = getIcon(s.icon)
                  return (
                    <li key={s.to}>
                      <Link to={s.to} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
                        <Photo image={s.to.startsWith('/programs/') ? programImage(s.to.replace('/programs/', '')) : IMAGES.generic} ratio="aspect-[16/9]" imgClassName="transition duration-500 group-hover:scale-105">
                          <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ocean text-white shadow-soft"><Icon aria-hidden className="h-5 w-5" /></span>
                        </Photo>
                        <span className="block p-5"><span className="block text-lg font-bold text-navy">{s.label}</span><span className="text-sm text-charcoal/70">{s.description}</span></span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </>
          )}
        </div>
      </section>
    </>
  )
}
