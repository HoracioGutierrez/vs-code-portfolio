"use server";

import { projectsService } from "../services/projects.service";
import { success, failure, toLegacy } from "@/features/shared/lib/action-response";
import { Project } from "../types/data";

/**
 * Server action para obtener proyectos por filtro.
 */
export async function getProjectsByFilter(filters: string[]) {
  try {
    const projects = await projectsService.fetchByFilter(filters);
    return toLegacy(
      success<Project[]>(projects, "Proyectos obtenidos correctamente")
    );
  } catch (error) {
    console.error("projectsAction.getByFilter error:", error);
    return toLegacy(
      failure<Project[]>("Error al obtener proyectos", [])
    );
  }
}

/**
 * Server action para contar proyectos por filtro.
 */
export async function getProjectsCountByFilter(filters: string[]) {
  try {
    const count = await projectsService.countByFilter(filters);
    return toLegacy(
      success<number>(count, "Proyectos obtenidos correctamente")
    );
  } catch (error) {
    console.error("projectsAction.countByFilter error:", error);
    return toLegacy(
      failure<number>("Error al obtener proyectos", 0)
    );
  }
}
