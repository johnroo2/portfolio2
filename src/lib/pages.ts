import { Tab } from '@/data'

export const PAGE_PATHS: Record<Tab, string> = {
  [Tab.HOME]: '/',
  [Tab.WORK]: '/work.html',
  [Tab.PROJECTS]: '/project.html',
}

export const PAGE_TITLES: Record<Tab, string> = {
  [Tab.HOME]: 'John Liu',
  [Tab.WORK]: 'Work · John Liu',
  [Tab.PROJECTS]: 'Projects · John Liu',
}

export function getPageFromPath(pathname = window.location.pathname): Tab {
  if (pathname.endsWith('/work.html') || pathname === '/work') return Tab.WORK
  if (pathname.endsWith('/project.html') || pathname === '/project') return Tab.PROJECTS
  return Tab.HOME
}

export function navigate(path: string) {
  if (path === window.location.pathname) return
  window.history.pushState(null, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}
