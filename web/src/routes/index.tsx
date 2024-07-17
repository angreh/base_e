import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "@/layouts/root";
import { DashboardRoutes } from "./dashboard";
import { ActionRoutes } from "./action";
import { ReportRoutes } from "./report";
import { UserRoutes } from "./user";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      ...ActionRoutes,
      ...DashboardRoutes,
      ...ReportRoutes,
      ...UserRoutes,
    ],
  },
]);
