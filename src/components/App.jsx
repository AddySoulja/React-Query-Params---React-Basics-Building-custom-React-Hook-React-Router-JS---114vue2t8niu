import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Query from "./Query";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Query />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
