"use server"

import { createClient } from "@/supabase/server"

export const getProjectsByFilter = async (filters: string[]) => {
  try {
    const supabase = await createClient();
    if (!filters.length || filters.includes("all")) {
      const result = await supabase.from("portfolio_projects").select("*");
      return {
        error: false,
        message: "Proyectos obtenidos correctamente",
        payload: result.data || []
      };
    }
    const filterString = filters.map((f) => `tags.cs.{${f}}`).join(",");
    console.log("🚀 ~ getProjectsByFilter ~ filterString:", filterString)
    const result = await supabase.from("portfolio_projects").select("*").or(filterString);

    return {
      error: false,
      message: "Proyectos obtenidos correctamente",
      payload: result.data || []
    };
  } catch (error) {
    console.log("🚀 ~ getProjectsByFilter ~ error:", error)

    return {
      error: true,
      message: "Error al obtener proyectos",
      payload: []
    }
  }
}