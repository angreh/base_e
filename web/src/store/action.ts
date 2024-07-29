import { create } from "zustand";

import { Action } from "@/types/shared_types";

interface ActionState {
  selectedUser?: number;
  item: Action;
  list: Action[];

  setProperty: (key: keyof Action, value: any) => void;
  setList: (list: Action[]) => void;
  setUser: (userID: number) => void;
}

export const useActionStore = create<ActionState>((set) => ({
  item: {
    id: undefined,
    title: "",
    description: "",
    type: "",
    status: "",
    start_date: undefined,
    end_date: undefined,
    difficulty: 1,
    importance: 1,
    emotional_tax: 1,
  },
  list: [],
  selectedUser: undefined,

  setProperty: (property: keyof Action, value: any) => {
    set((state) => ({
      item: {
        ...state.item,
        [property]: value,
      },
    }));
  },
  setList: (list: Action[]) => {
    set(() => ({ list }));
  },
  setUser: (userID: number) => {
    set(() => ({ selectedUser: userID }));
  },
}));
