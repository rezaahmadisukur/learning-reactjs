// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import LoginPage from "./pages/login/LoginPage.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import SignupPage from "./pages/signup/SignupPage.tsx";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
  <BrowserRouter>
    <Toaster duration={2000} position="top-right" />
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/test" element={<h1>HELLO INI TEST</h1>} />
    </Routes>
  </BrowserRouter>
);
