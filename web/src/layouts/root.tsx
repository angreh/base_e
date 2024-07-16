import { Plus } from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

export const RootLayout = () => {
  const navigate = useNavigate();

  const addHandler = () => {
    navigate("/action/create");
    console.log("add");
  };
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <div className="flex float-start flex-col w-full max-w-[400px] px-6 pb-4 mt-4">
        <Link to="/" className="text-3xl font-bold">
          Effort App
        </Link>
      </div>

      <div className="w-full max-w-[400px] mb-4">
        <Button variant="outline" onClick={() => addHandler()}>
          <Plus className="text-5xl" /> Add
        </Button>
      </div>

      <div className="w-full max-w-[400px]">
        <Outlet />
      </div>

      <div className="mx-auto px-4 py-4 w-[400px] text-right">
        <p>© 2024 Effort App</p>
      </div>
    </div>
  );
};
