import { useNavigate } from "react-router-dom";
import { List, Plus } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Actions = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <p
          className="flex gap-2 cursor-pointer"
          onClick={() => navigate("/actions")}>
          <List /> List
        </p>
        <p
          className="flex gap-2 cursor-pointer"
          onClick={() => navigate("/action/create")}>
          <Plus /> Create
        </p>
      </CardContent>
    </Card>
  );
};
