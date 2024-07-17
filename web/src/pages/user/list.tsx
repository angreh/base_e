import { Button } from "@/components/ui/button";
import { PageHolder } from "@/components/ui/pageHolder";
import { useList } from "@/services/user/list";
import { useUserStore } from "@/store/user";
import { User } from "@/types/shared_types";

export const UserListPage = () => {
  const { isPending, isError } = useList();
  const { list: users } = useUserStore();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <PageHolder>
      <div>
        {users!.map((user: User) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>

      <div>
        <Button>Create</Button>
        <Button>Back</Button>
      </div>
    </PageHolder>
  );
};
