/** Decorative layered waves echoing the swoosh in the logo. Purely visual. */
export default function Swoosh({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 1440 220" preserveAspectRatio="none" className={`pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full sm:h-40 ${flip ? 'rotate-180' : ''} ${className}`}>
      <defs>
        <linearGradient id="sw-a" x1="0" x2="1">
          <stop offset="0" stopColor="#5EBCDC" stopOpacity="0.55" />
          <stop offset="1" stopColor="#5EBCDC" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="sw-b" x1="0" x2="1">
          <stop offset="0" stopColor="#78A04F" stopOpacity="0.5" />
          <stop offset="1" stopColor="#78A04F" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path className="animate-sway" fill="url(#sw-a)" d="M0 120C240 40 420 190 720 130S1200 60 1440 140V220H0Z" />
      <path className="animate-sway [animation-delay:-5s]" fill="url(#sw-b)" d="M0 160C300 90 520 210 800 160S1250 110 1440 170V220H0Z" />
      <path fill="#fff" d="M0 200C360 150 640 225 960 195S1300 175 1440 200V220H0Z" />
    </svg>
  )
}
