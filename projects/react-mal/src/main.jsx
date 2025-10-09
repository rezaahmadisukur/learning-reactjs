import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DetailPage, ExplorePage, HomePage } from "./pages/index.js";
import ContextProvider from "./contexts/Context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/explore",
    element: <ExplorePage />
  },
  {
    path: "/anime/:id/full",
    element: <DetailPage />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
