"use client";

import { useActionState } from "react";
import { sendMessageAndSaveToDB } from "../actions/sendMessageAndSaveToDB";
import useContactFormStore from "../stores/useContactFormStore";
import { cn } from "@/lib/utils";

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

    return (
        <form className="xl:max-w-xs w-full flex flex-col gap-4" action={formAction}>
            <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-muted-foreground">_nombre:</label>
                <input type="text" id="name" name="name" className="block w-full rounded-md border-0 px-3 py-1.5 text-white shadow-sm ring-1 ring-inset ring-muted-foreground/20 placeholder:text-gray-400 focus:ring-0 focus-visible:ring-0 focus:border-0 focus-visible:border-0 sm:text-sm sm:leading-6 bg-background/50" placeholder="John Doe" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-muted-foreground">_email:</label>
                <input type="email" id="email" name="email" className="block w-full rounded-md border-0 px-3 py-1.5 text-white shadow-sm ring-1 ring-inset ring-muted-foreground/20 placeholder:text-gray-400 focus:ring-0 focus-visible:ring-0 focus:border-0 focus-visible:border-0 sm:text-sm sm:leading-6 bg-background/50" placeholder="johndoe@gmail.com" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-muted-foreground">_mensaje:</label>
                <textarea id="message" name="message" className="block w-full rounded-md border-0 px-3 py-1.5 text-white shadow-sm ring-1 ring-inset ring-muted-foreground/20 placeholder:text-gray-400 focus:ring-0 focus-visible:ring-0 focus:border-0 focus-visible:border-0 sm:text-sm sm:leading-6 resize-none min-h-[140px] bg-background/50" placeholder="johndoe@gmail.com" onChange={handleChange} />
            </div>
            <button className={cn("!bg-muted-foreground/30 !py-2.5 !px-3 !rounded-lg !w-fit !cursor-pointer", isDisabled && "!text-muted-foreground !cursor-not-allowed")} disabled={isDisabled}>{isPending ? "enviando..." : "enviar-mensaje"}</button>
        </form>
    )
}