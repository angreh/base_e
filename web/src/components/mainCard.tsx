import { ReactNode } from "react";

import { Card } from "@/components/ui/card";

export default function MainCard({ children }: { children: ReactNode }) {
  return <Card data-testid="main-card">{children}</Card>;
}
