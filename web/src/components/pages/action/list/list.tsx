import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useList } from "@/services/action/list";
import { remove } from "@/services/action/remove";
import { useActionStore } from "@/store/action";
import { Action } from "@/types/shared_types";

export const ActionList = () => {
  const { isPending, isError, refetch } = useList();
  const { list: actions } = useActionStore();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const deleteHandler = async (actionID: number) => {
    await remove(actionID);
    refetch();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Actions</CardTitle>
        <CardDescription>List of actions</CardDescription>
      </CardHeader>
      <CardContent>
        <table width="100%">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left">Title</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {actions!.map((action: Action) => (
              <tr key={action.id}>
                <td>{!action.title ? "[ no title ]" : action.title}</td>
                <td className="text-right">Edit | <a onClick={() => deleteHandler(action.id!)}>Delete</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};
