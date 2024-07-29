import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useCreate as useCreateAction } from "@/services/action/create";

export const ActionCreateActions = () => {
  const navigate = useNavigate();
  const { mutateAsync } = useCreateAction();

  const createHandler = async () => {
    await mutateAsync();
    navigate("/actions");
  };

  return (
    <Button className="w-full" onClick={createHandler}>
      Create
    </Button>
  );
};
