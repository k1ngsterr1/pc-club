import { create } from "zustand";

interface IActiveItem {
  active: number;
  setActive: (index: number) => void;
}

export const useActiveItem = create<IActiveItem>((set) => ({
  active: 1,
  setActive: (index) => set(() => ({ active: index })),
}));
