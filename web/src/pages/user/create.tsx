import { useNavigate } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/store/user";
import { useCreate } from "@/services/user/create";

export const UserCreatePage = () => {
  const navigate = useNavigate();

  const { setProperty, item } = useUserStore();
  const { mutateAsync } = useCreate();

  const createHandler = async () => {
    await mutateAsync();
    navigate("/users");
  };

  return (
    <div className="gap-2 flex flex-col">
      <pre>{JSON.stringify(item, null, 2)}</pre>
      <Input
        placeholder="Name"
        onChange={(e) => setProperty("name", e.target.value)}
      />
      <Input
        placeholder="Email"
        onChange={(e) => setProperty("email", e.target.value)}
      />
      <Input
        placeholder="Password"
        onChange={(e) => setProperty("password", e.target.value)}
      />
      <Button onClick={() => createHandler()}>Create</Button>
    </div>
  );
};
