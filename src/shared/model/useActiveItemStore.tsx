import { create } from "zustand";

interface IActiveItem {
  active: number | string;
  setActive: (index: number | string) => void;
}

export const useActiveItem = create<IActiveItem>((set) => ({
  active: 0,
  setActive: (index) => set(() => ({ active: index })),
}));
