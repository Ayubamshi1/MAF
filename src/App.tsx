import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import Layout from '@/components/layout/Layout'

// Every page is code-split so visitors only download the page they open.
const Home = lazy(() => import('@/pages/Home'))
const Donate = lazy(() => import('@/pages/Donate'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const About = lazy(() => import('@/pages/About'))
const Founder = lazy(() => import('@/pages/Founder'))
const MissionVision = lazy(() => import('@/pages/MissionVision'))
const Values = lazy(() => import('@/pages/Values'))
const People = lazy(() => import('@/pages/People'))

const Programs = lazy(() => import('@/pages/Programs'))
const ProgramPage = lazy(() => import('@/pages/ProgramPage'))
const GetInvolved = lazy(() => import('@/pages/GetInvolved'))
const ActionPage = lazy(() => import('@/pages/ActionPage'))

const Impact = lazy(() => import('@/pages/Impact'))
const Stories = lazy(() => import('@/pages/Stories'))
const StoryDetail = lazy(() => import('@/pages/StoryDetail'))
const Reports = lazy(() => import('@/pages/Reports'))
const FinancialSummaries = lazy(() => import('@/pages/FinancialSummaries'))
const ProjectUpdates = lazy(() => import('@/pages/ProjectUpdates'))
const Transparency = lazy(() => import('@/pages/Transparency'))
const FinancialLegal = lazy(() => import('@/pages/FinancialLegal'))

const News = lazy(() => import('@/pages/News'))
const NewsDetail = lazy(() => import('@/pages/NewsDetail'))
const Events = lazy(() => import('@/pages/Events'))
const EventDetail = lazy(() => import('@/pages/EventDetail'))
const Resources = lazy(() => import('@/pages/Resources'))
const ApplicationNotices = lazy(() => import('@/pages/ApplicationNotices'))
const Downloads = lazy(() => import('@/pages/Downloads'))
const Faqs = lazy(() => import('@/pages/Faqs'))
const Careers = lazy(() => import('@/pages/Careers'))
const CareerDetail = lazy(() => import('@/pages/CareerDetail'))
const Legal = lazy(() => import('@/pages/Legal'))

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="donate" element={<Donate />} />
            <Route path="contact" element={<Contact />} />

            <Route path="about" element={<About />} />
            <Route path="about/mission-vision" element={<MissionVision />} />
            <Route path="about/values" element={<Values />} />
            <Route path="about/founder" element={<Founder />} />
            <Route path="about/leadership" element={<People group="leadership" />} />
            <Route path="about/board" element={<People group="board" />} />
            <Route path="about/team" element={<People group="team" />} />
            <Route path="about/staff" element={<People group="staff" />} />
            <Route path="about/advisers" element={<People group="advisers" />} />
            <Route path="about/volunteers" element={<People group="volunteers" />} />

            <Route path="programs" element={<Programs />} />
            <Route path="programs/:slug" element={<ProgramPage />} />
            <Route path="get-involved" element={<GetInvolved />} />
            <Route path="get-involved/:slug" element={<ActionPage />} />

            <Route path="impact" element={<Impact />} />
            <Route path="impact/stories" element={<Stories />} />
            <Route path="impact/stories/:slug" element={<StoryDetail />} />
            <Route path="impact/reports" element={<Reports />} />
            <Route path="impact/financial-summaries" element={<FinancialSummaries />} />
            <Route path="impact/project-updates" element={<ProjectUpdates />} />
            <Route path="impact/transparency" element={<Transparency />} />
            <Route path="financial-and-legal" element={<FinancialLegal />} />

            <Route path="news" element={<News />} />
            <Route path="news/:slug" element={<NewsDetail />} />
            <Route path="events" element={<Events />} />
            <Route path="events/:slug" element={<EventDetail />} />
            <Route path="resources" element={<Resources />} />
            <Route path="resources/application-notices" element={<ApplicationNotices />} />
            <Route path="resources/downloads" element={<Downloads />} />
            <Route path="faqs" element={<Faqs />} />

            <Route path="careers" element={<Careers />} />
            <Route path="careers/:slug" element={<CareerDetail />} />

            <Route path="privacy" element={<Legal kind="privacy" />} />
            <Route path="terms" element={<Legal kind="terms" />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </LazyMotion>
    </MotionConfig>
  )
}
