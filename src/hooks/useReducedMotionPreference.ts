import { useEffect, useEffectEvent, useState } from 'react'

export function useReducedMotionPreference() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const syncPreference = useEffectEvent((query: MediaQueryList | MediaQueryListEvent) => {
    setPrefersReducedMotion(query.matches)
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    syncPreference(mediaQuery)

    const listener = (event: MediaQueryListEvent) => syncPreference(event)

    mediaQuery.addEventListener('change', listener)

    return () => {
      mediaQuery.removeEventListener('change', listener)
    }
  }, [])

  return prefersReducedMotion
}
