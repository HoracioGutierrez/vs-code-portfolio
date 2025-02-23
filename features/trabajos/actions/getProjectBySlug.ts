import { createClient } from "@/supabase/server";

export const getProjectBySlug = async (slug: string) => {
    try {
        const supabase = await createClient();
        if (!slug) {
            return {
                error: false,
                message: "No se ha proporcionado un slug",
                payload: {},
            };
        }
        const result = await supabase.from("projects").select("*").eq("slug", slug);

        if (!result.data) {
            return {
                error: false,
                message: "No se ha encontrado el proyecto",
                payload: {},
            };
        }

        if (result.data.length > 1) {
            return {
                error: false,
                message: "Se ha encontrado más de un proyecto con el slug",
                payload: {},
            };
        }

        return {
            error: false,
            message: "Proyectos obtenidos correctamente",
            payload: result.data[0] || {},
        };
    } catch (error) {
        return {
            error: true,
            message: "Error al obtener proyectos",
            payload: {},
        };
    }
};