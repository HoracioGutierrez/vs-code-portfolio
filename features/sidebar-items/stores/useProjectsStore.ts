import { create } from "zustand";
import { ProjectsStore } from "../types/stores";
import { Project } from "@/features/trabajos/types/components";

const useProjectsStore = create<ProjectsStore>()((set) => ({
    projects: [],
    setProjects: (projects: Project[]) => set({ projects }),
}));

export default useProjectsStore;