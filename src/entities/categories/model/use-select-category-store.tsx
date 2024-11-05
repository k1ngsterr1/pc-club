import { create } from "zustand";

interface ICategoryPopup {
  selected: string;
  setSelected: (category: string) => void;
  isVisible: boolean;
  showPopup: () => void;
  hidePopup: () => void;
}

export const useSelectCategoryStore = create<ICategoryPopup>((set) => ({
  isVisible: false,
  selected: "STANDARD",
  setSelected: (category) => set({ selected: category }),
  showPopup: () => set({ isVisible: true }),
  hidePopup: () => set({ isVisible: false }),
}));
