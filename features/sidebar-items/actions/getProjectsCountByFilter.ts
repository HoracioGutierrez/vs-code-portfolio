"use server"

import { createClient } from "@/supabase/server"

export const getProjectsCountByFilter = async (filters: string[]) => {
    try {
        const supabase = await createClient();
        if (!filters.length || filters.includes("all")) {
            const result = await supabase.from("projects").select("*", { count: "exact", head: true });
            console.log("🚀 ~ getProjectsCountByFilter ~ result:", result)
            return {
                error: false,
                message: "Proyectos obtenidos correctamente",
                payload: result.count || 0
            };
        }
        const filterString = filters.map((f) => `tags.cs.{${f}}`).join(",");
        const result = await supabase.from("projects").select("*", { count: "exact", head: true }).or(filterString);
        console.log("🚀 ~ getProjectsCountByFilter ~ result:", result)

        return {
            error: false,
            message: "Proyectos obtenidos correctamente",
            payload: result.count || 0
        };
    } catch (error) {
        console.log("🚀 ~ getProjectsByFilter ~ error:", error)

        return {
            error: true,
            message: "Error al obtener proyectos",
            payload: 0
        }
    }
}