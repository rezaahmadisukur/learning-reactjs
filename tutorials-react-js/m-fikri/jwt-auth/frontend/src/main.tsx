import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bulma/css/bulma.css";
import Register from "./components/Register.tsx";
import Login from "./components/Login.tsx";
import Dashboard from "./components/Dashboard.tsx";

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
