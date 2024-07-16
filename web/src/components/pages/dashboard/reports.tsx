import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const Reports = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Content</p>
        <Link to="/reports">See</Link>
      </CardContent>
    </Card>
  );
};
