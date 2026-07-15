import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

import { ButtonLink } from '../components/ButtonLink'
import { SocialLinks } from '../components/SocialLinks'
import type { HeroContent, HighlightStat, SocialLink } from '../types/content'

type HeroSectionProps = {
  artistName: string
  tagline: string
  hero: HeroContent
  highlights: HighlightStat[]
  socialLinks: SocialLink[]
  reducedMotion: boolean
}

export function HeroSection({
  artistName,
  tagline,
  hero,
  highlights,
  socialLinks,
  reducedMotion,
}: HeroSectionProps) {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 180])
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, reducedMotion ? 1 : 1.12])

  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-section__backdrop"
        style={{
          y: backgroundY,
          scale: backgroundScale,
          backgroundImage: `url(${hero.backgroundImage})`,
          backgroundPosition: hero.backgroundPosition ?? 'center',
        }}
        aria-hidden="true"
      />
      <img className="sr-only" src={hero.backgroundImage} alt={hero.backgroundAlt} />
      <div className="hero-section__overlay" aria-hidden="true" />

      <div className="hero-section__content section-shell">
        <div className="hero-section__copy">
          <p className="eyebrow">{hero.kicker}</p>
          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 30 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {artistName}
          </motion.h1>
          <motion.p
            className="hero-section__tagline"
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {tagline}
          </motion.p>
          <motion.p
            className="hero-section__claim"
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.claim}
          </motion.p>
          <motion.div
            className="hero-section__actions"
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <ButtonLink action={hero.primaryAction} />
            <ButtonLink action={hero.secondaryAction} variant="secondary" />
          </motion.div>
          <motion.p
            className="hero-section__supporting"
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.supportingText}
          </motion.p>
        </div>

        <motion.div
          className="hero-section__aside"
          initial={reducedMotion ? false : { opacity: 0, y: 26 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-section__stats">
            {highlights.map((highlight) => (
              <div key={highlight.label} className="hero-stat">
                <span>{highlight.label}</span>
                <strong>{highlight.value}</strong>
              </div>
            ))}
          </div>
          <SocialLinks links={socialLinks.slice(0, 3)} compact />
        </motion.div>
      </div>

      <a className="hero-section__scroll" href="#about">
        Ver perfil completo
        <ArrowDownRight size={18} />
      </a>
    </section>
  )
}
