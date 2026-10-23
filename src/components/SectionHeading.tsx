interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-sm font-medium tracking-[0.25em] text-primary uppercase">{eyebrow}</p>
      <h2 className="text-4xl font-semibold text-balance sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-muted-foreground text-balance">{description}</p>}
    </div>
  )
}
