import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouteLayout } from './layout/RouteLayout.jsx'
import NotFound from './pages/NotFound.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Stats from './pages/Stats.jsx'
import Timeline from './pages/Timeline.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:< RouteLayout />,
    children:[

{
  index: true,
  element: <h2>homepage</h2>,

},

{
    path: "/timeline",
    element: <Timeline />,
  },

{
    path: "/stats",
    element: <Stats />,
  },


    ],
errorElement: < NotFound/>


  }

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>

  </StrictMode>,
)
