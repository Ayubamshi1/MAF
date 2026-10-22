import { MessageCircle } from 'lucide-react'
import WhatsAppForm from '@/components/forms/WhatsAppForm'
import Reveal from '@/components/ui/Reveal'
import Photo from '@/components/ui/Photo'
import { IMAGES } from '@/content/images'

export default function UpdatesSection() {
  return (
    <section className="section" id="updates">
      <div className="container-x">
        <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ocean-50 via-white to-leaf-100/70 p-8 ring-1 ring-navy/5 sm:p-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-grad-leaf text-white shadow-soft"><MessageCircle aria-hidden className="h-7 w-7" /></span>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">Get our updates on WhatsApp</h2>
            <p className="mt-4 max-w-md text-lg text-charcoal/75">Application notices, events and impact news, sent straight to your phone. No spam, and you can leave at any time.</p>
            <Photo image={IMAGES.updates} ratio="aspect-[16/10]" className="mt-8 hidden rounded-[2rem] shadow-soft lg:block" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-8"><WhatsAppForm formKey="join-updates" heading={null} /></div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
