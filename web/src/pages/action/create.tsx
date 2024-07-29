import { PageHolder } from "@/components/ui/pageHolder";
import { ActionCreateForm } from "@/components/pages/action/create/form";
import { ActionCreateActions } from "@/components/pages/action/create/actions";

export const ActionCreatePage = () => {
  return (
    <PageHolder>
      <ActionCreateForm />
      <ActionCreateActions />
    </PageHolder>
  );
};
