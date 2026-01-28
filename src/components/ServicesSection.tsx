import {
  Shirt,
  Sparkles,
  Gem,
  Scissors,
  Layers,
  CircleDot,
  Palette,
  Droplets,
} from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent">
        {icon}
      </div>
      <h3 className="font-heading mb-2 text-lg font-semibold text-foreground">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

const services = [
  {
    icon: <Shirt className="h-6 w-6" />,
    title: 'Retouches vetements',
    description:
      'Ajustements et modifications de tous types de vetements pour un ajustement parfait.',
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Robes de mariee',
    description:
      'Retouches delicates et ajustements sur mesure pour votre robe de mariee.',
  },
  {
    icon: <Gem className="h-6 w-6" />,
    title: 'Costumes et tailleurs',
    description:
      'Ajustements professionnels pour costumes, vestons et tailleurs.',
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: 'Travail du cuir',
    description:
      'Retouches specialisees sur articles en cuir: vestes, pantalons, accessoires.',
  },
  {
    icon: <CircleDot className="h-6 w-6" />,
    title: 'Jeans et denim',
    description:
      'Ourlets, ajustements de taille et reparations sur tous types de jeans.',
  },
  {
    icon: <Scissors className="h-6 w-6" />,
    title: 'Rideaux et textiles',
    description:
      'Confection et retouche de rideaux, voilages et textiles d\'ameublement.',
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: 'Transformation de vetements',
    description:
      'Donnez une nouvelle vie a vos vetements avec nos services de transformation.',
  },
  {
    icon: <Droplets className="h-6 w-6" />,
    title: 'Pressing partenaire',
    description:
      'Service de nettoyage a sec en partenariat avec des pressings de qualite.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-heading mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Nos Services
          </h2>
          <p className="text-muted-foreground">
            De la simple retouche aux transformations completes, nous offrons une gamme complete
            de services pour repondre a tous vos besoins.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
