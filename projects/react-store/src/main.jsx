import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  DetailProductPage,
  HomePage,
  ProductsPage,
  CartShoppingPage,
  ContactPage,
  AboutPage
} from "./pages";
import ContextProvider from "./Contexts/Context";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/products",
    element: <ProductsPage />
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />
  },
  {
    path: "/cart",
    element: <CartShoppingPage />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </Provider>
  </StrictMode>
);
