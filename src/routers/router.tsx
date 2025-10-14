import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "@/pages/Home/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);
