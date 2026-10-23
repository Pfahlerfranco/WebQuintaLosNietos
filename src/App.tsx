import Contact from '@/components/Contact'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Reviews from '@/components/Reviews'
import SiteNav from '@/components/SiteNav'
import Spaces from '@/components/Spaces'

const year = new Date().getFullYear()

export default function App() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Gallery />
        <Spaces />
        <Reviews />
        <Contact />
      </main>
      <footer className="border-t bg-muted px-6 py-8 text-center text-sm text-muted-foreground">
        © {year} Quinta Los Nietos. Todos los derechos reservados.
      </footer>
    </>
  )
}
