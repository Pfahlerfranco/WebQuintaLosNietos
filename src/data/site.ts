import { Armchair, Bath, Flame, TreePine, Waves } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/** Devuelve la ruta pública de un archivo dentro de /public (funciona en GitHub Pages). */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

/**
 * Datos de contacto. COMPLETÁ ESTOS CAMPOS: los que queden vacíos no se muestran.
 * - whatsapp: número con código de país y sin signos ni espacios (ej. Argentina: "5491122334455").
 * - instagram: solo el usuario, sin @ (ej. "quintalosnietos").
 * - mapsUrl: link de Google Maps de la quinta.
 */
export const contact = {
  whatsapp: '5491130294852',
  whatsappMessage: 'Hola! Quisiera consultar disponibilidad en Quinta Los Nietos.',
  phone: '011 15-3029-4852',
  instagram: '',
  email: '',
  address: 'Melo 1, Libertad, Provincia de Buenos Aires',
}

/** Ubicación en Google Maps. */
export const location = {
  lat: -34.7231339,
  lng: -58.6775823,
  /** Ficha del lugar en Google Maps (abre en la pestaña de reseñas). */
  placeUrl:
    'https://www.google.com/maps/place/Quinta+Los+Nietos/@-34.7231295,-58.6801572,17z/data=!4m16!1m9!3m8!1s0x95bcc1edf2f0c635:0xa480ec1c1411eae5!2sQuinta+Los+Nietos!8m2!3d-34.7231339!4d-58.6775823!9m1!1b1!16s%2Fg%2F11trp6q_wk!3m5!1s0x95bcc1edf2f0c635:0xa480ec1c1411eae5!8m2!3d-34.7231339!4d-58.6775823!16s%2Fg%2F11trp6q_wk',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-34.7231339,-58.6775823',
  embedUrl: 'https://maps.google.com/maps?q=-34.7231339,-58.6775823&z=16&hl=es&output=embed',
}

/** Opiniones de Google Maps. Para actualizarlas, copiá el texto desde la ficha del lugar. */
export const rating = { score: 4.8, count: 9 }

export const reviews = [
  { author: 'Griselda Miranda', detail: 'Local Guide · 31 reseñas', text: 'Hermoso lugar, grande! La pileta un lujo! El parque es amplio se puede disfrutar a pleno.' },
  { author: 'Oscar Fernandez', detail: '1 reseña', text: 'Muy buen lugar. Cómodo para pasar el día. Buena atención.' },
  { author: 'Nayla Juarez', detail: '1 reseña', text: 'Lindo lugar para pasar en familia 🌳' },
]

export const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Espacios', href: '#espacios' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Contacto', href: '#contacto' },
]

export const galleryItems = [
  { image: asset('imagenes/frente-1.jpg'), label: 'El frente de la quinta', alt: 'Frente de ladrillo visto de la quinta, de noche' },
  { image: asset('imagenes/pileta-3.jpg'), label: 'Pileta', alt: 'Pileta con solárium y mesa dentro del agua' },
  { image: asset('imagenes/quincho-4.jpg'), label: 'Quincho con hamaca', alt: 'Quincho con techo de paja, mesa y hamaca frente a la pileta' },
  { image: asset('imagenes/juegos-1.jpg'), label: 'Juegos para chicos', alt: 'Hamaca y juegos de madera entre los árboles' },
  { image: asset('imagenes/parrilla-1.jpg'), label: 'Parrilla y asador', alt: 'Asado a las brasas en la parrilla de ladrillo' },
  { image: asset('imagenes/comedor-1.jpg'), label: 'Salón comedor', alt: 'Salón comedor con mesa grande, sillones y estufa a leña' },
  { image: asset('imagenes/pileta.jpg'), label: 'Pileta y solárium', alt: 'Vista general de la pileta con cerco perimetral' },
]

export interface Space {
  title: string
  description: string
  image: string
  alt: string
  icon: LucideIcon
}

export const spaces: Space[] = [
  {
    title: 'Pileta',
    description: 'Pileta con amplio solárium y cerco perimetral, ideal para pasar el día.',
    image: asset('imagenes/pileta-2.jpg'),
    alt: 'Pileta de la quinta con el quincho de fondo',
    icon: Waves,
  },
  {
    title: 'Quincho',
    description: 'Techo de paja, mesas de madera y hamaca para descansar a la sombra.',
    image: asset('imagenes/quincho-4.jpg'),
    alt: 'Quincho con techo de paja y hamaca',
    icon: TreePine,
  },
  {
    title: 'Parrilla',
    description: 'Parrilla de ladrillo y asador cubiertos, con mesada para preparar todo.',
    image: asset('imagenes/parrilla-2.jpg'),
    alt: 'Parrilla de ladrillo bajo techo',
    icon: Flame,
  },
  {
    title: 'Juegos para chicos',
    description: 'Hamacas, toboganes y juegos de madera rodeados de árboles.',
    image: asset('imagenes/juegos-1.jpg'),
    alt: 'Juegos de madera para niños',
    icon: TreePine,
  },
  {
    title: 'Salón comedor',
    description: 'Salón amplio con mesa grande, sillones, heladeras y estufa a leña.',
    image: asset('imagenes/comedor-1.jpg'),
    alt: 'Salón comedor de ladrillo visto',
    icon: Armchair,
  },
  {
    title: 'Baños y descanso',
    description: 'Baños con ducha y un espacio para descansar con TV.',
    image: asset('imagenes/comedor-4.jpg'),
    alt: 'Sector de descanso con cama y televisor',
    icon: Bath,
  },
]
