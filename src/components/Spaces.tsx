import SectionHeading from '@/components/SectionHeading'
import { spaces } from '@/data/site'

export default function Spaces() {
  return (
    <section id="espacios" className="scroll-mt-4 bg-muted px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Espacios"
        title="Todo para pasar un gran día"
        description="Espacios pensados para disfrutar al aire libre, comer rico y descansar."
      />

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {spaces.map(({ title, description, image, alt, icon: Icon }) => (
          <article
            key={title}
            className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={image}
                alt={alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="text-2xl font-semibold">{title}</h3>
              </div>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
