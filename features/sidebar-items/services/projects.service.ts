import { projectsData } from "../data/projects.data";
import { Project } from "../types/data";

/**
 * Capa Service para proyectos.
 * Lógica de negocio, orquestación, validación.
 * Llama a la capa data, puede combinar múltiples llamadas.
 */
export const projectsService = {
  /**
   * Obtiene proyectos por filtros de tags.
   * Maneja la lógica del filtro "all".
   */
  async fetchByFilter(filters: string[]): Promise<Project[]> {
    const includeAll = filters.includes("all");
    return projectsData.getByFilter({
      tags: filters,
      includeAll,
    });
  },

  /**
   * Cuenta proyectos que coinciden con el filtro.
   */
  async countByFilter(filters: string[]): Promise<number> {
    const includeAll = filters.includes("all");
    return projectsData.countByFilter({
      tags: filters,
      includeAll,
    });
  },
};
