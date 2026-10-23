import { AtSign, Mail, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import SectionHeading from '@/components/SectionHeading'
import { contact, location } from '@/data/site'
import { whatsappLink } from '@/lib/contact'

interface ContactCardProps {
  icon: ReactNode
  label: string
  value: string
  href?: string
}

function ContactCard({ icon, label, value, href }: ContactCardProps) {
  const external = href?.startsWith('http')
  const body = (
    <>
      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">{icon}</span>
      <span className="min-w-0 text-left">
        <span className="block text-sm text-muted-foreground">{label}</span>
        <span className="block font-medium">{value}</span>
      </span>
    </>
  )
  const className = 'flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-sm'
  return href ? (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={`${className} transition hover:-translate-y-0.5 hover:shadow-md`}
    >
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  )
}

export default function Contact() {
  const wa = whatsappLink()

  return (
    <section id="contacto" className="scroll-mt-4 bg-muted px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Contacto"
        title="Reservá tu fecha"
        description="Escribinos para consultar disponibilidad y conocer los detalles."
      />

      <div className="mx-auto max-w-5xl">
        {wa && (
          <div className="mb-10 text-center">
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-lg font-medium text-secondary-foreground shadow-lg transition hover:brightness-110"
            >
              <MessageCircle className="size-5" />
              Escribir por WhatsApp
            </a>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          {contact.phone && (
            <ContactCard
              icon={<Phone className="size-5" />}
              label="Teléfono"
              value={contact.phone}
              href={contact.whatsapp ? `tel:+${contact.whatsapp}` : undefined}
            />
          )}
          {contact.address && (
            <ContactCard
              icon={<MapPin className="size-5" />}
              label="Dónde estamos"
              value={contact.address}
              href={location.placeUrl}
            />
          )}
          {contact.instagram && (
            <ContactCard
              icon={<AtSign className="size-5" />}
              label="Instagram"
              value={`@${contact.instagram}`}
              href={`https://instagram.com/${contact.instagram}`}
            />
          )}
          {contact.email && (
            <ContactCard icon={<Mail className="size-5" />} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
          )}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border bg-card shadow-md">
          <iframe
            title="Ubicación de Quinta Los Nietos en Google Maps"
            src={location.embedUrl}
            className="h-[360px] w-full border-0 sm:h-[440px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <p className="mt-6 text-center">
          <a
            href={location.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground shadow-lg transition hover:brightness-110"
          >
            <Navigation className="size-5" />
            Cómo llegar
          </a>
        </p>
      </div>
    </section>
  )
}
