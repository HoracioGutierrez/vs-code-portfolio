import { create } from "zustand";

type LayoutStore = {
  showEditorContent: boolean;
  drawerOpen: boolean;
  setShowEditorContent: (value: boolean) => void; 
  setDrawerOpen: (value: boolean) => void;
}

export const useLayout = create<LayoutStore>((set) => ({
  showEditorContent: false,
  drawerOpen: false,
  setShowEditorContent: (value: boolean) => set({ showEditorContent: value }),
  setDrawerOpen: (value: boolean) => set({ drawerOpen: value }),
}))