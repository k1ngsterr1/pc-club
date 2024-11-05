import { create } from "zustand";

interface IChooseHouesStore {
  hours: number;

  setHours: (hours: number) => void;
}

export const useChooseHoursStore = create<IChooseHouesStore>((set) => ({
  hours: 18,

  setHours: (hours) => {
    set({ hours });
  },
}));
