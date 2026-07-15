import { useEffect } from 'react'

import { BackgroundAudio } from './components/BackgroundAudio'
import { Navbar } from './components/Navbar'
import { djContent } from './data/djContent'
import { useActiveSection } from './hooks/useActiveSection'
import { useReducedMotionPreference } from './hooks/useReducedMotionPreference'
import { useSeo } from './hooks/useSeo'
import { AboutSection } from './sections/AboutSection'
import { BookingSection } from './sections/BookingSection'
import { Footer } from './sections/Footer'
import { GallerySection } from './sections/GallerySection'
import { HeroSection } from './sections/HeroSection'
import { MusicSection } from './sections/MusicSection'
import { PresskitSection } from './sections/PresskitSection'
import { SceneSection } from './sections/SceneSection'

const sectionIds = djContent.navigation.map((item) => item.id)

function App() {
  const activeSection = useActiveSection(sectionIds)
  const prefersReducedMotion = useReducedMotionPreference()

  useSeo(djContent.seo)

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', djContent.theme.accent)
  }, [])

  return (
    <div className="app-shell">
      <Navbar
        artistName={djContent.artist.name}
        brandMark={djContent.artist.logoText}
        items={djContent.navigation}
        activeSection={activeSection}
      />

      <main>
        <HeroSection
          artistName={djContent.artist.name}
          tagline={djContent.artist.tagline}
          hero={djContent.hero}
          highlights={djContent.about.highlights}
          socialLinks={djContent.socialLinks}
          reducedMotion={prefersReducedMotion}
        />
        <AboutSection artistName={djContent.artist.name} about={djContent.about} />
        <MusicSection intro={djContent.music.intro} sessions={djContent.music.sessions} />
        <GallerySection intro={djContent.gallery.intro} items={djContent.gallery.items} />
        <SceneSection scene={djContent.scene} />
        <PresskitSection
          about={djContent.about}
          presskit={djContent.presskit}
          socialLinks={djContent.socialLinks}
        />
        <BookingSection contact={djContent.contact} socialLinks={djContent.socialLinks} />
      </main>

      <Footer
        artistName={djContent.artist.name}
        navItems={djContent.navigation}
        socialLinks={djContent.socialLinks}
        footer={djContent.footer}
      />
      <BackgroundAudio
        src="/media/audio/baila-reggaeton.mp3"
        title="Baila Reggaeton · Canelita · Antonio Guevara Live Edit"
      />
    </div>
  )
}

export default App
