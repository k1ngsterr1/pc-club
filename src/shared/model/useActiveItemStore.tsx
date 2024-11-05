import { create } from "zustand";

interface IActiveItem {
  active: number | string;
  setActive: (index: number | string) => void;
}

export const useActiveItem = create<IActiveItem>((set) => ({
  active: 1,
  setActive: (index) => set(() => ({ active: index })),
}));
