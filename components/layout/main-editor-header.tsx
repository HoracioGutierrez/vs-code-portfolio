"use client"
import * as motion from "motion/react-client"
import Link from "next/link"
import DrawerButton from "./main-editor-drawer-button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"


function MainEditorHeader() {

    const pathname = usePathname()

    const childVariants = {
        hide: { opacity: 0, height: "0px" },
        show: { opacity: 1, height: "60px", transition: { type: "spring", bounce: 0.85, stiffness: 400, damping: 14, delay: 0.2, staggerChildren: 0.1, delayChildren: 0.4 } },
    }

    const linkVariants = {
        hide: { opacity: 0, y: -50 },
        show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.85, stiffness: 400, damping: 16 } },
    }

    return (
        <motion.div
            initial="hide"
            animate="show"
            exit="exit"
            variants={childVariants}
            className="border-b h-[60px] flex overflow-hidden items-stretch border-muted-foreground/50"
        >
            <motion.h1 className="text-muted-foreground border-r border-muted-foreground/50 flex w-[300px]" variants={linkVariants}>
                <Link href="/" className="px-4 w-full flex items-center">
                    horacio-gutierrez
                </Link>
            </motion.h1>
            <motion.div variants={linkVariants} className={cn("hidden border-r transition-colors duration-300 border-muted-foreground/50 md:flex hover:bg-accent group",
                pathname === "/trabajos" && "bg-accent"
            )}>
                <Link
                    href="/trabajos"
                    className={cn("text-sm text-muted-foreground lg:text-base group-hover:text-primary px-4 flex items-center", pathname === "/trabajos" && "text-primary")}
                >
                    _trabajos
                </Link>
            </motion.div>
            <motion.div variants={linkVariants} className={cn("hidden border-r transition-colors duration-300 border-muted-foreground/50 md:flex hover:bg-accent group",
                pathname === "/sobre-mi" && "bg-accent"
            )}>
                <Link
                    href="/sobre-mi"
                    className={cn("text-sm text-muted-foreground lg:text-base group-hover:text-primary px-4 flex items-center", pathname === "/sobre-mi" && "text-primary")}
                >
                    _sobre-mi
                </Link>
            </motion.div>
            <motion.div variants={linkVariants} className={cn("hidden border-r transition-colors duration-300 border-muted-foreground/50 md:flex hover:bg-accent group",
                pathname === "/contacto" && "bg-accent"
            )}>
                <Link
                    href="/contacto"
                    className={cn("text-sm text-muted-foreground lg:text-base group-hover:text-primary px-4 flex items-center", pathname === "/contacto" && "text-primary")}
                >
                    _contacto
                </Link>
            </motion.div>
            <DrawerButton />
        </motion.div>
    )
}
export default MainEditorHeader