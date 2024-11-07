import { create } from "zustand";

interface ITakePlaceStore {
  take: number[];
  isTake: (index: number) => boolean;
}

export const useTakePlaceStore = create<ITakePlaceStore>((set, get) => ({
  take: [],
  isTake: (index) => {
    const { take } = get();

    if (take.includes(index)) {
      set({
        take: take.filter((i) => i !== index),
      });
      return true;
    }

    if (take.length < 5) {
      set({
        take: [...take, index],
      });
      return true;
    }
    return false;
  },
}));
