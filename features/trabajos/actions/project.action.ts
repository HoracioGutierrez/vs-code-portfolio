"use server";

import { projectService } from "../services/project.service";
import { success, failure, toLegacy } from "@/features/shared/lib/action-response";
import { Project } from "../types/components";

/**
 * Server action para obtener un proyecto por slug.
 */
export async function getProjectBySlug(slug: string) {
  try {
    const { project, reason } = await projectService.fetchBySlug(slug);

    if (!project) {
      return toLegacy(
        success<Record<string, never>>(
          {},
          reason || "No se ha encontrado el proyecto"
        )
      );
    }

    return toLegacy(
      success<Project>(project, "Proyectos obtenidos correctamente")
    );
  } catch (error) {
    console.error("projectAction.getBySlug error:", error);
    return toLegacy(
      failure<Record<string, never>>("Error al obtener proyectos", {})
    );
  }
}
