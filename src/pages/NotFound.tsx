import Seo from '@/components/common/Seo'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="section">
      <Seo title="Page not found" noindex />
      <div className="container-x mx-auto max-w-2xl text-center">
        <p className="font-heading text-7xl font-extrabold text-ocean sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">We could not find that page</h1>
        <p className="mt-4 text-lg text-charcoal/75">The link may be old or mistyped. Try one of these instead.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/" variant="primary">Go to the home page</Button>
          <Button to="/programs" variant="outline">Explore programs</Button>
          <Button to="/contact" variant="outline">Contact us</Button>
        </div>
      </div>
    </section>
  )
}
