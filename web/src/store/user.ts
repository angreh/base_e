import { create } from "zustand";

import { User } from "@/types/shared_types";

interface UserState {
  list: User[];

  setList: (list: User[]) => void;
}

export const useUserStore = create<UserState>((set) => ({
  list: [],

  setList: (list: User[]) => {
    set(() => ({ list }));
  },
}));
