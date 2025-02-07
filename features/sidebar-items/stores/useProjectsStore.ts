import { create } from "zustand";

type ProjectsStore = {
    projects: any[];
    setProjects: (projects: any[]) => void;
};

const useProjectsStore = create<ProjectsStore>()((set) => ({
    projects: [],
    setProjects: (projects: any[]) => set({ projects }),
}));

export default useProjectsStore;