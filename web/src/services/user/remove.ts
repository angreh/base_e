import axios from "axios";

import { JSONResponse } from "@/types/api";

export const remove = async (userID: number): Promise<number> => {
  try {
    const result = await axios.delete<JSONResponse<number>>(
      "http://localhost:8080/user/" + userID
    );
    return result.data.content!;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

// export const useCreate = (): UseMutationResult<
//   number,
//   Error,
//   void,
//   unknown
// > => {
//   const { item: user } = useUserStore();

//   return useMutation<number>({
//     mutationKey: ["createUser", user.name],
//     mutationFn: async () => {
//       return await create(user);
//     },
//   });
// };
