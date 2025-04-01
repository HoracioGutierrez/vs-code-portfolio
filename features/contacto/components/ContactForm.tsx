"use client";

import { useActionState } from "react";
import { sendMessageAndSaveToDB } from "../actions/sendMessageAndSaveToDB";
import useContactFormStore from "../stores/useContactFormStore";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";

export default function ContactForm() {

    const { setPropertyValue, resetForm, name, email, message } = useContactFormStore()
    const [state, formAction, isPending] = useActionState(handleSubmit, { error: false, payload: null, message: "" })

    const handleChange = (e: any) => {
        setPropertyValue(e.target.name, e.target.value)
    }

    async function handleSubmit(state: any, data: FormData) {
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
            <motion.div variants={inputVariants}>
                <motion.label variants={labelVariants} htmlFor="name" className="block mb-2 text-sm font-medium text-muted-foreground">_nombre:</motion.label>
                <motion.input type="text" id="name" name="name" className="block w-full rounded-md border-0 px-3 py-1.5 text-white shadow-sm ring-1 ring-inset ring-muted-foreground/20 placeholder:text-gray-400 focus:ring-0 focus-visible:ring-0 focus:border-0 focus-visible:border-0 sm:text-sm sm:leading-6 bg-background/50" placeholder="John Doe" onChange={handleChange} />
            </motion.div>
            <motion.div variants={inputVariants}>
                <motion.label variants={labelVariants} htmlFor="email" className="block mb-2 text-sm font-medium text-muted-foreground">_email:</motion.label>
                <motion.input type="email" id="email" name="email" className="block w-full rounded-md border-0 px-3 py-1.5 text-white shadow-sm ring-1 ring-inset ring-muted-foreground/20 placeholder:text-gray-400 focus:ring-0 focus-visible:ring-0 focus:border-0 focus-visible:border-0 sm:text-sm sm:leading-6 bg-background/50" placeholder="johndoe@gmail.com" onChange={handleChange} />
            </motion.div>
            <motion.div variants={inputVariants}>
                <motion.label variants={labelVariants} htmlFor="message" className="block mb-2 text-sm font-medium text-muted-foreground">_mensaje:</motion.label>
                <motion.textarea id="message" name="message" className="block w-full rounded-md border-0 px-3 py-1.5 text-white shadow-sm ring-1 ring-inset ring-muted-foreground/20 placeholder:text-gray-400 focus:ring-0 focus-visible:ring-0 focus:border-0 focus-visible:border-0 sm:text-sm sm:leading-6 resize-none min-h-[140px] bg-background/50" placeholder="johndoe@gmail.com" onChange={handleChange} />
            </motion.div>
            <motion.button variants={inputVariants} className={cn("!bg-muted-foreground/30 !py-2.5 !px-3 !rounded-lg !w-fit !cursor-pointer", isDisabled && "!text-muted-foreground !cursor-not-allowed")} disabled={isDisabled}>{isPending ? "enviando..." : "enviar-mensaje"}</motion.button>
        </motion.form>
    )
}