import { contact } from '@/data/site'

/** Link de WhatsApp con mensaje prearmado, o null si no hay número cargado. */
export function whatsappLink(): string | null {
  const number = contact.whatsapp.replace(/\D/g, '')
  if (!number) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(contact.whatsappMessage)}`
}
