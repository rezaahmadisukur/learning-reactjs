// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/test" element={<h1>HELLO INI TEST</h1>} />
    </Routes>
  </BrowserRouter>
);
