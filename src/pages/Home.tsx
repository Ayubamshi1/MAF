import Seo from '@/components/common/Seo'
import Hero from '@/components/sections/Hero'
import StatsStrip from '@/components/sections/StatsStrip'
import AboutSnapshot from '@/components/sections/AboutSnapshot'
import FounderTeaser from '@/components/sections/FounderTeaser'
import ProgramsOverview from '@/components/sections/ProgramsOverview'
import PhotoGallery from '@/components/sections/PhotoGallery'
import WaysToGive from '@/components/sections/WaysToGive'
import StoriesCarousel from '@/components/sections/StoriesCarousel'
import ValuesGrid from '@/components/sections/ValuesGrid'
import PartnerBand from '@/components/sections/PartnerBand'
import NewsEvents from '@/components/sections/NewsEvents'
import FaqPreview from '@/components/sections/FaqPreview'
import UpdatesSection from '@/components/sections/UpdatesSection'
import ContactStrip from '@/components/sections/ContactStrip'

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <StatsStrip />
      <AboutSnapshot />
      <FounderTeaser />
      <ProgramsOverview />
      <PhotoGallery />
      <WaysToGive />
      <StoriesCarousel />
      <ValuesGrid />
      <PartnerBand />
      <NewsEvents />
      <FaqPreview />
      <UpdatesSection />
      <ContactStrip />
    </>
  )
}
