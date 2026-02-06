import { createClient } from "@/supabase/server";
import { ContactMessage, ContactRecord } from "../types/data";

/**
 * Capa Data (Repository) para mensajes de contacto.
 */
export const contactData = {
  /**
   * Guarda un mensaje de contacto en la base de datos.
   * @throws Error si el insert falla
   */
  async save(message: ContactMessage): Promise<ContactRecord | null> {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("portfolio_contacto")
      .insert(message)
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};
