import { Link } from 'react-router-dom'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import FounderTeaser from '@/components/sections/FounderTeaser'
import PersonCard from '@/components/sections/PersonCard'
import StepList from '@/components/sections/StepList'
import Button from '@/components/ui/Button'
import Counter from '@/components/ui/Counter'
import Photo from '@/components/ui/Photo'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { ABOUT_TEXT } from '@/content/values'
import { IMAGES, programImage } from '@/content/images'
import { IMPACT_STATS } from '@/content/stats'
import { peopleIn } from '@/content/people'

const PILLARS = [
  { title: 'Strategic grantmaking', text: 'We fund community organizations, students and projects with clear plans and honest budgets.', image: programImage('grants') },
  { title: 'Dedicated leadership', text: 'We bring experienced leaders, advisers and mentors alongside every program we run.', image: programImage('coaching-and-mentorship') },
  { title: 'Community partnership', text: 'We work with donors, local leaders and volunteers to co-create lasting impact.', image: programImage('volunteering') },
]

export default function About() {
  return (
    <>
      <Seo title="About us" description="Margaret Amshi Foundation partners with donors and local leaders to improve lives through strategic grantmaking and dedicated leadership." />
      <PageHero title="About Margaret Amshi Foundation" description={ABOUT_TEXT} />

      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Who we are" title="A foundation built on community, trust and follow-through" />
            <div className="prose-soft mt-6 max-w-xl text-lg text-charcoal/85">
              <p>Margaret Amshi Foundation is a Nigerian philanthropic organization working across the country. We work with donors, advisers and local leaders to fund and deliver programs in education, empowerment, care and emergency response.</p>
              <p>We believe lasting change is built with communities, not for them. That is why we listen first, fund what people ask for and report openly on what we achieve.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/about/mission-vision" variant="primary">Our mission and vision</Button>
              <Button to="/about/values" variant="outline">Our values</Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-5 gap-4">
              <Photo image={IMAGES.aboutStory} ratio="aspect-[4/5]" className="col-span-3 rounded-[2rem] shadow-lift" />
              <Photo image={IMAGES.aboutApproach} ratio="aspect-[3/5]" className="col-span-2 mt-12 rounded-[1.75rem] shadow-soft" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-grad-wash">
        <div className="container-x">
          <Reveal><SectionHeading eyebrow="What we do" title="Three ways we create lasting change" /></Reveal>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <li key={p.title} className="overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm">
                <Photo image={p.image} ratio="aspect-[16/10]" />
                <div className="p-6"><h3 className="text-xl font-extrabold">{p.title}</h3><p className="mt-2 text-charcoal/75">{p.text}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="How we work" title="Listen. Fund. Deliver together. Report." />
            <div className="mt-10">
              <StepList items={[
                { title: 'Listen', text: 'We consult community leaders and residents before choosing priorities.' },
                { title: 'Fund', text: 'We fund programs and partners with clear goals and transparent budgets.' },
                { title: 'Deliver together', text: 'Staff, volunteers and partners deliver programs side by side.' },
                { title: 'Report', text: 'We share results, finances and lessons so everyone can hold us to account.' },
              ]} />
            </div>
          </div>
          <Photo image={IMAGES.missionVision} ratio="aspect-[4/5]" className="hidden rounded-[2.5rem] shadow-lift lg:block" />
        </div>
      </section>

      <FounderTeaser />

      <section aria-label="Our impact in numbers" className="on-dark bg-grad-deep py-16 text-white">
        <div className="container-x">
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {IMPACT_STATS.map((s) => (
              <div key={s.label}>
                <dd className="font-heading text-4xl font-extrabold text-sky sm:text-5xl"><Counter value={s.value} suffix={s.suffix} /></dd>
                <dt className="mt-1 font-bold">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Leadership" title="The people guiding our work" />
            <Link to="/about/leadership" className="link-inline">Meet the leadership team</Link>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {peopleIn('leadership').map((p) => <li key={p.slug}><PersonCard person={p} /></li>)}
          </ul>
        </div>
      </section>

      <CtaBand title="Be part of what comes next" text="Give, volunteer or partner with us to build thriving communities." />
    </>
  )
}
