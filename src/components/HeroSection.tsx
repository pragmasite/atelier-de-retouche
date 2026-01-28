import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center justify-center bg-primary px-4 pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="font-heading mb-6 text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
          Atelier de Retouche de A a Z
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
          Transformez et sublimez vos vetements avec notre expertise artisanale.
          Retouches sur mesure pour tous types de vetements, du quotidien aux pieces d'exception.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href="#contact">Nous contacter</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
          >
            <a href="#services">Nos services</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
