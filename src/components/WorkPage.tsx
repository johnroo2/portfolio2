import { WORK_EXPERINCE } from '@/data'
import { CompanyLogo } from '@/components/CompanyLogo'

export function WorkPage() {
  return (
    <div className='space-y-6'>
      {WORK_EXPERINCE.map((work) => (
        <div key={work.company} className='company-hover flex gap-3 items-start'>
          <a
            href={work.companyLink}
            target='_blank'
            rel='noopener noreferrer'
            className='company-link mt-1.5 shrink-0'
          >
            <CompanyLogo
              src={work.logo}
              alt={`${work.company} logo`}
              darkInvert={work.logoDarkInvert}
            />
          </a>
          <div className='grow min-w-0 space-y-3'>
            <div className='flex flex-col gap-1.5 lg:flex-row lg:items-center lg:gap-4'>
              <a
                href={work.companyLink}
                target='_blank'
                rel='noopener noreferrer'
                className='company-link min-w-0'
              >
                <h2 className='company-title text-xl font-semibold font-inconsolata max-lg:whitespace-normal whitespace-nowrap'>
                  {work.company}
                </h2>
              </a>
              <p className='row-aside'>
                {work.location}
              </p>
            </div>
            <div className='flex flex-col'>
              {work.instances.map((instance) => (
                <div
                  key={instance.subtitle}
                  className='flex flex-col gap-0.5 lg:flex-row lg:items-center lg:gap-4'
                >
                  <p className='font-inconsolata min-w-0 max-lg:whitespace-normal whitespace-nowrap lg:grow'>
                    {instance.subtitle}
                  </p>
                  <p className='row-aside'>
                    {instance.startDate} - {instance.endDate}
                  </p>
                </div>
              ))}
            </div>
            {work.bullets.length > 0 && (
              <ul className='list-hollow list-outside ml-5 space-y-1.5'>
                {work.bullets.map((bullet, index) => (
                  <li key={`${work.company}-${index}`}>
                    {bullet.type === 'string' ? bullet.content : bullet.node}
                  </li>
                ))}
              </ul>
            )}
            {work.technologies.length > 0 && (
              <p className='text-faded font-inconsolata grow'>
                {work.technologies.join(' • ')}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
