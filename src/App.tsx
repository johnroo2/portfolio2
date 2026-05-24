import { HomePage } from './components/HomePage'
import { Layout } from './components/Layout'
import { ProjectPage } from './components/ProjectPage'
import { WorkPage } from './components/WorkPage'
import { Tab } from './data'

type AppProps = {
  page: Tab
}

export default function App({ page }: AppProps) {
  return (
    <Layout page={page}>
      {page === Tab.HOME && <HomePage />}
      {page === Tab.WORK && <WorkPage />}
      {page === Tab.PROJECTS && <ProjectPage />}
    </Layout>
  )
}
