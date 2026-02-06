"use client";

import { useActionState, ChangeEvent, useEffect, useRef } from "react";
import { sendMessageAndSaveToDB } from "../actions/contact.action";
import useContactFormStore from "../stores/useContactFormStore";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";
import { ContactFormFields, FormState } from "../types";
import { toast } from "sonner";
import { FormField } from "./FormField";

export default function ContactForm() {

    const { setPropertyValue, resetForm, name, email, message } = useContactFormStore()
    const [state, formAction, isPending] = useActionState(handleSubmit, { error: false, payload: null, message: "" })
    const wasPendingRef = useRef(false)

    useEffect(() => {
        if (wasPendingRef.current && !isPending && state.message) {
            if (state.error) {
                toast.error(state.message)
            } else {
                toast.success(state.message)
            }
        }
        wasPendingRef.current = isPending
    }, [isPending, state.message, state.error])

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPropertyValue(e.target.name as ContactFormFields, e.target.value)
    }

    async function handleSubmit(state: FormState, data: FormData) {
        const result = await sendMessageAndSaveToDB(data);
        resetForm();
        return { ...state, ...result };
    }

    const isDisabled = isPending || !name || !email || !message

    const inputVariants = {
        hide: { scaleX: 0 },
        show: { scaleX: 1, transformOrigin: "left" },
    }

    const labelVariants = {
        hide: { opacity: 0, y: -50 },
        show: { opacity: 1, y: 0 },
    }

    const formControlVariants = {
        show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
    }

    return (
        <motion.form className="xl:max-w-xs w-full flex flex-col gap-4" action={formAction} initial="hide" animate="show" exit="exit" variants={formControlVariants}>
            <FormField
                id="name"
                name="name"
                label="_nombre:"
                type="text"
                placeholder="John Doe"
                required
                onChange={handleChange}
                inputVariants={inputVariants}
                labelVariants={labelVariants}
            />
            <FormField
                id="email"
                name="email"
                label="_email:"
                type="email"
                placeholder="johndoe@gmail.com"
                required
                onChange={handleChange}
                inputVariants={inputVariants}
                labelVariants={labelVariants}
            />
            <FormField
                id="message"
                name="message"
                label="_mensaje:"
                type="textarea"
                placeholder="Tu mensaje..."
                required
                onChange={handleChange}
                inputVariants={inputVariants}
                labelVariants={labelVariants}
            />
            <motion.button variants={inputVariants} className={cn("!bg-muted-foreground/30 !py-2.5 !px-3 !rounded-lg !w-fit !cursor-pointer", isDisabled && "!text-muted-foreground !cursor-not-allowed")} disabled={isDisabled}>{isPending ? "enviando..." : "enviar-mensaje"}</motion.button>
        </motion.form>
    )
}
