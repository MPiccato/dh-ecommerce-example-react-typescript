import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayoutMain } from './components/Layout/LayoutMain.tsx'
import Home from './pages/Home/Home.tsx'
import Cart from './pages/Cart/Cart.tsx'
import { CartProvider } from './Context/cartProvider.tsx'

const router = createBrowserRouter([
   {
    path: '/',
    element: <LayoutMain/>,
    children: [
      {index: true, element: <Home/>},
      {path:'/cart', element:<Cart/>}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <CartProvider>
      {/* App */}
      <RouterProvider router={router}/>
    </CartProvider>
  
  </StrictMode>,
)
