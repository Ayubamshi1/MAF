import { useParams } from 'react-router-dom'
import { getProgramDetail } from '@/content/programDetails'
import DetailPage from './DetailPage'
import NotFound from './NotFound'

export default function ProgramPage() {
  const { slug = '' } = useParams()
  const content = getProgramDetail(slug)
  if (!content) return <NotFound />
  return <DetailPage content={content} parent={{ label: 'Programs and Services', to: '/programs' }} />
}
