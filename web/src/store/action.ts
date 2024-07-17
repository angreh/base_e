import { create } from "zustand";

import { Action } from "@/types/shared_types";

interface ActionState {
  list: Action[];

  setList: (list: Action[]) => void;
}

export const useActionStore = create<ActionState>((set) => ({
  list: [],

  setList: (list: Action[]) => {
    set(() => ({ list }));
  },
}));
