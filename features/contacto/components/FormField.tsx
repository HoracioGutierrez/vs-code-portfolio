"use client";

import * as motion from "motion/react-client";
import { ChangeEvent } from "react";
import type { Variants } from "motion/react";

interface FormFieldProps {
    id: string;
    name: string;
    label: string;
    type?: "text" | "email" | "textarea";
    placeholder?: string;
    required?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    inputVariants: Variants;
    labelVariants: Variants;
}

const baseInputClasses = "block w-full rounded-md border-0 px-3 py-1.5 text-white shadow-sm ring-1 ring-inset ring-muted-foreground/20 placeholder:text-gray-400 focus:ring-0 focus-visible:ring-0 focus:border-0 focus-visible:border-0 sm:text-sm sm:leading-6 bg-background/50";

export function FormField({
    id,
    name,
    label,
    type = "text",
    placeholder,
    required = false,
    onChange,
    inputVariants,
    labelVariants,
}: FormFieldProps) {
    return (
        <motion.div variants={inputVariants}>
            <motion.label
                variants={labelVariants}
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-muted-foreground"
            >
                {label}
            </motion.label>
            {type === "textarea" ? (
                <motion.textarea
                    id={id}
                    name={name}
                    className={`${baseInputClasses} resize-none min-h-35`}
                    placeholder={placeholder}
                    onChange={onChange}
                    required={required}
                    aria-required={required}
                />
            ) : (
                <motion.input
                    type={type}
                    id={id}
                    name={name}
                    className={baseInputClasses}
                    placeholder={placeholder}
                    onChange={onChange}
                    required={required}
                    aria-required={required}
                />
            )}
        </motion.div>
    );
}
