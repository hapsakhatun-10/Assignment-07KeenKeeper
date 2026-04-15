import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouteLayout } from './layout/RouteLayout.jsx'
import NotFound from './pages/NotFound.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Stats from './pages/Stats.jsx'
import Timeline from './pages/Timeline.jsx'
import HomePage from './pages/HomePage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:< RouteLayout />,
    children:[

{
  index: true,
  element: <HomePage />,
 loader: async () => {
  const res = await fetch("/data.json");
  return res.json();
},
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
