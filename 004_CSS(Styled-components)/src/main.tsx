import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode> {/* Renderiza dos veces para buscar fallos */}
    <App />
  </StrictMode>,
)
