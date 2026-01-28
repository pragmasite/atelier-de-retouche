import { DisclaimerModal } from '@/components/DisclaimerModal'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { ServicesSection } from '@/components/ServicesSection'
import { OpeningHoursSection } from '@/components/OpeningHoursSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <>
      <DisclaimerModal />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <OpeningHoursSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
