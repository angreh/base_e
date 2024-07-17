import { List, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Users = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Users</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="flex gap-2 cursor-pointer" onClick={() => navigate("/users")}>
          <List /> List
        </p>
        <p className="flex gap-2 cursor-pointer" onClick={() => navigate("/user/create")}>
          <Plus /> Create
        </p>
      </CardContent>
    </Card>
  );
};
