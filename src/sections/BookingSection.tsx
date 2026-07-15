import { Mail, PhoneCall } from 'lucide-react'

import { ButtonLink } from '../components/ButtonLink'
import { Reveal } from '../components/Reveal'
import { SocialLinks } from '../components/SocialLinks'
import type { ContactContent, SocialLink } from '../types/content'

type BookingSectionProps = {
  contact: ContactContent
  socialLinks: SocialLink[]
}

export function BookingSection({ contact, socialLinks }: BookingSectionProps) {
  const whatsappUrl = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`
    : null
  const primaryIsWhatsapp = contact.primaryAction.platform === 'whatsapp'

  return (
    <section id="booking" className="content-section content-section--last">
      <div className="section-shell booking-section">
        <Reveal className="booking-section__intro">
          <p className="eyebrow">Booking</p>
          <h2>{contact.heading}</h2>
          <p>{contact.body}</p>
          <div className="booking-section__actions">
            <ButtonLink action={contact.primaryAction} />
            {primaryIsWhatsapp ? (
              <a
                className="button-link button-link--secondary"
                href={`mailto:${contact.bookingEmail}?subject=Booking%20%C3%81lvaro%20Redon`}
              >
                Enviar email
              </a>
            ) : whatsappUrl ? (
              <a
                className="button-link button-link--secondary"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            ) : null}
          </div>
        </Reveal>

        <Reveal className="booking-section__panel" delay={0.12}>
          <div className="contact-row">
            <Mail size={18} />
            <div>
              <span>Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>

          {contact.phone && contact.phoneLabel ? (
            <div className="contact-row">
              <PhoneCall size={18} />
              <div>
                <span>{contact.phoneLabel}</span>
                <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
              </div>
            </div>
          ) : (
            <div className="contact-row">
              <PhoneCall size={18} />
              <div>
                <span>{contact.bookingLabel}</span>
                <a href={`mailto:${contact.bookingEmail}`}>{contact.bookingEmail}</a>
              </div>
            </div>
          )}

          <SocialLinks links={socialLinks} />
        </Reveal>
      </div>
    </section>
  )
}
