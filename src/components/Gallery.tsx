import AccordionGallery from '@/components/AccordionGallery'
import SectionHeading from '@/components/SectionHeading'
import { galleryItems } from '@/data/site'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export default function Gallery() {
  // En celulares la galería se apila en vertical y se expande al tocar.
  const mobile = useMediaQuery('(max-width: 520px)')

  return (
    <section id="galeria" className="scroll-mt-4 px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Galería"
        title="Conocé la quinta"
        description={mobile ? 'Tocá cada foto para verla en grande.' : 'Pasá el mouse por cada foto para verla en grande.'}
      />
      <div className="mx-auto max-w-6xl">
        <AccordionGallery
          items={galleryItems}
          defaultIndex={1}
          orientation={mobile ? 'vertical' : 'horizontal'}
          height={mobile ? 410 : 520}
          trigger={mobile ? 'click' : 'hover'}
          accentColor="#e0803f"
          overlayColor="#1c1008"
          expandRatio={0.5}
          grayscale={false}
          className="max-[520px]:[&>*]:min-h-[56px]!"
        />
      </div>
    </section>
  )
}
