import { create } from "zustand";

export const useLayout = create((set) => ({
  showEditorContent: false,
  setShowEditorContent: (value: boolean) => set({ showEditorContent: value }),
}))