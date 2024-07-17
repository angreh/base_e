import { UserCreatePage } from "@/pages/user/create";
import { UserListPage } from "@/pages/user/list";

export const UserRoutes = [
  { path: "users", element: <UserListPage /> },
  {
    path: "user",
    children: [{ path: "create", element: <UserCreatePage /> }],
  },
];
