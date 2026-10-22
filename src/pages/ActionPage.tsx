import { useParams } from 'react-router-dom'
import { INVOLVE } from '@/content/involve'
import DetailPage from './DetailPage'
import NotFound from './NotFound'

/** Fundraise, Volunteer, Become a Member, Refer Someone and How to Partner. */
export default function ActionPage() {
  const { slug = '' } = useParams()
  const content = INVOLVE[slug]
  if (!content) return <NotFound />
  return <DetailPage content={content} parent={{ label: 'Get Involved', to: '/get-involved' }} />
}
