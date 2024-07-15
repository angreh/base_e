import { create } from "zustand";

interface MainState {
  count: number;
}

export const useMainStore = create<MainState>((_) => ({
  count: 10,
}));
