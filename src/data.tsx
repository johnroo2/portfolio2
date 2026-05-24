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

type Bullet = {
    type: 'string',
    content: string,
} | {
    type: 'node',
    node: React.ReactNode,
}

type Experience = {
    company: string,
    companyLink: string,
    logo: string,
    logoDarkInvert?: boolean,
    location: string,
    technologies: string[],
    
    instances: {
        subtitle: string,
        startDate: string,
        endDate: string,
    }[],

    bullets: Bullet[],
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
                A feature-rich, high-performance graphing library built in <span className='font-semibold'>Rust</span> and <span className='font-semibold'>WebGL</span> that 
                I contributed to while working at <a href='https://www.windbornesystems.com/' target='_blank' rel='noopener noreferrer' className='hover:text-accent font-semibold hover:ul-style'>WindBorne Systems</a>.
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
                A web application for a mutual fund with over <span className='font-semibold'>$125k</span> in streamlined transactions, built on the <span className='font-semibold'>Stripe API</span> with elliptic curve encryption for user data.
            </p>
        ),
    },
    {
        name: 'Firepit',
        date: '02 / 2025',
        link: 'https://www.firepit.link/',
        technologies: ['React', 'Express', 'OpenAPI'],
        description: (
            <p>
                A <span className='font-semibold'>React + Express</span> coworking webapp where people screenshare what they&apos;re working on, with type-safe <span className='font-semibold'>OpenAPI</span> clients for live socket events and API calls.
            </p>
        ),
    },
    {
        name: 'Unfollowed.lol',
        link: 'https://unfollowed.lol',
        date: '04 / 2024',
        technologies: ['TypeScript', 'Supabase', 'Django', 'Postgres', 'GraphQL'],
        description: (
            <p>
                A Chrome extension for tracking marketing analytics that reached <span className='font-semibold'>#8</span> on Product Hunt with <span className='font-semibold'>100+</span> upvotes and <span className='font-semibold'>4000+</span> daily active users.
            </p>
        ),
    },
    {
        name: 'Retrospect',
        date: '07 / 2024',
        link: 'https://www.retrospect.space/',
        technologies: ['Swift', 'Go', 'Google Cloud'],
        description: (
            <p>
                An app for creating and sharing digital time capsules, with media stored in <span className='font-semibold'>Google Cloud</span> buckets and a social graph for discovery between friends.
            </p>
        ),
    },
    // {
    //     name: 'Darkest Dungeons',
    //     date: '02 / 2023',
    //     link: 'https://github.com/johnroo2/Darkest-Dungeons',
    //     technologies: ['Java', 'Swing Graphics'],
    //     description: (
    //         <p>
    //             A dungeon explorer, bullet hell roguelike game built in <span className='font-semibold'>Java</span> with <span className='font-semibold'>Swing Graphics</span>.
    //         </p>
    //     )
    // }
]

export const WORK_EXPERINCE: Experience[] = [
    {
        company: 'Figma',
        companyLink: 'https://www.figma.com/',
        logo: '/logos/figma.svg',
        logoDarkInvert: true,
        location: 'San Francisco, California',
        instances: [
            {
                subtitle: 'Software Engineer - Design Systems Editor',
                startDate: '05 / 2026',
                endDate: '08 / 2026',
            },
        ],
        technologies: ['C++', 'React.js', 'TypeScript', 'WebAssembly', 'Rust'],
        bullets: [
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
                subtitle: 'Software Engineer - Product Engineering',
                startDate: '09 / 2025',
                endDate: '04 / 2026',
            },
            {
                subtitle: 'Atlas Software Intern',
                startDate: '05 / 2025',
                endDate: '08 / 2025',
            },
        ],
        bullets: [
            {
                type: 'node',
                node: (
                    <p>
                        Owned full-stack development of an AI-powered forecasting insights platform <span className='font-semibold'>(TypeScript, React, Rails)</span> used 
                        by energy and commodities traders; contributed to <span className='font-semibold'>$2.5M+ ARR</span> within 4 months of launch
                    </p>
                )
            },
            {
                type: 'node',
                node: (
                    <p>
                        Engineered a tropical cyclone tracking pipeline by designing storm detection algorithms in <span className='font-semibold'>C++</span> over <span className='font-semibold'>500TB+</span> of global gridded weather data; built a caching layer in <span className='font-semibold'>Rust</span> enabling low-latency retrieval
                    </p>
                )
            },
            {
                type: 'node',
                node: (
                    <p>
                         Integrated <span className='font-semibold'>LangGraph</span>-based, tool-using LLM agents to generate automated meteorological + commodity
                         event insights; shipped a conversational UI with forecast-aware actions and internal tooling
                    </p>
                )
            },
        ],
        technologies: ['Ruby on Rails', 'Rust', 'C++', 'React.js', 'TypeScript', 'Python'],
    },
    {
        company: 'CIBC',
        companyLink: 'https://cibc.com/',
        logo: '/logos/cibc.svg',
        location: 'Toronto, Ontario',
        instances: [
            {
                subtitle: 'Software Engineer - Advanced Analytics & AI',
                startDate: '01 / 2025',
                endDate: '04 / 2025',
            },
        ],
        bullets: [
            {
                type: 'node',
                node: (
                    <p>
                        Built real-time chatbot features using <span className='font-semibold'>Python</span>, <span className='font-semibold'>Redis</span>, and <span className='font-semibold'>WebSocket</span> streaming, enabling low-latency tool
                        execution and interactive user experiences for CIBC's internal AI assistant
                    </p>
                )
            },
            {
                type: 'node',
                node: (
                    <p>
                        Delivered LLM-powered capabilities including live news ingestion, <span className='font-semibold'>RAG</span> over patent databases, and
                        sentiment classification for document triage and automated summarization
                    </p>
                )
            },
            {
                type: 'node',
                node: (
                    <p>
                       Architected a full-stack LLM prototyping framework (<span className='font-semibold'>Next.js</span>, <span className='font-semibold'>Prisma</span>, <span className='font-semibold'>FastAPI</span>) adopted across <span className='font-semibold'>10+ internal
                       repositories</span>, standardizing deployment and evaluation workflows
                    </p>
                )
            }
        ],
        technologies: ['Python', 'Azure Web Services', 'PostgreSQL', 'React.js', 'Django'],
    },
    {
        company: 'Slime Scholars',
        companyLink: 'https://slimescholars.com/',
        logo: '/logos/slime-scholars.png',
        location: 'Waterloo, Ontario',
        instances: [
            {
                subtitle: 'Software Engineer',
                startDate: '09 / 2023',
                endDate: '04 / 2024',
            },
        ],
        bullets: [
            {
                type: 'node',
                node: (
                    <p>
                        Spearheaded full-stack development of a gamified education platform specializing in combining learning with video games, built with <span className='font-semibold'>Next.js</span>, <span className='font-semibold'>React</span>, <span className='font-semibold'>MongoDB</span>, and <span className='font-semibold'>AWS</span>; contributed to <span className='font-semibold'>$85k</span> total raised as of Jul. 2024.
                    </p>
                )
            },
            {
                type: 'node',
                node: (
                    <p>
                        Developed a real-time matchmaking system to gamify learning through competitions, utilizing <span className='font-semibold'>cron jobs</span> and <span className='font-semibold'>aggregate queries</span> to match student teams based on size and skill level.
                    </p>
                )
            },
            {
                type: 'node',
                node: (
                    <p>
                        Designed and implemented a parsing algorithm for a lesson editor capable of handling XML-like strings, <span className='font-semibold'>LaTeX</span> formats, and various forms of media, significantly improving lesson-writing efficiency.
                    </p>
                )
            }
        ],
        technologies: ['React.js', 'MongoDB', 'AWS', 'Next.js'],
    },
]