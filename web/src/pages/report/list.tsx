import { ReportActionsChart } from "@/components/pages/report/actions";
import { ReportCategoriesStrenghtChart } from "@/components/pages/report/categoriesStrenght";
import { ReportDailyWorkBalanceChart } from "@/components/pages/report/dailyWorkBalance";
import { ReportGlobalWorkBalanceChart } from "@/components/pages/report/globalWorkBalance";
import { PageHolder } from "@/components/ui/pageHolder";

export const ReportListPage = () => {
  return (
    <PageHolder>
      <ReportActionsChart />
      <ReportDailyWorkBalanceChart />
      <ReportGlobalWorkBalanceChart />
      <ReportCategoriesStrenghtChart />
    </PageHolder>
  );
};
