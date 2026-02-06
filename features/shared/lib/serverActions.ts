import { success, failure, toLegacy } from "./action-response";
import { LegacyActionResponse } from "../types/actions";

/**
 * Wrapper para server actions que maneja try-catch y logging.
 * Reduce el boilerplate de manejo de errores en actions.
 */
export async function wrapServerAction<T>(
    fn: () => Promise<T>,
    options: {
        successMessage?: string;
        errorMessage: string;
        errorPayload: T;
        actionName: string;
    }
): Promise<LegacyActionResponse<T>> {
    const { successMessage = "", errorMessage, errorPayload, actionName } = options;

    try {
        const result = await fn();
        return toLegacy(success<T>(result, successMessage));
    } catch (error) {
        console.error(`${actionName} error:`, error);
        return toLegacy(failure<T>(errorMessage, errorPayload));
    }
}
