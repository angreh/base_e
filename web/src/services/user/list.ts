import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { JSONResponse } from "@/types/api";
import { User } from "@/types/shared_types";
import { useUserStore } from "@/store/user";

export const list = async (): Promise<User[]> => {
  try {
    const result = await axios.get<JSONResponse<User[]>>(
      "http://localhost:8080/user"
    );
    return result.data.content!;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const useList = (): {
  isPending: boolean;
  isError: boolean;
  refetch: Function;
} => {
  const { setList } = useUserStore();

  const { data, isPending, isError, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: list,
  });

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  return { isPending, isError, refetch };
};
