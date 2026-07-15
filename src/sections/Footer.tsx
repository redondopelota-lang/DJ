import type { FooterContent, NavItem, SocialLink } from '../types/content'

type FooterProps = {
  artistName: string
  navItems: NavItem[]
  socialLinks: SocialLink[]
  footer: FooterContent
}

export function Footer({ artistName, navItems, socialLinks, footer }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="section-shell site-footer__inner">
        <div>
          <p className="eyebrow">{footer.eyebrow}</p>
          <h2>{artistName}</h2>
          <p>
            {new Date().getFullYear()} / {footer.description}
          </p>
        </div>

        <div className="site-footer__links">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="site-footer__socials">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
