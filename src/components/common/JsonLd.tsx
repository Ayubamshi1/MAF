import { Helmet } from 'react-helmet-async'

/** Adds schema.org structured data to the page head. Pass one object or several. */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const graph = Array.isArray(data) ? data : [data]
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
  return (
    <Helmet>
      <script type="application/ld+json">{json}</script>
    </Helmet>
  )
}
