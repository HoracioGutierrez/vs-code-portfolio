"use server"

import { createClient } from "@/supabase/server"

export const getProjectsByFilter = async (filters: string[]) => {
    try {


        const supabase = await createClient()
        const filterString = filters.map((f) => `tags.cs.{${f}}`).join(",")
        const result = await supabase.from("projects").select("*").or(filterString)
        console.log("🚀 ~ getProjectsByFilter ~ result:", result)

        return {
            error: false,
            message: "Proyectos obtenidos correctamente",
            payload: result
        }

    } catch (error) {
        return {
            error: true,
            message: "Error al obtener proyectos",
            payload: []
        }
    }
}