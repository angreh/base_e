import { PageHolder } from "@/components/ui/pageHolder";
import { ActionList } from "@/components/pages/action/list/list";
import { ActionActions } from "@/components/pages/action/list/actions";

export const ActionListPage = () => {
  return (
    <PageHolder>
      <ActionList />
      <ActionActions />
    </PageHolder>
  );
};
