import { Star } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { location, rating, reviews } from '@/data/site'

function Stars({ className = 'size-5' }: { className?: string }) {
  return (
    <span className="flex gap-0.5 text-amber-500" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={`${className} fill-current`} />
      ))}
    </span>
  )
}

export default function Reviews() {
  return (
    <section id="opiniones" className="scroll-mt-4 px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="Opiniones" title="Lo que dicen quienes nos visitaron" />

      <div className="mx-auto mb-10 flex flex-col items-center gap-2">
        <div className="flex items-center gap-3">
          <span className="font-display text-5xl font-semibold">{rating.score.toString().replace('.', ',')}</span>
          <Stars className="size-6" />
        </div>
        <p className="text-muted-foreground">{rating.count} opiniones en Google Maps</p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {reviews.map(({ author, detail, text }) => (
          <figure key={author} className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm">
            <Stars className="size-4" />
            <blockquote className="mt-4 flex-1 text-lg leading-relaxed">“{text}”</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-primary/10 font-semibold text-primary">
                {author[0]}
              </span>
              <span>
                <span className="block font-medium">{author}</span>
                <span className="block text-sm text-muted-foreground">{detail}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-10 text-center">
        <a
          href={location.placeUrl}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Ver todas las opiniones en Google Maps
        </a>
      </p>
    </section>
  )
}
