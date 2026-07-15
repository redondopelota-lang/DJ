export type SectionId =
  | 'home'
  | 'about'
  | 'music'
  | 'gallery'
  | 'dates'
  | 'presskit'
  | 'booking'

export type LinkPlatform =
  | 'website'
  | 'instagram'
  | 'soundcloud'
  | 'spotify'
  | 'mixcloud'
  | 'youtube'
  | 'tiktok'
  | 'whatsapp'
  | 'email'

export interface NavItem {
  id: SectionId
  label: string
}

export interface SeoContent {
  title: string
  description: string
  siteUrl: string
  canonicalUrl: string
  ogImage: string
  twitterCard: 'summary_large_image' | 'summary'
  themeColor: string
}

export interface LinkAction {
  label: string
  href: string
  platform: LinkPlatform
  download?: boolean
}

export interface SocialLink extends LinkAction {
  handle?: string
}

export interface HighlightStat {
  label: string
  value: string
}

export interface HeroContent {
  kicker: string
  claim: string
  backgroundImage: string
  backgroundPosition?: string
  backgroundAlt: string
  primaryAction: LinkAction
  secondaryAction: LinkAction
  supportingText: string
}

export interface AboutContent {
  location: string
  genres: string[]
  shortBio: string
  longBio: string
  portrait: string
  portraitAlt: string
  highlights: HighlightStat[]
}

export interface MusicItem {
  id: string
  title: string
  cover: string
  coverAlt: string
  date: string
  genre: string
  platform: string
  duration?: string
  description: string
  embedUrl?: string
  featured?: boolean
  links: LinkAction[]
}

export interface GalleryItem {
  id: string
  image: string
  alt: string
  caption: string
  location: string
}

export interface DownloadItem {
  label: string
  description: string
  file: string
  download?: boolean
}

export interface PresskitContent {
  intro: string
  officialPhotos: DownloadItem[]
  logos: DownloadItem[]
  documents: DownloadItem[]
}

export interface ContactContent {
  heading: string
  body: string
  email: string
  phone?: string
  phoneLabel?: string
  bookingLabel: string
  bookingEmail: string
  managementLabel?: string
  managementEmail?: string
  whatsapp?: string
  primaryAction: LinkAction
}

export interface SceneBlock {
  title: string
  body: string
}

export interface SceneContent {
  intro: string
  milestones: SceneBlock[]
  venues: string[]
  territories: string[]
  lineUp: string[]
}

export interface FooterContent {
  eyebrow: string
  description: string
}

export interface DJContent {
  seo: SeoContent
  theme: {
    accent: string
  }
  artist: {
    name: string
    logoText: string
    tagline: string
  }
  navigation: NavItem[]
  hero: HeroContent
  about: AboutContent
  socialLinks: SocialLink[]
  music: {
    intro: string
    sessions: MusicItem[]
  }
  gallery: {
    intro: string
    items: GalleryItem[]
  }
  scene: SceneContent
  presskit: PresskitContent
  contact: ContactContent
  footer: FooterContent
}
