import { MapPin, Navigation, WifiOff } from 'lucide-react'
import { SITE, phoneLinks } from '@/config/site'
import { useOnline } from '@/hooks/useOnline'
import Button from '@/components/ui/Button'

export default function MapEmbed({ className = '' }: { className?: string }) {
  const online = useOnline()
  return (
    <div className={`overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-soft ${className}`}>
      <div className="relative aspect-[4/3] w-full bg-mist sm:aspect-[16/10]">
        {online ? (
          <iframe
            title="Map showing the location of Margaret Amshi Foundation in Nigeria"
            src={SITE.map.embedUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <WifiOff aria-hidden className="h-8 w-8 text-ocean" />
            <p className="font-semibold text-navy">The map needs an internet connection.</p>
            <p className="text-sm text-charcoal/70">{SITE.address.line}. Call {phoneLinks()[0].display} for directions.</p>
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 p-5">
        <p className="flex items-center gap-2 text-sm font-semibold text-navy">
          <MapPin aria-hidden className="h-5 w-5 text-ocean" />
          {SITE.address.line}
        </p>
        <Button href={SITE.map.directionsUrl} variant="outline" size="sm">
          <Navigation aria-hidden className="h-4 w-4" /> Get directions
        </Button>
      </div>
    </div>
  )
}
