"use server"

import { createClient } from "@/supabase/server"

export const getProjectsCountByFilter = async (filters: string[]) => {
    console.log("🚀 ~ getProjectsCountByFilter ~ filters:", filters)
    try {
        const supabase = await createClient();
        console.log("🚀 ~ getProjectsCountByFilter ~ supabase:", supabase)
        
        if (!filters.length || filters.includes("all")) {
            const result = await supabase.from("portfolio_projects").select("*", { count: "exact", head: true });
            console.log("🚀 ~ getProjectsCountByFilter ~ result:", result)
            return {
                error: false,
                message: "Proyectos obtenidos correctamente",
                payload: result.count || 0
            };
        }
        const filterString = filters.map((f) => `tags.cs.{${f}}`).join(",");
        const result = await supabase.from("portfolio_projects").select("*", { count: "exact", head: true }).or(filterString);

        return {
            error: false,
            message: "Proyectos obtenidos correctamente",
            payload: result.count || 0
        };
    } catch (error) {
        console.log("🚀 ~ getProjectsCountByFilter ~ error:", error)
        return {
            error: true,
            message: "Error al obtener proyectos",
            payload: 0
        }
    }
}