import type { ReactNode } from 'react'
import { Download, FileArchive, Image as ImageIcon, Type } from 'lucide-react'

import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { SocialLinks } from '../components/SocialLinks'
import type { AboutContent, DownloadItem, PresskitContent, SocialLink } from '../types/content'

type PresskitSectionProps = {
  about: AboutContent
  presskit: PresskitContent
  socialLinks: SocialLink[]
}

function DownloadList({
  items,
  title,
  icon,
}: {
  items: DownloadItem[]
  title: string
  icon: ReactNode
}) {
  return (
    <div className="presskit-block">
      <div className="presskit-block__header">
        {icon}
        <h3>{title}</h3>
      </div>
      <div className="presskit-downloads">
        {items.map((item) => (
          <a
            key={item.label}
            className="presskit-download"
            href={item.file}
            download={item.download}
            target={item.download === false ? '_blank' : undefined}
            rel={item.download === false ? 'noreferrer' : undefined}
          >
            <div>
              <strong>{item.label}</strong>
              <p>{item.description}</p>
            </div>
            <Download size={18} />
          </a>
        ))}
      </div>
    </div>
  )
}

export function PresskitSection({
  about,
  presskit,
  socialLinks,
}: PresskitSectionProps) {
  return (
    <section id="presskit" className="content-section">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Presskit"
            title="Todo el material esencial de contratación, concentrado en un solo bloque."
            description={presskit.intro}
          />
        </Reveal>

        <div className="presskit-layout">
          <Reveal className="presskit-bio" delay={0.08}>
            <p className="eyebrow">Biografía</p>
            <h3>Versión corta</h3>
            <p>{about.shortBio}</p>
            <h3>Versión completa</h3>
            <p>{about.longBio}</p>
          </Reveal>

          <Reveal className="presskit-assets" delay={0.12}>
            <DownloadList
              items={presskit.officialPhotos}
              title="Fotos oficiales"
              icon={<ImageIcon size={18} />}
            />
            <DownloadList
              items={presskit.logos}
              title="Branding"
              icon={<Type size={18} />}
            />
            <DownloadList
              items={presskit.documents}
              title="Documentos"
              icon={<FileArchive size={18} />}
            />
          </Reveal>
        </div>

        <Reveal className="presskit-socials" delay={0.16}>
          <p className="eyebrow">Contacto rápido</p>
          <SocialLinks links={socialLinks} />
        </Reveal>
      </div>
    </section>
  )
}
