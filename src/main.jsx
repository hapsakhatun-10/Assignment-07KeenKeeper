import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router-dom"; // ✅ ADD THIS
import { router } from './layout/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} 
    fallbackElement={<h1>Loading...</h1>}
    />
  </StrictMode>
)