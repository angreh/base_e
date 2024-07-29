import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useList } from "@/services/action/list";
import { useActionStore } from "@/store/action";
import { Action } from "@/types/shared_types";

export const ActionList = () => {
  const { isPending, isError } = useList();
  const { list: actions } = useActionStore();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Actions</CardTitle>
        <CardDescription>List of actions</CardDescription>
      </CardHeader>
      <CardContent>
        {actions!.map((action: Action) => (
          <div key={action.id}>{action.title}</div>
        ))}
      </CardContent>
    </Card>
  );
};
