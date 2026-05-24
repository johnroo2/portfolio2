import classNames from 'classnames'
import { useEffect, useState } from 'react'

type ConsoleTypedTextProps = {
  text: string
  className?: string
  speed?: number
}

export function ConsoleTypedText({
  text,
  className,
  speed = 6,
}: ConsoleTypedTextProps) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    setDisplayed('')
    let index = 0

    const interval = window.setInterval(() => {
      index += 1
      setDisplayed(text.slice(0, index))

      if (index >= text.length) {
        window.clearInterval(interval)
      }
    }, speed)

    return () => window.clearInterval(interval)
  }, [text, speed])

  return (
    <p className={classNames('text-base text-faded font-inconsolata', className)}>
      &gt; {displayed}
    </p>
  )
}
