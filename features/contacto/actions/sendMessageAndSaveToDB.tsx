"use server"

import { createClient } from "@/supabase/server"

export const sendMessageAndSaveToDB = async (data: FormData) => {
    try {

        const name = data.get("name")
        const email = data.get("email")
        const message = data.get("message")

        if (!name || !email || !message) {
            throw new Error("Missing data")
        }

        const supabase = await createClient()
        const result = await supabase.from("contacto").insert({ name, email, message })

        return {
            error: false,
            message: "Mensaje enviado correctamente",
            payload: result.data
        }

    } catch (error) {
        return {
            error: true,
            message: "Error al enviar el mensaje",
            payload: null
        }
    }

}