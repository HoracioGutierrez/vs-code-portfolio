"use server";

import { contactService } from "../services/contact.service";
import { success, failure, toLegacy } from "@/features/shared/lib/action-response";
import { ContactRecord } from "../types/data";

/**
 * Server action para enviar y guardar un mensaje de contacto.
 */
export async function sendMessageAndSaveToDB(data: FormData) {
  try {
    const result = await contactService.submitMessage(data);
    return toLegacy(
      success<ContactRecord | null>(result, "Mensaje enviado correctamente")
    );
  } catch (error) {
    console.error("contactAction.sendMessage error:", error);
    return toLegacy(
      failure<null>("Error al enviar el mensaje", null)
    );
  }
}
