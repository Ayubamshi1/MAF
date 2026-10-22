import { Link } from 'react-router-dom'
import Seo from '@/components/common/Seo'
import PageHero from '@/components/layout/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import Photo from '@/components/ui/Photo'
import SectionHeading from '@/components/ui/SectionHeading'
import { IMAGES, involveImage } from '@/content/images'

const WAYS = [
  { title: 'Donate', text: 'Give securely online or by bank transfer and choose the program your gift supports.', to: '/donate', image: IMAGES.ways.online },
  { title: 'Fundraise', text: 'Start a campaign with friends, family or colleagues.', to: '/get-involved/fundraise', image: involveImage('fundraise') },
  { title: 'Volunteer', text: 'Give your time and skills to people and projects that need them.', to: '/get-involved/volunteer', image: involveImage('volunteer') },
  { title: 'Become a Member', text: 'Join our cooperative society to save and borrow fairly.', to: '/get-involved/become-a-member', image: involveImage('become-a-member') },
  { title: 'Refer Someone', text: 'Connect a person or family who needs support with the right help.', to: '/get-involved/refer-someone', image: involveImage('refer-someone') },
  { title: 'How to Partner', text: 'Partnerships for organizations and businesses that want lasting impact.', to: '/get-involved/partner', image: involveImage('partner') },
  { title: 'Careers', text: 'Join our team and help build thriving communities.', to: '/careers', image: involveImage('careers') },
]

export default function GetInvolved() {
  return (
    <>
      <Seo title="Get Involved" description="Donate, fundraise, volunteer, become a member, refer someone or partner with Margaret Amshi Foundation." />
      <PageHero title="Get involved" description="There are many ways to be part of the work. Pick the one that fits you." />
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Ways to take part" title="Find your way to make a difference" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WAYS.map((w) => (
              <li key={w.title}>
                <Link to={w.to} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
                  <Photo image={w.image} ratio="aspect-[16/10]" imgClassName="transition duration-500 group-hover:scale-105" />
                  <span className="flex flex-1 flex-col p-6">
                    <span className="text-xl font-extrabold text-navy">{w.title}</span>
                    <span className="mt-2 text-charcoal/75">{w.text}</span>
                    <span className="mt-4 text-sm font-semibold text-ocean underline decoration-sky decoration-2 underline-offset-4 group-hover:text-navy">Get started</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title="Every contribution counts" text="Whether you give, volunteer or partner, you help build communities that thrive for generations." />
    </>
  )
}
