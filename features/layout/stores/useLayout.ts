import { create } from "zustand";
import { LayoutStore } from "../types/stores";

export const useLayout = create<LayoutStore>((set) => ({
  showEditorContent: false,
  drawerOpen: false,
  setShowEditorContent: (value: boolean) => set({ showEditorContent: value }),
  setDrawerOpen: (value: boolean) => set({ drawerOpen: value }),
}))