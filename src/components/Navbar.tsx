import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'A propos' },
  { href: '#services', label: 'Services' },
  { href: '#horaires', label: 'Horaires' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navLinks.map(link => link.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-card shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#accueil" className="flex items-center gap-3">
          <img
            src="/logo.svg"
            alt="Atelier de Retouche de A a Z"
            className="h-12 w-auto"
          />
          <span className="font-heading hidden text-lg font-semibold text-primary sm:block">
            Atelier de Retouche de A a Z
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent'
                    : 'text-foreground'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-foreground md:hidden"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="bg-card border-t border-border md:hidden">
          <ul className="container mx-auto px-4 py-4">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block py-3 text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === link.href.slice(1)
                      ? 'text-accent'
                      : 'text-foreground'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
