import axios from "axios";
import {
  UseMutationResult,
  useMutation
} from "@tanstack/react-query";

import { JSONResponse } from "@/types/api";
import { User } from "@/types/shared_types";
import { useUserStore } from "@/store/user";

export const create = async (user: User): Promise<number> => {
  try {
    const result = await axios.post<JSONResponse<number>>(
      "http://localhost:8080/user",
      user
    );
    return result.data.content!;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

export const useCreate = (): UseMutationResult<
  number,
  Error,
  void,
  unknown
> => {
  const { item: user } = useUserStore();

  return useMutation<number>({
    mutationKey: ["createUser", user.name],
    mutationFn: async () => {
      return await create(user);
    },
  });
};
