import { useEffect, useEffectEvent, useState } from 'react'

import type { SectionId } from '../types/content'

export function useActiveSection(sectionIds: SectionId[]) {
  const [activeSection, setActiveSection] = useState<SectionId>(sectionIds[0])

  const onIntersect = useEffectEvent((entries: IntersectionObserverEntry[]) => {
    const visibleEntries = entries
      .filter((entry) => entry.isIntersecting)
      .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)

    if (visibleEntries[0]?.target.id) {
      setActiveSection(visibleEntries[0].target.id as SectionId)
    }
  })

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      threshold: [0.2, 0.35, 0.6],
      rootMargin: '-20% 0px -35% 0px',
    })

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId)

      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}
