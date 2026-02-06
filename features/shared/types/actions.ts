/**
 * Tipo unificado de respuesta para todas las server actions.
 * Usa `hasError` en lugar de `error` para mayor claridad.
 */
export type ActionResponse<T> = {
  hasError: boolean;
  message: string;
  payload: T;
};

/**
 * Tipo legacy para compatibilidad con código existente.
 * @deprecated Usar ActionResponse<T> en su lugar
 */
export type LegacyActionResponse<T> = {
  error: boolean;
  message: string;
  payload: T;
};
