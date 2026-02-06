import { useMedia } from "react-use";
import type { Variants } from "motion/react";

interface UseSidebarVariantsOptions {
    staggerChildren?: number;
    delayChildren?: number;
}

interface UseSidebarVariantsReturn {
    sidebarVariants: Variants;
    sidebarItemVariants: Variants;
    itemVariants: Variants;
    isBigEnough: boolean;
}

export function useSidebarVariants(options: UseSidebarVariantsOptions = {}): UseSidebarVariantsReturn {
    const { staggerChildren = 0.15, delayChildren = 0.3 } = options;
    const isBigEnough = useMedia("(min-width: 768px)");

    const sidebarVariants: Variants = isBigEnough
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

    const sidebarItemVariants: Variants = {
        animate: { transition: { staggerChildren, delayChildren } },
    };

    const itemVariants: Variants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
    };

    return { sidebarVariants, sidebarItemVariants, itemVariants, isBigEnough };
}
