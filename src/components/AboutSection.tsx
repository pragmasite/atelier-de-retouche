import { Scissors, Heart, Award } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="a-propos" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading mb-6 text-3xl font-bold text-foreground md:text-4xl">
            Notre Atelier
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Situe au coeur de Chene-Bourg, notre atelier de retouche vous accueille pour tous vos besoins
            en modifications de vetements. Forts d'une expertise reconnue, nous transformons et adaptons
            vos pieces favorites avec le plus grand soin.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-card p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
              <Scissors className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-heading mb-3 text-xl font-semibold text-foreground">
              Savoir-faire artisanal
            </h3>
            <p className="text-muted-foreground">
              Des retouches minutieuses realisees avec precision sur tous types de tissus et materiaux.
            </p>
          </div>

          <div className="rounded-lg bg-card p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
              <Heart className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-heading mb-3 text-xl font-semibold text-foreground">
              Cachemire mongol premium
            </h3>
            <p className="text-muted-foreground">
              Decouvrez notre selection exclusive de cachemire mongol de haute qualite,
              disponible a l'atelier.
            </p>
          </div>

          <div className="rounded-lg bg-card p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
              <Award className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-heading mb-3 text-xl font-semibold text-foreground">
              Service personnalise
            </h3>
            <p className="text-muted-foreground">
              Chaque vetement est traite avec attention pour un resultat parfaitement adapte a vos attentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
