import { PROJECTS } from '@/data'

export function ProjectPage() {
  return (
    <div className='space-y-6'>
      {PROJECTS.map((project) => (
        <div key={project.name} className='space-y-1.5'>
          <div className='flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-4'>
            {project.link ? (
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-accent hover:ul-style min-w-0'
              >
                <h2 className='text-xl font-semibold max-lg:whitespace-normal whitespace-nowrap'>
                  {project.name}
                </h2>
              </a>
            ) : (
              <h2 className='text-xl font-semibold max-lg:whitespace-normal whitespace-nowrap'>
                {project.name}
              </h2>
            )}
            {project.date && (
              <p className='row-aside'>
                {project.date}
              </p>
            )}
          </div>
          <div className='max-lg:text-sm'>
            {project.description}
          </div>
          <div className='flex items-center gap-4'>
            <p className='text-faded grow max-lg:text-sm'>
              {project.technologies.join(' • ')}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
