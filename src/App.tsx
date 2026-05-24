import { HomePage } from './components/HomePage'
import { Layout } from './components/Layout'
import { ProjectPage } from './components/ProjectPage'
import { WorkPage } from './components/WorkPage'
import { Tab } from './data'
import { usePage } from './hooks/usePage'

export default function App() {
  const page = usePage()

  return (
    <Layout page={page}>
      {page === Tab.HOME && <HomePage />}
      {page === Tab.WORK && <WorkPage />}
      {page === Tab.PROJECTS && <ProjectPage />}
    </Layout>
  )
}
