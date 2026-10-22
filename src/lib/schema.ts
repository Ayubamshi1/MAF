import { SITE } from '@/config/site'
import type { Course } from '@/content/courses'
import type { EventItem } from '@/content/events'
import type { NewsPost } from '@/content/news'
import type { Story } from '@/content/stories'

type Json = Record<string, unknown>

export const absUrl = (path: string) => `${SITE.url}${path === '/' ? '' : path}`
const socialUrls = () => SITE.socials.filter((s) => s.url).map((s) => s.url)
const address = { '@type': 'PostalAddress', addressCountry: 'NG' }
const orgRef = { '@type': 'NGO', name: SITE.name, url: SITE.url }

export const organizationSchema = (): Json => ({
  '@type': 'NGO',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: absUrl('/icons/icon-512.png'),
  image: absUrl('/og-image.png'),
  description: SITE.description,
  slogan: SITE.tagline,
  founder: { '@type': 'Person', name: 'Margaret Amshi', url: absUrl('/about/founder') },
  email: SITE.email,
  telephone: SITE.phones[0].tel,
  address,
  areaServed: { '@type': 'Country', name: 'Nigeria' },
  sameAs: socialUrls(),
  contactPoint: SITE.phones.map((p) => ({ '@type': 'ContactPoint', telephone: p.tel, contactType: 'customer support', areaServed: 'NG', availableLanguage: ['English'] })),
})

export const websiteSchema = (): Json => ({
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  inLanguage: 'en-NG',
  publisher: { '@id': `${SITE.url}/#organization` },
  potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/faqs?q={search_term_string}` }, 'query-input': 'required name=search_term_string' },
})

export const localBusinessSchema = (): Json => ({
  '@type': ['NGO', 'LocalBusiness'],
  '@id': `${SITE.url}/#localbusiness`,
  name: SITE.name,
  url: SITE.url,
  image: absUrl('/og-image.png'),
  telephone: SITE.phones[0].tel,
  email: SITE.email,
  address,
  hasMap: SITE.map.directionsUrl,
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:30', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '14:00' },
  ],
})

export const contactPageSchema = (): Json => ({
  '@type': 'ContactPage',
  '@id': `${SITE.url}/contact#page`,
  url: absUrl('/contact'),
  name: `Contact ${SITE.name}`,
  mainEntity: { '@id': `${SITE.url}/#organization` },
})

export const breadcrumbSchema = (items: { name: string; path: string }[]): Json => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: absUrl(it.path) })),
})

export const faqSchema = (faqs: { q: string; a: string }[]): Json => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
})

export const courseSchema = (c: Course): Json => ({
  '@type': 'Course',
  name: c.title,
  description: c.summary,
  provider: orgRef,
  courseMode: c.mode === 'Online' ? 'online' : c.mode === 'Hybrid' ? ['onsite', 'online'] : 'onsite',
  educationalLevel: c.eligibility,
  ...(c.fee.toLowerCase().startsWith('free') ? { offers: { '@type': 'Offer', price: 0, priceCurrency: 'NGN', category: 'Free' } } : {}),
  hasCourseInstance: { '@type': 'CourseInstance', courseMode: c.mode === 'Online' ? 'online' : 'onsite', courseWorkload: c.duration, description: c.schedule },
})

export const eventSchema = (e: EventItem, image: string): Json => ({
  '@type': 'Event',
  name: e.title,
  description: e.summary,
  startDate: e.date,
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  isAccessibleForFree: e.free,
  image: [image.startsWith('http') ? image : absUrl(image)],
  location: { '@type': 'Place', name: e.venue, address: { '@type': 'PostalAddress', addressLocality: e.venue, addressCountry: 'NG' } },
  organizer: orgRef,
  ...(e.free ? { offers: { '@type': 'Offer', price: 0, priceCurrency: 'NGN', availability: 'https://schema.org/InStock', url: absUrl(`/events/${e.slug}`) } } : {}),
})

export const blogPostingSchema = (n: NewsPost, image: string): Json => ({
  '@type': 'BlogPosting',
  headline: n.title,
  description: n.excerpt,
  datePublished: n.date,
  dateModified: n.date,
  image: [image.startsWith('http') ? image : absUrl(image)],
  author: { '@type': 'Organization', name: n.author || SITE.name },
  publisher: { '@id': `${SITE.url}/#organization` },
  mainEntityOfPage: absUrl(`/news/${n.slug}`),
})

export const personSchema = (image: string): Json => ({
  '@type': 'Person',
  '@id': `${SITE.url}/about/founder#person`,
  name: 'Margaret Amshi',
  jobTitle: 'Founder',
  description: 'Founder of Margaret Amshi Foundation, working across Nigeria in education, women’s empowerment and community care.',
  image: image.startsWith('http') ? image : absUrl(image),
  url: absUrl('/about/founder'),
  worksFor: { '@id': `${SITE.url}/#organization` },
})

export const articleSchema = (s: Story, image: string): Json => ({
  '@type': 'Article',
  headline: s.title,
  description: s.quote,
  image: [image.startsWith('http') ? image : absUrl(image)],
  author: { '@type': 'Organization', name: SITE.name },
  publisher: { '@id': `${SITE.url}/#organization` },
  mainEntityOfPage: absUrl(`/impact/stories/${s.slug}`),
})
