import { useMedia } from "react-use";

export interface SidebarVariants {
    hide: { opacity: number; width?: string; height?: string };
    show: { opacity: number; width?: string; height?: string; transition?: { delay: number } };
    exit: { opacity: number; width?: string; height?: string };
}

export interface SidebarItemVariants {
    animate: { transition: { staggerChildren: number; delayChildren: number } };
}

export interface ItemVariants {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    exit: { opacity: number; y: number };
}

interface UseSidebarVariantsOptions {
    staggerChildren?: number;
    delayChildren?: number;
}

interface UseSidebarVariantsReturn {
    sidebarVariants: SidebarVariants;
    sidebarItemVariants: SidebarItemVariants;
    itemVariants: ItemVariants;
    isBigEnough: boolean;
}

export function useSidebarVariants(options: UseSidebarVariantsOptions = {}): UseSidebarVariantsReturn {
    const { staggerChildren = 0.15, delayChildren = 0.3 } = options;
    const isBigEnough = useMedia("(min-width: 768px)");

    const sidebarVariants: SidebarVariants = isBigEnough
        ? {
            hide: { opacity: 0, width: "0px" },
            show: { opacity: 1, width: "300px", height: "auto", transition: { delay: 0.3 } },
            exit: { opacity: 0, width: "0px" },
        }
        : {
            hide: { opacity: 0, height: "0px" },
            show: { opacity: 1, height: "auto", width: "100%" },
            exit: { opacity: 0, height: "0px" },
        };

    const sidebarItemVariants: SidebarItemVariants = {
        animate: { transition: { staggerChildren, delayChildren } },
    };

    const itemVariants: ItemVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
    };

    return { sidebarVariants, sidebarItemVariants, itemVariants, isBigEnough };
}
