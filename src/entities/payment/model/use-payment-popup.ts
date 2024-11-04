import { create } from "zustand";

interface IPaymentPopup {
  isVisible: boolean;
  price: number;
  showPaymentPopup: () => void;
  hidePaymentPopup: () => void;
}

export const usePaymentPopupStore = create<IPaymentPopup>((set) => ({
  isVisible: false,
  price: 0,
  showPaymentPopup: () => set({ isVisible: true }),
  hidePaymentPopup: () => set({ isVisible: false }),
}));
