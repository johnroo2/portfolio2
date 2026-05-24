import classNames from 'classnames'
import type { MouseEvent, ReactNode } from 'react'
import { SUBTITLE_LINKS, Tab, TAB_DATA } from '../data'
import { navigate, PAGE_PATHS } from '../lib/pages'
import { ConsoleTypedText } from './ConsoleTypedText'
import { SubtitleLink } from './SubtitleLink'
import { ThemeToggle } from './ThemeToggle'

type LayoutProps = {
  page: Tab
  children: ReactNode
}

function handleNavClick(event: MouseEvent<HTMLAnchorElement>, path: string) {
  if (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  ) {
    return
  }

  event.preventDefault()
  navigate(path)
}

export function Layout({ page, children }: LayoutProps) {
  const tabData = TAB_DATA.find((tab) => tab.tab === page)!

  return (
    <main className="relative h-full max-w-4xl mx-auto p-12 space-y-6">
      <nav className="flex items-center gap-4 px-3 py-1.5 border border-faded/40 w-full">
        <div className="grow flex items-center font-inconsolata gap-2">
          {TAB_DATA.map((tab) => (
            <a
              key={tab.tab}
              href={PAGE_PATHS[tab.tab]}
              onClick={(event) => handleNavClick(event, PAGE_PATHS[tab.tab])}
              className={classNames('px-4 py-0.5', {
                'bg-faded/8 ul-style': page === tab.tab,
                'hover:bg-faded/8': page !== tab.tab,
              })}
            >
              {tab.title}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </nav>
      <div className="px-3 space-y-3">
        <div className="flex items-center gap-4">
          <div className="flex flex-col grow">
            <h1 className="text-3xl font-semibold font-inconsolata whitespace-nowrap">
              {tabData.header}
            </h1>
            <ConsoleTypedText text={tabData.subtitle} />
          </div>
          {page === Tab.HOME && (
            <div
              className="flex items-center justify-end font-inconsolata flex-wrap"
              style={{ columnGap: '1rem' }}
            >
              {SUBTITLE_LINKS.map(({ link, title }) => (
                <SubtitleLink key={title} link={link}>
                  {title}
                </SubtitleLink>
              ))}
            </div>
          )}
        </div>
        {children}
      </div>
      <footer className="px-4 pt-6 mt-12 text-sm text-faded font-inconsolata border-t border-faded/40">
        © 2026 John Liu
      </footer>
    </main>
  )
}
