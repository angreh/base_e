import { ActionListPage } from "@/pages/action/list";

export const ActionRoutes = [
  { path: "actions", element: <ActionListPage /> },
  // {
  //   path: "meal",
  //   children: [
  //     { path: "create", element: <MealCreatePage /> },
  //     { path: ":id", element: <MealEditPage /> },
  //     { path: ":id/ingredients", element: <MealIngredientsPage /> },
  //   ],
  // },
];
