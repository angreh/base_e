import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { PageHolder } from "@/components/ui/pageHolder";
import { useList } from "@/services/user/list";
import { useUserStore } from "@/store/user";
import { User } from "@/types/shared_types";
import { Trash2 } from "lucide-react";
import { remove } from "@/services/user/remove";

export const UserListPage = () => {
  const { isPending, isError, refetch } = useList();
  const { list: users } = useUserStore();

  const navigate = useNavigate();

  const deleteHandler = async (userID: number) => {
    await remove(userID);
    refetch();
    // navigate("/user/delete/" + userID);
  };

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <PageHolder>
      <div>
        {users!.map((user: User) => (
          <div key={user.id} className="flex gap-2 items-center">
            {user.name}{" "}
            <Trash2 size={16} onClick={() => deleteHandler(user.id!)} />
          </div>
        ))}
      </div>

      <div>
        <Button onClick={() => navigate("/user/create")}>Create</Button>
        <Button>Back</Button>
      </div>
    </PageHolder>
  );
};
