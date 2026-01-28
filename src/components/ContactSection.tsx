import { MapPin, Phone, Mail, AlertCircle } from 'lucide-react'

export function ContactSection() {
  const address = 'Rue Peillonnex 3, 1225 Chene-Bourg'
  const phone = '+41 22 348 22 22'
  const email = 'contact@atelier-retouche-az.ch'
  const mapCoords = { lat: 46.194523, lng: 6.195346 }

  return (
    <section id="contact" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-heading mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Nous trouver
          </h2>
          <p className="text-muted-foreground">
            Venez nous rendre visite a notre atelier au coeur de Chene-Bourg.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading mb-6 text-xl font-semibold text-foreground">
                Coordonnees
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Adresse</p>
                    <p className="text-muted-foreground">{address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Telephone</p>
                    <a
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="text-muted-foreground hover:text-accent"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href={`mailto:${email}`}
                      className="text-muted-foreground hover:text-accent"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Notice */}
            <div className="flex items-start gap-4 rounded-lg border border-accent/30 bg-accent/5 p-4">
              <AlertCircle className="h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="font-medium text-foreground">
                  Retrait sur rendez-vous uniquement
                </p>
                <p className="text-sm text-muted-foreground">
                  Merci de nous contacter par telephone ou email pour convenir d'un horaire
                  de retrait de vos articles.
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-lg border border-border shadow-sm">
            <iframe
              title="Localisation Atelier de Retouche de A a Z"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${mapCoords.lng - 0.005}%2C${mapCoords.lat - 0.003}%2C${mapCoords.lng + 0.005}%2C${mapCoords.lat + 0.003}&layer=mapnik&marker=${mapCoords.lat}%2C${mapCoords.lng}`}
              className="h-80 w-full lg:h-full lg:min-h-[400px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
