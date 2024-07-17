import { create } from "zustand";

import { User } from "@/types/shared_types";

interface UserState {
  item: User;
  list: User[];

  setProperty: (property: keyof User, value: any) => void;
  setList: (list: User[]) => void;
}

export const useUserStore = create<UserState>((set) => ({
  item: {
    id: undefined,
    name: "",
    email: "",
    password: "",
  },
  list: [],

  setProperty: (property: keyof User, value: any) => {
    set((state) => ({
      item: {
        ...state.item,
        [property]: value,
      },
    }));
  },
  setList: (list: User[]) => {
    set(() => ({ list }));
  },
}));
