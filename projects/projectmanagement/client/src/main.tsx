// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import LoginPage from "./pages/login/LoginPage.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import SignupPage from "./pages/signup/SignupPage.tsx";
import AuthLayout from "./pages/layout/AuthLayout.tsx";
import DashboardPage from "./pages/dashboard/DashboardPage.tsx";
import PublicRoute from "./routes/PublicRoute.tsx";

const root = document.getElementById("root") as HTMLElement;

const PublicRoutes = [
  { path: "/", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> }
];

createRoot(root).render(
  <BrowserRouter>
    <Toaster duration={2000} position="top-right" />
    <Routes>
      {PublicRoutes.map(({ path, element }) => (
        <Route
          path={path}
          element={<PublicRoute>{element}</PublicRoute>}
          key={path}
        />
      ))}
      {/* <Route path="/signup" element={<SignupPage />} /> */}
      <Route element={<AuthLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
