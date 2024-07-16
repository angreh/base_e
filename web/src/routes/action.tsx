import { ActionCreatePage } from "@/pages/action/create";
import { ActionListPage } from "@/pages/action/list";

export const ActionRoutes = [
  { path: "actions", element: <ActionListPage /> },
  {
    path: "action",
    children: [{ path: "create", element: <ActionCreatePage /> }],
  },
];
