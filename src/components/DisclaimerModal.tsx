import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

const STORAGE_KEY = 'atelier-disclaimer-dismissed'

export function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (!dismissed) {
      setIsOpen(true)
    }
  }, [])

  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEY, 'true')
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-card mx-4 max-w-md rounded-lg p-6 shadow-xl">
        <div className="mb-4 flex items-start justify-between">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Apercu du Site
          </h2>
          <button
            onClick={handleDismiss}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="mb-6 text-muted-foreground">
          Ceci est un apercu de votre site web. Le contenu et le design sont en cours de finalisation.
          N'hesitez pas a nous contacter pour toute modification ou suggestion.
        </p>
        <Button onClick={handleDismiss} className="w-full">
          J'ai compris
        </Button>
      </div>
    </div>
  )
}
