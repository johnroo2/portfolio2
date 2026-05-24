import { useEffect, useState } from 'react'
import { type Tab } from '@/data'
import { getPageFromPath, PAGE_TITLES } from '@/lib/pages'

export function usePage(): Tab {
  const [page, setPage] = useState<Tab>(() => getPageFromPath())

  useEffect(() => {
    const syncPage = () => {
      const nextPage = getPageFromPath()
      setPage(nextPage)
      document.title = PAGE_TITLES[nextPage]
    }

    syncPage()
    window.addEventListener('popstate', syncPage)
    return () => window.removeEventListener('popstate', syncPage)
  }, [])

  return page
}
