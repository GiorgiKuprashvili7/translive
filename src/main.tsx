import React from "react";
// import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import NotImplemented from "./pages/NotImplemented";
import RootLayout from "./components/layout/RootLayout";
import Category from "./pages/Category";
import Members from "./pages/Members";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <NotImplemented />,
      },
      {
        path: "/category",
        element: <Category />,
        children: [
          {
            path: "/category/:name",
            element: <Members />,
          },
        ],
      },
    ],
  },
]);

const element = document.getElementById("root");

if (element) {
  const root = createRoot(element as HTMLElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  // Handle the case where the element is not found in the DOM
  console.error('Element with ID "root" not found.');
}
