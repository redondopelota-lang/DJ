import { useEffect } from 'react'

import type { SeoContent } from '../types/content'

function isAbsoluteUrl(value: string) {
  return /^https?:\/\//i.test(value)
}

function resolvePublicUrl(value: string, fallback: string) {
  if (typeof window === 'undefined') {
    return value || fallback
  }

  if (!value) {
    return fallback
  }

  if (isAbsoluteUrl(value)) {
    return value
  }

  return new URL(value, window.location.origin).toString()
}

function setMeta(name: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector(`meta[${name}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(name, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function setCanonical(href: string) {
  let link = document.head.querySelector('link[rel="canonical"]')

  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }

  link.setAttribute('href', href)
}

export function useSeo(seo: SeoContent) {
  useEffect(() => {
    const siteUrl =
      seo.siteUrl || (typeof window !== 'undefined' ? window.location.origin : '')
    const canonicalUrl =
      seo.canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '')
    const ogImage = resolvePublicUrl(seo.ogImage, '')

    document.title = seo.title
    setMeta('name', 'description', seo.description)
    setMeta('name', 'theme-color', seo.themeColor)
    setMeta('property', 'og:title', seo.title)
    setMeta('property', 'og:description', seo.description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', siteUrl)
    setMeta('property', 'og:image', ogImage)
    setMeta('name', 'twitter:card', seo.twitterCard)
    setMeta('name', 'twitter:title', seo.title)
    setMeta('name', 'twitter:description', seo.description)
    setMeta('name', 'twitter:image', ogImage)
    setCanonical(canonicalUrl)
  }, [seo])
}
