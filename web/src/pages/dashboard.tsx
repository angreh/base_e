import { Actions } from "@/components/pages/dashboard/actions";
import { Calendar } from "@/components/pages/dashboard/calendar";
import { CheckIns } from "@/components/pages/dashboard/checkIns";
import { Logs } from "@/components/pages/dashboard/log";
import { Reports } from "@/components/pages/dashboard/reports";
import { PageHolder } from "@/components/ui/pageHolder";

export const DashboardPage = () => {
  return (
    <PageHolder>
      <Actions />
      <Reports />
      <Logs />
      <Calendar />
      <CheckIns />
    </PageHolder>
  );
};
