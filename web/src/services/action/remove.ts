import axios from "axios";

import { JSONResponse } from "@/types/api";

export const remove = async (actionID:number): Promise<boolean> => {
  try {
    const result = await axios.delete<JSONResponse<boolean>>(
      "http://localhost:8080/action/" + actionID
    );

    return result.data.content as boolean;
  } catch (error) {
    console.error(error);
    return false;
  }
};

