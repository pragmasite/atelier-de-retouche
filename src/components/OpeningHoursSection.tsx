import { Clock } from 'lucide-react'

const schedule = [
  { day: 'Lundi', hours: '14h00 - 18h30' },
  { day: 'Mardi', hours: '09h00 - 12h00 / 14h00 - 18h30' },
  { day: 'Mercredi', hours: '09h00 - 12h00 / 14h00 - 18h30' },
  { day: 'Jeudi', hours: '09h00 - 12h00 / 14h00 - 18h30' },
  { day: 'Vendredi', hours: '09h00 - 12h00 / 14h00 - 18h30' },
  { day: 'Samedi', hours: '09h00 - 12h00' },
  { day: 'Dimanche', hours: 'Ferme' },
]

export function OpeningHoursSection() {
  const today = new Date().getDay()
  const dayMap: Record<number, string> = {
    0: 'Dimanche',
    1: 'Lundi',
    2: 'Mardi',
    3: 'Mercredi',
    4: 'Jeudi',
    5: 'Vendredi',
    6: 'Samedi',
  }
  const currentDay = dayMap[today]

  return (
    <section id="horaires" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <Clock className="h-8 w-8 text-accent" />
            </div>
            <h2 className="font-heading mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Horaires d'ouverture
            </h2>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            <table className="w-full">
              <tbody>
                {schedule.map((item, index) => (
                  <tr
                    key={item.day}
                    className={`
                      ${index !== schedule.length - 1 ? 'border-b border-border' : ''}
                      ${item.day === currentDay ? 'bg-accent/5' : ''}
                    `}
                  >
                    <td className="px-6 py-4">
                      <span
                        className={`font-medium ${
                          item.day === currentDay
                            ? 'text-accent'
                            : 'text-foreground'
                        }`}
                      >
                        {item.day}
                        {item.day === currentDay && (
                          <span className="ml-2 text-xs font-normal text-accent">
                            (Aujourd'hui)
                          </span>
                        )}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span
                        className={
                          item.hours === 'Ferme'
                            ? 'text-muted-foreground'
                            : 'text-foreground'
                        }
                      >
                        {item.hours}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
