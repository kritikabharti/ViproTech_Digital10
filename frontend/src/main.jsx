import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'  // ✅ Add this import
import { HelmetProvider } from 'react-helmet-async'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <HelmetProvider> 
    <BrowserRouter>
     {/* ✅ Wrap App with BrowserRouter */}
      <App />
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)