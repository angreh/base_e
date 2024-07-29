import axios from "axios";
import { UseMutationResult, useMutation } from "@tanstack/react-query";

import { JSONResponse } from "@/types/api";
import { Action } from "@/types/shared_types";
import { useActionStore } from "@/store/action";

type CreateActionParams = {
  action: Action;
  userID: number;
};
export const create = async ({
  action,
  userID,
}: CreateActionParams): Promise<number> => {
  try {
    const result = await axios.post<JSONResponse<number>>(
      "http://localhost:8080/action",
      {
        action,
        user_id:userID,
      }
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
  const { item: action, selectedUser } = useActionStore();

  return useMutation<number>({
    mutationKey: ["createAction", action.title],
    mutationFn: async () => {
      return await create({
        action,
        userID: selectedUser!,
      });
    },
  });
};
