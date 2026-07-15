import { useEffect, useEffectEvent, useState } from 'react'
import { Menu, X } from 'lucide-react'

import type { NavItem, SectionId } from '../types/content'

type NavbarProps = {
  artistName: string
  brandMark: string
  items: NavItem[]
  activeSection: SectionId
}

export function Navbar({ artistName, brandMark, items, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = useEffectEvent(() => {
    setIsScrolled(window.scrollY > 24)
  })

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false)

    window.addEventListener('hashchange', closeMenu)

    return () => window.removeEventListener('hashchange', closeMenu)
  }, [])

  return (
    <header className={isScrolled ? 'site-header site-header--scrolled' : 'site-header'}>
      <nav className="navbar" aria-label="Primary">
        <a className="navbar__brand" href="#home">
          <span className="navbar__brand-mark" aria-hidden="true">
            {brandMark}
          </span>
          <span>{artistName}</span>
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className={isMenuOpen ? 'navbar__links navbar__links--open' : 'navbar__links'} id="mobile-menu">
          {items.map((item) => (
            <a
              key={item.id}
              className={item.id === activeSection ? 'navbar__link is-active' : 'navbar__link'}
              href={`#${item.id}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
