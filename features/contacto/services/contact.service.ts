import { contactData } from "../data/contact.data";
import { ContactMessage, ContactRecord } from "../types/data";

/**
 * Capa Service para operaciones de contacto.
 */
export const contactService = {
  /**
   * Valida y guarda un mensaje de contacto.
   * @throws Error si los campos requeridos faltan
   */
  async submitMessage(formData: FormData): Promise<ContactRecord | null> {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      throw new Error("Campos requeridos faltantes");
    }

    const contactMessage: ContactMessage = {
      name: name.toString(),
      email: email.toString(),
      message: message.toString(),
    };

    return contactData.save(contactMessage);
  },
};
