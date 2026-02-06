import { createClient } from "@/supabase/server";
import { Project } from "../types/components";

/**
 * Capa Data (Repository) para operaciones de un solo proyecto.
 */
export const projectData = {
  /**
   * Obtiene un proyecto por su slug.
   * @throws Error si la query falla
   */
  async getBySlug(slug: string): Promise<Project | null> {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("portfolio_projects")
      .select("*")
      .eq("slug", slug);

    if (error) throw error;

    // Retorna null si no hay datos o hay múltiples resultados
    if (!data || data.length !== 1) {
      return null;
    }

    return data[0];
  },
};
