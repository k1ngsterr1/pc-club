import { create } from "zustand";

interface IPlanStore {
  plan: string;
  setPlan: (plan: string) => void;
}

export const usePlanStore = create<IPlanStore>((set) => ({
  plan: "Standart",
  setPlan: (plan: string) => set({ plan: plan }),
}));
