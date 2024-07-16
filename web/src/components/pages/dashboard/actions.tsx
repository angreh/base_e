import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const Actions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Content</p>
        <Link to="/actions">See</Link>
      </CardContent>
    </Card>
  );
};
