import App from './components/App/App'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
