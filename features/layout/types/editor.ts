import type { Variants } from "motion/react";

export type MainEditorProps = {
    children: React.ReactNode;
};

export interface AccordionLink {
    href: string;
    label: string;
    matchPath: string;
    excludeMatch?: string;
}

export interface AccordionSectionProps {
    value: string;
    title: string;
    folderColor: "accent-1" | "accent-2" | "accent-3";
    links: AccordionLink[];
    itemVariants: Variants;
    isLast?: boolean;
}

export interface UseSidebarVariantsOptions {
    staggerChildren?: number;
    delayChildren?: number;
}

export interface UseSidebarVariantsReturn {
    sidebarVariants: Variants;
    sidebarItemVariants: Variants;
    itemVariants: Variants;
    isBigEnough: boolean;
}