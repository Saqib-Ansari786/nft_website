import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Collection from "./screens/Collection";
import Listing from "./screens/Listing";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Listing />
      </App>
    ),
  },
  {
    path: "/collections",
    element: (
      <App>
        <Collection />
      </App>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
