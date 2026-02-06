import { ActionResponse, LegacyActionResponse } from "../types/actions";

/**
 * Crea una respuesta exitosa de action.
 */
export function success<T>(payload: T, message: string = ""): ActionResponse<T> {
  return {
    hasError: false,
    message,
    payload,
  };
}

/**
 * Crea una respuesta de error de action.
 */
export function failure<T>(message: string, payload: T): ActionResponse<T> {
  return {
    hasError: true,
    message,
    payload,
  };
}

/**
 * Convierte ActionResponse al formato legacy para compatibilidad.
 * @deprecated Remover una vez que todos los consumers estén migrados
 */
export function toLegacy<T>(response: ActionResponse<T>): LegacyActionResponse<T> {
  return {
    error: response.hasError,
    message: response.message,
    payload: response.payload,
  };
}
