import { PostgrestError } from "@supabase/supabase-js";

/**
 * Lanza un error si hay un error de Supabase.
 * @throws PostgrestError si error no es null
 */
export function throwIfError(error: PostgrestError | null): void {
    if (error) throw error;
}

/**
 * Construye un string de filtro para búsqueda por tags en Supabase.
 * Formato: "tags.cs.{tag1},tags.cs.{tag2}"
 */
export function buildTagFilterString(tags: string[]): string {
    return tags.map((tag) => `tags.cs.{${tag}}`).join(",");
}
