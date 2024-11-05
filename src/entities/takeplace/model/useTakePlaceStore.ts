import { create } from "zustand";

interface ITakePlaceStore {
  take: number[];
  isTake: (index: number) => void;
}

export const useTakePlaceStore = create<ITakePlaceStore>((set) => ({
  take: [],
  isTake: (index) =>
    set((state) => ({
      take: state.take.includes(index)
        ? state.take.filter((i) => i !== index)
        : [...state.take, index],
    })),
}));
