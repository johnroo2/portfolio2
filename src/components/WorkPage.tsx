import { WORK_EXPERIENCE } from '@/data'
import { CompanyLogo } from '@/components/CompanyLogo'

export function WorkPage() {
  return (
    <div className='space-y-6'>
      {WORK_EXPERIENCE.map((work) => (
        <a
          key={work.company}
          href={work.companyLink}
          target='_blank'
          rel='noopener noreferrer'
          className='group flex gap-3 items-start'
        >
          <CompanyLogo
            src={work.logo}
            alt={`${work.company} logo`}
            darkInvert={work.logoDarkInvert}
            className='mt-1.5'
          />
          <div className='grow min-w-0 space-y-1.5'>
            <div>
              <h2 className='group-hover:text-accent group-hover:ul-style text-xl font-semibold'>
                {work.company}
              </h2>
              <p className='text-faded text-sm'>{work.location}</p>
            </div>
            {work.instances.map((instance) => (
              <div key={instance.subtitle}>
                <p className='max-lg:text-sm max-lg:tracking-tighter'>
                  {instance.subtitle}
                </p>
                <p className='text-faded text-sm'>
                  {instance.startDate} - {instance.endDate}
                </p>
              </div>
            ))}
          </div>
        </a>
      ))}
    </div>
  )
}
