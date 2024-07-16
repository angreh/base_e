import { JSONResponse } from "@/types/api";
import { Action } from "@/types/shared_types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const list = async (): Promise<Action[]> => {
  try {
    const result = await axios.get<JSONResponse<Action[]>>("http://localhost:8080/action");
    return result.data.content!;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const useList = () => {
  const {
    data: actions,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["action"],
    queryFn: list,
  });

  return { actions, isPending, isError };
};
