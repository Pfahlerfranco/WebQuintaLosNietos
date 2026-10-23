import { ArrowDown } from 'lucide-react'
import { asset } from '@/data/site'
import { whatsappLink } from '@/lib/contact'

export default function Hero() {
  const wa = whatsappLink()

  return (
    <section id="inicio" className="relative isolate flex min-h-svh items-center justify-center overflow-hidden text-center">
      <img
        src={asset('imagenes/frente-1.jpg')}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/35 to-background" />

      <div className="mx-auto max-w-3xl px-6 pt-24 pb-28 text-white">
        <p className="mb-4 text-sm font-medium tracking-[0.3em] uppercase text-white/80">
          Quinta · Eventos · Descanso
        </p>
        <h1 className="text-5xl font-semibold leading-[1.05] text-balance drop-shadow-lg sm:text-7xl">
          Quinta Los Nietos
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/90 text-balance sm:text-xl">
          Pileta, quincho, parrilla y mucho verde para reunirte con tu familia y amigos.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#galeria"
            className="rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground shadow-lg transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Ver la quinta
          </a>
          <a
            href={wa ?? '#contacto'}
            {...(wa ? { target: '_blank', rel: 'noreferrer' } : {})}
            className="rounded-full border border-white/50 bg-white/10 px-7 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Consultar disponibilidad
          </a>
        </div>
      </div>

      <a
        href="#galeria"
        aria-label="Bajar a la galería"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/70 motion-safe:animate-bounce"
      >
        <ArrowDown className="size-6" />
      </a>
    </section>
  )
}
