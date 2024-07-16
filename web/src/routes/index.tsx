import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "@/layouts/root";
import { DashboardRoutes } from "@/routes/dashboard";
import { ActionRoutes } from "./action";
import { ReportRoutes } from "./report";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      ...DashboardRoutes,
      ...ActionRoutes,
      ...ReportRoutes
    ],
  },
]);
