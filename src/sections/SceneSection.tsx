import { MapPinned, Mic2, Sparkles, Ticket } from 'lucide-react'

import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import type { SceneContent } from '../types/content'

type SceneSectionProps = {
  scene: SceneContent
}

const icons = [Mic2, Sparkles, Ticket, MapPinned]

export function SceneSection({ scene }: SceneSectionProps) {
  return (
    <section id="dates" className="content-section">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Escenarios"
            title="Salas, ferias y cartel compartido con una propuesta enfocada en pista y show."
            description={scene.intro}
          />
        </Reveal>

        <div className="scene-grid">
          <div className="scene-grid__main">
            {scene.milestones.map((item, index) => {
              const Icon = icons[index % icons.length]

              return (
                <Reveal key={item.title} className="scene-card" delay={0.08 + index * 0.04}>
                  <div className="scene-card__icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="eyebrow">Etapa {index + 1}</p>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="scene-sidebar" delay={0.14}>
            <div className="scene-list">
              <p className="eyebrow">Salas</p>
              <div className="scene-tags">
                {scene.venues.map((venue) => (
                  <span key={venue}>{venue}</span>
                ))}
              </div>
            </div>

            <div className="scene-list">
              <p className="eyebrow">Zonas de actividad</p>
              <div className="scene-tags">
                {scene.territories.map((territory) => (
                  <span key={territory}>{territory}</span>
                ))}
              </div>
            </div>

            <div className="scene-list">
              <p className="eyebrow">Compartiendo cartel con</p>
              <div className="scene-tags">
                {scene.lineUp.map((artist) => (
                  <span key={artist}>{artist}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
