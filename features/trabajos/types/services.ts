import { Project } from "./components";

/**
 * Resultado de la búsqueda de proyecto por slug.
 */
export type FetchBySlugResult = {
    project: Project | null;
    reason?: string;
};
