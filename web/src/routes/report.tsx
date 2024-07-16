import { ReportListPage } from "@/pages/report/list";

export const ReportRoutes = [
  { path: "reports", element: <ReportListPage /> },
  // {
  //   path: "meal",
  //   children: [
  //     { path: "create", element: <MealCreatePage /> },
  //     { path: ":id", element: <MealEditPage /> },
  //     { path: ":id/ingredients", element: <MealIngredientsPage /> },
  //   ],
  // },
];
