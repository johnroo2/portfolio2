import { useEffect, useState } from 'react'
import { Tab, HOME_META_DESCRIPTION, type Tab as TabValue } from '@/data'
import { getPageFromPath, PAGE_TITLES } from '@/lib/pages'

const DESCRIPTION_META: { name: string; property?: boolean }[] = [
  { name: 'description' },
  { name: 'og:description', property: true },
  { name: 'twitter:description' },
]

function setMetaContent(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name'
  let element = document.querySelector(`meta[${attr}="${name}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, name)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function clearMetaContent(name: string, property = false) {
  const attr = property ? 'property' : 'name'
  document.querySelector(`meta[${attr}="${name}"]`)?.remove()
}

export function usePage(): TabValue {
  const [page, setPage] = useState<TabValue>(() => getPageFromPath())

  useEffect(() => {
    const syncPage = () => {
      const nextPage = getPageFromPath()
      setPage(nextPage)
      document.title = PAGE_TITLES[nextPage]

      if (nextPage === Tab.HOME) {
        for (const { name, property } of DESCRIPTION_META) {
          setMetaContent(name, HOME_META_DESCRIPTION, property)
        }
      } else {
        for (const { name, property } of DESCRIPTION_META) {
          clearMetaContent(name, property)
        }
      }
    }

    syncPage()
    window.addEventListener('popstate', syncPage)
    return () => window.removeEventListener('popstate', syncPage)
  }, [])

  return page
}
