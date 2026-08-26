
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './context/AppContect.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/react'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkProvider Publishablekey = {PUBLISHABLE_KEY} afterSignOutUrl='/'>
  <AppContextProvider>
    <App />
  </AppContextProvider>
    </ClerkProvider>
  </BrowserRouter>
)
