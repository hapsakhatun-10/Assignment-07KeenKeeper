import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./layout/Routes.jsx";
import { TimelineProvider } from "./components/TimelineContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
    </TimelineProvider>
  </StrictMode>,
);
