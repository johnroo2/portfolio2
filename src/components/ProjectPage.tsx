import { PROJECTS } from '@/data'

export function ProjectPage() {
  return (
    <div className='space-y-6'>
      {PROJECTS.map((project) => (
        <div key={project.name}>
          <div className='flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-4'>
            {project.link ? (
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-accent hover:ul-style min-w-0'
              >
                <h2 className='text-xl font-semibold font-inconsolata max-lg:whitespace-normal whitespace-nowrap'>
                  {project.name}
                </h2>
              </a>
            ) : (
              <h2 className='text-xl font-semibold font-inconsolata max-lg:whitespace-normal whitespace-nowrap'>
                {project.name}
              </h2>
            )}
            {project.date && (
              <p className='row-aside'>
                {project.date}
              </p>
            )}
          </div>
          <div className='flex items-center gap-4'>
            <p className='text-faded font-inconsolata grow'>
              {project.technologies.join(' • ')}
            </p>
          </div>
          {project.bullets.length > 0 && (
            <ul className='list-hollow list-outside ml-8 space-y-1.5 mt-1.5'>
              {project.bullets.map((bullet, index) => (
                <li key={`${project.name}-${index}`}>
                  {bullet.type === 'string' ? bullet.content : bullet.node}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}
