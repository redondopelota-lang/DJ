import { useEffect, useEffectEvent, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Modal } from '../components/Modal'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import type { GalleryItem } from '../types/content'

type GallerySectionProps = {
  intro: string
  items: GalleryItem[]
}

export function GallerySection({ intro, items }: GallerySectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + items.length) % items.length,
    )
  }

  const showNext = () => {
    setActiveIndex((current) => (current === null ? null : (current + 1) % items.length))
  }

  const handleLightboxKeys = useEffectEvent((event: KeyboardEvent) => {
    if (activeIndex === null) {
      return
    }

    if (event.key === 'ArrowLeft') {
      showPrevious()
    }

    if (event.key === 'ArrowRight') {
      showNext()
    }
  })

  useEffect(() => {
    if (activeIndex === null) {
      return
    }

    document.addEventListener('keydown', handleLightboxKeys)

    return () => document.removeEventListener('keydown', handleLightboxKeys)
  }, [activeIndex])

  const activeItem = activeIndex === null ? null : items[activeIndex]

  return (
    <section id="gallery" className="content-section">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Galería"
            title="Retrato, cabina y escenario en una galería construida con material real."
            description={intro}
          />
        </Reveal>

        <div className="gallery-masonry">
          {items.map((item, index) => (
            <Reveal key={item.id} className="gallery-item" delay={0.05 + index * 0.03}>
              <button
                type="button"
                className="gallery-item__button"
                onClick={() => setActiveIndex(index)}
              >
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="gallery-item__caption">
                  <strong>{item.caption}</strong>
                  <small>{item.location}</small>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal
        isOpen={activeItem !== null}
        title={activeItem?.caption ?? 'Vista de galería'}
        onClose={() => setActiveIndex(null)}
        className="modal__panel--wide"
      >
        {activeItem ? (
          <div className="lightbox">
            <div className="lightbox__toolbar">
              <p className="eyebrow">Vista ampliada</p>
              <span>
                {activeIndex! + 1} / {items.length}
              </span>
            </div>
            <img src={activeItem.image} alt={activeItem.alt} />
            <div className="lightbox__footer">
              <div>
                <strong>{activeItem.caption}</strong>
                <p>{activeItem.location}</p>
              </div>
              <div className="lightbox__actions">
                <button type="button" className="icon-button" onClick={showPrevious}>
                  <ChevronLeft size={18} />
                </button>
                <button type="button" className="icon-button" onClick={showNext}>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  )
}
