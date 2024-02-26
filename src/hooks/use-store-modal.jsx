import { create } from "zustand";

export const useSidebar = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export const useCategory = create((set) => ({
  category: "New",
  setCategory: (data = {}) => set({ category: data }),
}));
