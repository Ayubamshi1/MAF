import type { ReactNode } from 'react'
import BgImage from '@/components/ui/BgImage'
import Swoosh from '@/components/ui/Swoosh'
import Button from '@/components/ui/Button'
import { IMAGES, type ImageSlot } from '@/content/images'
import { whatsappChatUrl } from '@/config/site'
import { MessageCircle } from 'lucide-react'

interface Props {
  title: string
  text?: string
  image?: ImageSlot
  actions?: ReactNode
}

/** Closing call-to-action band used at the bottom of most pages. */
export default function CtaBand({ title, text, image = IMAGES.partner, actions }: Props) {
  return (
    <section className="section pt-0">
      <div className="container-x">
        <div className="on-dark relative isolate overflow-hidden rounded-[2.5rem] p-8 text-center text-white shadow-lift sm:p-14">
          <BgImage image={image} overlay="bg-gradient-to-br from-navy-900/95 via-navy/90 to-ocean/80" />
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold !text-white sm:text-4xl">{title}</h2>
          {text && <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{text}</p>}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {actions ?? (
              <>
                <Button to="/donate" variant="light" size="lg">Donate</Button>
                <Button href={whatsappChatUrl('Hello Margaret Amshi Foundation,')} variant="ghost" size="lg"><MessageCircle aria-hidden className="h-5 w-5" /> Chat on WhatsApp</Button>
              </>
            )}
          </div>
          <Swoosh className="opacity-50" />
        </div>
      </div>
    </section>
  )
}
