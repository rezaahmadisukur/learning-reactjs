import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bulma/css/bulma.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "./components/AddUser.jsx";
import EditUser from "./components/EditUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/create",
    element: <AddUser />
  },
  {
    path: "/edit/:id",
    element: <EditUser />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
