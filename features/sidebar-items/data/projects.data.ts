import { createClient } from "@/supabase/server";
import { Project, ProjectFilterParams } from "../types/data";

/**
 * Capa Data (Repository) para proyectos.
 * Acceso directo a Supabase - retorna datos crudos o lanza errores.
 * Sin wrapping de respuesta, sin lógica de negocio.
 */
export const projectsData = {
  /**
   * Obtiene proyectos filtrados por tags.
   * @throws Error si la query falla
   */
  async getByFilter(params: ProjectFilterParams): Promise<Project[]> {
    const supabase = await createClient();
    const { tags = [], includeAll = false } = params;

    if (!tags.length || includeAll) {
      const { data, error } = await supabase
        .from("portfolio_projects")
        .select("*");

      if (error) throw error;
      return data || [];
    }

    const filterString = tags.map((tag) => `tags.cs.{${tag}}`).join(",");
    const { data, error } = await supabase
      .from("portfolio_projects")
      .select("*")
      .or(filterString);

    if (error) throw error;
    return data || [];
  },

  /**
   * Cuenta proyectos que coinciden con el filtro.
   * @throws Error si la query falla
   */
  async countByFilter(params: ProjectFilterParams): Promise<number> {
    const supabase = await createClient();
    const { tags = [], includeAll = false } = params;

    if (!tags.length || includeAll) {
      const { count, error } = await supabase
        .from("portfolio_projects")
        .select("*", { count: "exact", head: true });

      if (error) throw error;
      return count || 0;
    }

    const filterString = tags.map((tag) => `tags.cs.{${tag}}`).join(",");
    const { count, error } = await supabase
      .from("portfolio_projects")
      .select("*", { count: "exact", head: true })
      .or(filterString);

    if (error) throw error;
    return count || 0;
  },
};
