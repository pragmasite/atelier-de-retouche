import { Facebook, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary py-12 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo & Description */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="Atelier de Retouche de A a Z"
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="font-heading text-lg font-semibold">
                Atelier de Retouche de A a Z
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Votre specialiste en retouches et transformations de vetements a Chene-Bourg.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading mb-4 text-lg font-semibold">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Rue Peillonnex 3, 1225 Chene-Bourg</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <a href="tel:+41223482222" className="hover:text-accent">
                  +41 22 348 22 22
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading mb-4 text-lg font-semibold">Suivez-nous</h4>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {currentYear} Atelier de Retouche de A a Z. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  )
}
