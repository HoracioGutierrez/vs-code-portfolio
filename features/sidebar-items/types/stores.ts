import { Project } from "@/features/trabajos/types/components";

export type ProjectsStore = {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
};
