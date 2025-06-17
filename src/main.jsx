import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './myApp.css'
import CartPage from './pages/cartPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <CartPage/>
  </StrictMode>,
)
