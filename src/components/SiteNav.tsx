import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import GooeyNav from '@/components/GooeyNav'
import { navItems } from '@/data/site'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const sectionIds = navItems.map(item => item.href.slice(1))

// Con 5 ítems, en celulares hace falta menos espacio para que entre en una sola fila.
const compactStyle: CSSProperties & Record<`--${string}`, string> = {
  '--gn-font': '12.5px',
  '--gn-x': '9px',
  '--gn-gap': '0px',
}

export default function SiteNav() {
  const [active, setActive] = useState(0)
  const lockUntil = useRef(0)
  const narrow = useMediaQuery('(max-width: 640px)')

  // Resalta la sección visible mientras se hace scroll.
  useEffect(() => {
    const update = () => {
      if (performance.now() < lockUntil.current) return
      const probe = window.innerHeight * 0.35
      let current = 0
      sectionIds.forEach((id, index) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= probe) current = index
      })
      // Al final de la página, el último ítem debe quedar activo.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = sectionIds.length - 1
      }
      setActive(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-5">
      <div className="pointer-events-auto max-w-full">
        <GooeyNav
          items={navItems}
          activeIndex={active}
          onChange={index => {
            // Evita que el scroll suave "pise" el ítem recién elegido.
            lockUntil.current = performance.now() + 900
            setActive(index)
          }}
          theme="dark"
          color="#c4612f"
          size={narrow ? 'sm' : 'md'}
          style={narrow ? compactStyle : undefined}
          animationTime={600}
          particleCount={14}
        />
      </div>
    </header>
  )
}
