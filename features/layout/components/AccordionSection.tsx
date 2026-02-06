"use client";

import * as motion from "motion/react-client";
import { AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/components/accordion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Folder } from "lucide-react";
import type { AccordionLink, AccordionSectionProps } from "../types/editor";

const folderColorClasses = {
    "accent-1": "fill-accent-1",
    "accent-2": "fill-accent-2",
    "accent-3": "fill-accent-3",
};

export function AccordionSection({
    value,
    title,
    folderColor,
    links,
    itemVariants,
    isLast = false,
}: AccordionSectionProps) {
    const pathname = usePathname();

    const isActive = (link: AccordionLink) => {
        if (link.excludeMatch) {
            return pathname.includes(link.matchPath) && !pathname.includes(link.excludeMatch);
        }
        return pathname.includes(link.matchPath);
    };

    return (
        <AccordionItem
            value={value}
            className={`w-full ${isLast ? "!border-b" : ""} border-border-editor`}
            asChild
        >
            <motion.div variants={itemVariants}>
                <AccordionTrigger className="!w-full !flex !gap-2 !p-3 !cursor-pointer !box-border !text-muted-foreground">
                    <span>
                        <Folder className={`${folderColorClasses[folderColor]} stroke-0`} />
                    </span>
                    {title}
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`p-3 w-full block hover:bg-accent-1 ${
                                isActive(link)
                                    ? "text-primary bg-border-editor"
                                    : "text-muted-foreground"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </AccordionContent>
            </motion.div>
        </AccordionItem>
    );
}
