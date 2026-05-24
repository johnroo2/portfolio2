import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Tab } from './data'
import { ThemeProvider } from './hooks/useTheme.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App page={Tab.HOME} />
    </ThemeProvider>
  </StrictMode>,
)
