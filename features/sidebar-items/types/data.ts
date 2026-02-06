import { Project } from "@/features/trabajos/types/components";

// Re-export del tipo Project para uso en esta feature
export type { Project };

// Parámetros para queries del repositorio
export type ProjectFilterParams = {
  tags?: string[];
  includeAll?: boolean;
};
