import { projectData } from "../data/project.data";
import { FetchBySlugResult } from "../types/services";

/**
 * Capa Service para operaciones de un solo proyecto.
 */
export const projectService = {
  /**
   * Obtiene un proyecto por slug con validación.
   */
  async fetchBySlug(slug: string): Promise<FetchBySlugResult> {
    if (!slug) {
      return { project: null, reason: "No se ha proporcionado un slug" };
    }

    const project = await projectData.getBySlug(slug);

    if (!project) {
      return { project: null, reason: "No se ha encontrado el proyecto" };
    }

    return { project };
  },
};
