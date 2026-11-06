export const Tab = {
  HOME: 'home',
  WORK: 'work',
  PROJECTS: 'projects',
} as const

export type Tab = (typeof Tab)[keyof typeof Tab]

export const TAB_DATA: {
  tab: Tab
  title: string
  header: string
  subtitle: string
}[] = [
{ tab: Tab.HOME, title: '~/', header: 'John Liu', subtitle: 'hi, nice to meet you!' },
  { tab: Tab.WORK, title: 'work', header: 'Work', subtitle: "these are some of the places i've worked at." },
  { tab: Tab.PROJECTS, title: 'projects', header: 'Projects', subtitle: "this is some of the stuff i've been working on." },
]

export const SUBTITLE_LINKS: {
  link: string
  title: string
}[] = [
  { link: 'https://github.com/johnroo2', title: 'github' },
  { link: 'mailto:j369liu@uwaterloo.ca', title: 'e-mail' },
  { link: 'https://www.linkedin.com/in/john--liu', title: 'linkedin' },
  { link: '/assets/resume.pdf', title: 'resume' },
]

export const HOME_CONTENT: React.ReactNode = (
  <>
    <p>
      I&apos;m studying computer science at{' '}
      <a
        className='hover:text-accent font-bold ul-style'
        href='https://uwaterloo.ca/'
        target='_blank'
        rel='noopener noreferrer'
      >
        University of Waterloo
      </a>
      , and I&apos;m currently based in <span className='font-bold'>San Francisco</span> working
      on rendering / editor infrastructure for design systems at{' '}
      <a
        className='hover:text-accent font-bold ul-style'
        href='https://www.figma.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Figma
      </a>
      .
    </p>
    <p>
      I&apos;m interested in solving puzzles, building performant systems, and fullstack web development.
    </p>
  </>
)

type Experience = {
    company: string,
    companyLink: string,
    logo: string,
    logoDarkInvert?: boolean,
    location: string,

    instances: {
        subtitle: string,
        startDate: string,
        endDate: string,
    }[],
}

type Project = {
    name: string,
    link?: string,
    date: string,
    technologies: string[],
    description: React.ReactNode,
}

export const PROJECTS: Project[] = [
    {
        name: '@windborne/grapher',
        link: 'https://www.npmjs.com/package/@windborne/grapher',
        date: '09 / 2025',
        technologies: ['Rust', 'JavaScript', 'WebGL'],
        description: (
            <p>
                A feature-rich, high-performance graphing library built in <span className='font-bold'>Rust</span> and <span className='font-bold'>WebGL</span> that 
                I contributed to while working at <a href='https://www.windbornesystems.com/' target='_blank' rel='noopener noreferrer' className='hover:text-accent font-bold hover:ul-style'>WindBorne Systems</a>.
            </p>
        ),
    },
    {
        name: 'Marble Investments',
        link: 'https://www.marbleinvestments.ca/',
        date: '01 / 2024',
        technologies: ['Next.js', 'React', 'MongoDB'],
        description: (
            <p>
                A portfolio tracker for a mutual fund that I started with my roommates. We grew it from <span className='font-bold'>$250k</span> to <span className='font-bold'>$2.0M</span> with <span className='font-bold'>65%</span> YoY returns. I also designed the site :)
            </p>
        ),
    },
    {
        name: 'Firepit',
        date: '02 / 2025',
        link: 'https://github.com/jiayishen21/firepit/',
        technologies: ['React', 'Express', 'OpenAPI'],
        description: (
            <p>
                A <span className='font-bold'>React + Express</span> coworking webapp where people screenshare what they&apos;re working on, with type-safe <span className='font-bold'>OpenAPI</span> clients for live socket events and API calls.
            </p>
        ),
    },
    {
        name: 'Unfollowed.lol',
        link: 'https://github.com/TenacityLabs/unfollowed.lol/',
        date: '04 / 2024',
        technologies: ['TypeScript', 'Supabase', 'Django', 'Postgres', 'GraphQL'],
        description: (
            <p>
                A Chrome extension for tracking marketing analytics that reached <span className='font-bold'>#8</span> on Product Hunt with <span className='font-bold'>100+</span> upvotes and <span className='font-bold'>4000+</span> daily active users.
            </p>
        ),
    },
]

export const WORK_EXPERIENCE: Experience[] = [
    {
        company: 'Jane Street',
        companyLink: 'https://www.janestreet.com/',
        logo: '/logos/jane-street.svg',
        logoDarkInvert: true,
        location: 'New York, New York',
        instances: [
            {
                subtitle: 'Incoming Software Engineer Intern',
                startDate: '05 / 2027',
                endDate: '08 / 2027',
            },
        ],
    },
    {
        company: 'Stripe',
        companyLink: 'https://stripe.com/',
        logo: '/logos/stripe.svg',
        logoDarkInvert: true,
        location: 'New York, New York',
        instances: [
            {
                subtitle: 'Incoming Software Engineer Intern',
                startDate: '01 / 2027',
                endDate: '04 / 2027',
            },
        ],
    },
    {
        company: 'Figma',
        companyLink: 'https://www.figma.com/',
        logo: '/logos/figma.svg',
        logoDarkInvert: true,
        location: 'San Francisco, California',
        instances: [
            {
                subtitle: 'Software Engineer Intern',
                startDate: '05 / 2026',
                endDate: '08 / 2026',
            },
        ],
    },
    {
        company: 'WindBorne Systems',
        companyLink: 'https://www.windbornesystems.com/',
        logo: '/logos/windborne.svg',
        logoDarkInvert: true,
        location: 'Palo Alto, California',
        instances: [
            {
                subtitle: 'Atlas Software Intern',
                startDate: '05 / 2025',
                endDate: '08 / 2025',
            },
        ],
    },
]