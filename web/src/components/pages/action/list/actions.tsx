import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

export const ActionActions = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate("/action/create")}>Create</Button>
    </div>
  );
};
