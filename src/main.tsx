import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import '@fontsource-variable/montserrat'
import '@fontsource-variable/open-sans'
import './index.css'
import App from './App'
import { InstallProvider } from './hooks/useInstallPrompt'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <InstallProvider>
          <App />
        </InstallProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
