import {
  Camera,
  Globe,
  Mail,
  Music2,
  Play,
  Radio,
  Smartphone,
} from 'lucide-react'

import type { LinkPlatform, SocialLink } from '../types/content'

const iconMap: Record<LinkPlatform, typeof Globe> = {
  website: Globe,
  instagram: Camera,
  soundcloud: Music2,
  spotify: Radio,
  mixcloud: Play,
  youtube: Play,
  tiktok: Smartphone,
  whatsapp: Smartphone,
  email: Mail,
}

type SocialLinksProps = {
  links: SocialLink[]
  compact?: boolean
}

export function SocialLinks({ links, compact = false }: SocialLinksProps) {
  return (
    <div className={compact ? 'social-links social-links--compact' : 'social-links'}>
      {links.map((link) => {
        const Icon = iconMap[link.platform]
        const isExternal =
          link.href.startsWith('http://') || link.href.startsWith('https://')

        return (
          <a
            key={link.label}
            className="social-link"
            href={link.href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
            aria-label={link.label}
          >
            <Icon size={18} strokeWidth={1.7} />
            <span>
              {link.label}
              {link.handle ? <small>{link.handle}</small> : null}
            </span>
          </a>
        )
      })}
    </div>
  )
}
