import { useState } from 'react'
import { MapPin } from 'lucide-react'

import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import type { AboutContent } from '../types/content'

type AboutSectionProps = {
  artistName: string
  about: AboutContent
}

export function AboutSection({ artistName, about }: AboutSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="about" className="content-section">
      <div className="section-shell about-section">
        <Reveal className="about-section__header">
          <SectionHeading
            eyebrow="Perfil"
            title="Un perfil artístico pensado para promotores, salas, ferias y público."
            description="Biografía corta primero, contexto ampliado después y toda la información esencial para entender la propuesta en pocos segundos."
          />
        </Reveal>

        <div className="about-section__layout">
          <Reveal className="about-section__visual" delay={0.08}>
            <img
              className="about-section__portrait"
              src={about.portrait}
              alt={about.portraitAlt}
              loading="lazy"
            />
          </Reveal>

          <Reveal className="about-section__content" delay={0.12}>
            <div className="about-section__meta">
              <p className="eyebrow">Presentación artística</p>
              <h3>{artistName}</h3>
              <p className="about-section__location">
                <MapPin size={16} />
                {about.location}
              </p>
            </div>

            <div className="tag-list" aria-label="Géneros musicales">
              {about.genres.map((genre) => (
                <span key={genre}>{genre}</span>
              ))}
            </div>

            <p className="about-section__bio">{about.shortBio}</p>

            <div
              className={
                isExpanded
                  ? 'about-section__bio about-section__bio--expanded'
                  : 'about-section__bio is-collapsed'
              }
            >
              <p>{about.longBio}</p>
            </div>

            <button
              type="button"
              className="text-link"
              aria-expanded={isExpanded}
              onClick={() => setIsExpanded((expanded) => !expanded)}
            >
              {isExpanded ? 'Mostrar menos' : 'Leer biografía completa'}
            </button>

            <div className="about-section__highlights">
              {about.highlights.map((item) => (
                <div key={item.label} className="about-highlight">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
