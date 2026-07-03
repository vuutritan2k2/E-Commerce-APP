import { createBrowserRouter } from "react-router";

import AppLayout from "./AppLayout";
import HomePage from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/Eror/ErrorPage";

export type RouteHandle = {
  title: string;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        handle: {
          title: "Trang chủ",
        } satisfies RouteHandle,
      },
    ],
  },
]);