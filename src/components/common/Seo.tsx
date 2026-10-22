import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { SITE } from '@/config/site'

interface Props {
  title?: string
  description?: string
  image?: string
  noindex?: boolean
}

/** Per-page title, description, canonical URL, Open Graph and Twitter tags. */
export default function Seo({ title, description = SITE.description, image = '/og-image.png', noindex = false }: Props) {
  const { pathname } = useLocation()
  const full = title ? `${title} | ${SITE.name}` : `${SITE.name} | ${SITE.tagline}`
  const url = `${SITE.url}${pathname === '/' ? '' : pathname}`
  const img = image.startsWith('http') ? image : `${SITE.url}${image}`
  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large'} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="en_NG" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  )
}
