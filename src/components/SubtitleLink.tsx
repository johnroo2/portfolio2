interface SubtitleLinkProps {
  link: string
  children: React.ReactNode
}

export function SubtitleLink({ link, children }: SubtitleLinkProps) {
  return (
    <a className='hover:text-accent group' href={link} target='_blank' rel='noopener noreferrer'>
        &#91;
        <span className='group-hover:ul-style'>
            {children}
        </span>
        &#93;
    </a>
  )
}