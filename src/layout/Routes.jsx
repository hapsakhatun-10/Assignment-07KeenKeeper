import { createBrowserRouter } from "react-router-dom";
import RouteLayout from "../layout/RouteLayout";

import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Stats from "../pages/Stats";
import Timeline from "../pages/Timeline";
import CardDetails from "../components/CardDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    errorElement: <NotFound />,
    hydrateFallbackElement: <h1>Loading App...</h1>, // ✅ ADD THIS
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: async () => {
          const res = await fetch("/data.json");
          return res.json();
        },
      },

      {
        path: "/friendscard/:id",
        element: <CardDetails />,
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
  },
]);
