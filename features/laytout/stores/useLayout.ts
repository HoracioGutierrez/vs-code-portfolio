import { create } from "zustand";

export const useLayout = create((set) => ({
  showEditorContent: false,
  drawerOpen: false,
  setShowEditorContent: (value: boolean) => set({ showEditorContent: value }),
  setDrawerOpen: (value: boolean) => set({ drawerOpen: value }),
}))