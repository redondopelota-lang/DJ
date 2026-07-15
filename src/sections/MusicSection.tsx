import { CalendarDays, Clock3, Headphones } from 'lucide-react'

import { ButtonLink } from '../components/ButtonLink'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import type { MusicItem } from '../types/content'

type MusicSectionProps = {
  intro: string
  sessions: MusicItem[]
}

export function MusicSection({ intro, sessions }: MusicSectionProps) {
  const featuredSession = sessions.find((session) => session.featured) ?? sessions[0]
  const remainingSessions = sessions.filter((session) => session.id !== featuredSession.id)

  return (
    <section id="music" className="content-section">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Sonido"
            title="Una identidad sonora abierta, urbana y pensada para leer la pista."
            description={intro}
          />
        </Reveal>

        <Reveal className="music-featured" delay={0.08}>
          <div className="music-featured__media">
            <img src={featuredSession.cover} alt={featuredSession.coverAlt} loading="lazy" />
          </div>
          <div className="music-featured__content">
            <p className="eyebrow">Formato destacado</p>
            <h3>{featuredSession.title}</h3>
            <p>{featuredSession.description}</p>
            <div className="music-featured__meta">
              <span>
                <CalendarDays size={16} />
                {featuredSession.date}
              </span>
              <span>
                <Headphones size={16} />
                {featuredSession.genre}
              </span>
              {featuredSession.duration ? (
                <span>
                  <Clock3 size={16} />
                  {featuredSession.duration}
                </span>
              ) : null}
            </div>
            <div className="music-featured__actions">
              {featuredSession.links.map((link, index) => (
                <ButtonLink
                  key={link.label}
                  action={link}
                  variant={index === 0 ? 'primary' : 'secondary'}
                />
              ))}
            </div>

            {featuredSession.embedUrl ? (
              <div className="embed-frame">
                <iframe
                  title={`${featuredSession.title} embed`}
                  src={featuredSession.embedUrl}
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                />
              </div>
            ) : null}
          </div>
        </Reveal>

        <div className="music-grid">
          {remainingSessions.map((session, index) => (
            <Reveal key={session.id} className="music-card" delay={0.08 + index * 0.05}>
              <img src={session.cover} alt={session.coverAlt} loading="lazy" />
              <div className="music-card__body">
                <div className="music-card__header">
                  <p className="eyebrow">{session.platform}</p>
                  <h3>{session.title}</h3>
                </div>
                <p>{session.description}</p>
                <div className="music-card__meta">
                  <span>{session.date}</span>
                  <span>{session.genre}</span>
                  {session.duration ? <span>{session.duration}</span> : null}
                </div>
                <div className="music-card__actions">
                  {session.links.map((link) => (
                    <ButtonLink
                      key={`${session.id}-${link.label}`}
                      action={link}
                      variant="tertiary"
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
