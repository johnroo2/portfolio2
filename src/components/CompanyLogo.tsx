import classNames from 'classnames'

type CompanyLogoProps = {
  src: string
  alt: string
  darkInvert?: boolean
  className?: string
}

export function CompanyLogo({
  src,
  alt,
  darkInvert = false,
  className,
}: CompanyLogoProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames(
        'h-4 w-auto max-w-12 shrink-0 object-contain',
        darkInvert && 'dark:invert',
        className,
      )}
    />
  )
}
