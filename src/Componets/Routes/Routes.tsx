import type { RouteObject } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";

// Define your routes
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true, // Use index route instead of repeating path "/"
        element: <Home />,
      },
    ],
  },
];

// Create the router instance
export const router = createBrowserRouter(routes);
