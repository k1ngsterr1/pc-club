import { create } from "zustand";

interface INotificationPopup {
  isVisible: boolean;
  showPopup: () => void;
  hidePopup: () => void;
}

export const useNotificationPopupStore = create<INotificationPopup>((set) => ({
  isVisible: false,
  showPopup: () => set({ isVisible: true }),
  hidePopup: () => set({ isVisible: false }),
}));
