import { StrictMode } from "react";
import "./App.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import ProductPage from "./pages/products.jsx";
import ProfilePage from "./pages/profile.jsx";
import DetailProductPage from "./pages/detailProducts.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Dashboard</div>,
        errorElement: <ErrorPage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/products",
        element: <ProductPage />
    },
    {
        path: "/profile",
        element: <ProfilePage />
    },
    {
        path: "/product/:id",
        element: <DetailProductPage />
    }
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
