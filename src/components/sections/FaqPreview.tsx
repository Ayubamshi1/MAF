import { FAQS } from '@/content/faqs'
import Accordion from '@/components/ui/Accordion'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

export default function FaqPreview() {
  return (
    <section className="section bg-grad-wash">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <SectionHeading eyebrow="Questions" title="Answers to what people ask us most" description="Cannot find what you need? Call or message us and we will help." />
          <div className="mt-8"><Button to="/faqs" variant="outline">Browse all FAQs</Button></div>
        </Reveal>
        <Reveal delay={0.08}><Accordion items={FAQS.slice(0, 5)} /></Reveal>
      </div>
    </section>
  )
}
