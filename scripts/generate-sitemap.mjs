// Generates public/sitemap.xml and public/robots.txt from the routes and content files.
// Runs automatically before `npm run build`, or manually with `npm run sitemap`.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = (f) => fs.readFileSync(path.join(root, f), 'utf8')

function envValue(name) {
  if (process.env[name]) return process.env[name]
  for (const f of ['.env.local', '.env']) {
    const p = path.join(root, f)
    if (!fs.existsSync(p)) continue
    const m = fs.readFileSync(p, 'utf8').match(new RegExp(`^${name}=(.*)$`, 'm'))
    if (m) return m[1].trim()
  }
  return ''
}

const SITE = (envValue('VITE_SITE_URL') || 'https://margaretamshifoundation.org').replace(/\/$/, '')
const slugs = (file) => [...read(file).matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])

// Static routes come from src/App.tsx (paths without parameters)
const staticPaths = ['/', ...[...read('src/App.tsx').matchAll(/path="([^"]+)"/g)].map((m) => `/${m[1]}`).filter((p) => !p.includes(':') && p !== '/*')]

const dynamic = [
  ...slugs('src/content/programDetails.ts').map((s) => `/programs/${s}`),
  ...slugs('src/content/involve.ts').map((s) => `/get-involved/${s}`),
  ...slugs('src/content/news.ts').map((s) => `/news/${s}`),
  ...slugs('src/content/events.ts').map((s) => `/events/${s}`),
  ...slugs('src/content/stories.ts').map((s) => `/impact/stories/${s}`),
  ...slugs('src/content/careers.ts').map((s) => `/careers/${s}`),
]

const all = Array.from(new Set([...staticPaths, ...dynamic])).sort()
const today = new Date().toISOString().slice(0, 10)
const depth = (p) => (p === '/' ? 0 : p.split('/').filter(Boolean).length)
const priority = (p) => (p === '/' ? '1.0' : p === '/donate' ? '0.9' : depth(p) === 1 ? '0.8' : '0.6')
const freq = (p) => (p === '/' || p.startsWith('/news') || p.startsWith('/events') ? 'weekly' : 'monthly')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map((p) => `  <url><loc>${SITE}${p === '/' ? '' : p}</loc><lastmod>${today}</lastmod><changefreq>${freq(p)}</changefreq><priority>${priority(p)}</priority></url>`).join('\n')}
</urlset>
`
fs.writeFileSync(path.join(root, 'public/sitemap.xml'), xml)
fs.writeFileSync(path.join(root, 'public/robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)
console.log(`sitemap: ${all.length} URLs for ${SITE}`)
