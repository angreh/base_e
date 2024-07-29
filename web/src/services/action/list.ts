import axios from "axios";
import { useEffect } from "react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { useActionStore } from "@/store/action";
import { JSONResponse } from "@/types/api";
import { Action } from "@/types/shared_types";

export const list = async (): Promise<Action[]> => {
  try {
    const result = await axios.get<JSONResponse<Action[]>>(
      "http://localhost:8080/action"
    );
    return result.data.content!;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const useList = ():{
  isPending: boolean;
  isError: boolean;
  refetch: () => void;
} => {
  const { setList } = useActionStore();

  const { data, isPending, isError, refetch } = useQuery({
    queryKey: ["actions"],
    queryFn: list,
  });

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  return { isPending, isError, refetch };
};
