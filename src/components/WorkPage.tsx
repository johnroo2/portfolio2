import { WORK_EXPERINCE } from '@/data'
import { CompanyLogo } from '@/components/CompanyLogo'

export function WorkPage() {
  return (
    <div className='space-y-6'>
      {WORK_EXPERINCE.map((work) => (
        <div key={work.company} className='flex gap-3 items-start'>
          <CompanyLogo
            src={work.logo}
            alt={`${work.company} logo`}
            darkInvert={work.logoDarkInvert}
            className='mt-1.5'
          />
          <div className='grow min-w-0 space-y-1'>
            <div className='flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-4'>
              <a
                href={work.companyLink}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-accent hover:ul-style min-w-0'
              >
                <h2 className='text-xl font-semibold font-inconsolata max-lg:whitespace-normal whitespace-nowrap'>
                  {work.company}
                </h2>
              </a>
              <p className='row-aside'>
                {work.location}
              </p>
            </div>
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
            {work.bullets.length > 0 && (
              <ul className='list-hollow list-outside ml-5 space-y-1.5 mt-3'>
                {work.bullets.map((bullet, index) => (
                  <li key={`${work.company}-${index}`}>
                    {bullet.type === 'string' ? bullet.content : bullet.node}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
