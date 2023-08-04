import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Layout } from "./Layout";
import { ProtectRoute } from "./guard/guardRoute";
import { ContainerDetails, Dashboard, ProductContainer } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/products",
        element: <ProductContainer />,
      },
      {
        path: "/product/:id",
        element: <ContainerDetails />,
      },

      {
        path: "/products/page/:page",
        element: <ProductContainer />,
      },
      {
        path: "/dashboard",
        element: <ProtectRoute element={Dashboard} />,
      },
    ],
  },
]);
