"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { startTransition } from "react"
import * as motion from "motion/react-client"

function MainEditorNavigationLinks() {

    const router = useRouter()

    const linkVariants = {
        hide: { opacity: 0, y: -50 },
        show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.85, stiffness: 400, damping: 16 } },
    }

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
        startTransition(() => {
            return router.push(e.currentTarget.getAttribute("data-path") || "/")
        })
    }

    return (
        <>
            <motion.div variants={linkVariants} className="flex items-center border-r border-muted-foreground/50 px-4">
                <Link
                    onClick={handleNavigation}
                    href="/trabajos"
                    data-path="/trabajos"
                    className="text-muted-foreground text-sm lg:text-base"
                >
                    trabajos
                </Link>
            </motion.div>
            <motion.div variants={linkVariants} className="flex items-center border-r border-muted-foreground/50 px-4">
                <Link
                    href="/"
                    data-path="/"
                    className="text-muted-foreground text-sm  lg:text-base"
                >
                    home
                </Link>
            </motion.div>
            <motion.div variants={linkVariants} className="flex items-center border-r border-muted-foreground/50 px-4">
                <Link
                    href="/sobre-mi"
                    data-path="/sobre-mi"
                    className="text-muted-foreground text-sm lg:text-base"
                >
                    sobre-mi
                </Link>
            </motion.div>
            <motion.div variants={linkVariants} className="flex items-center border-r border-muted-foreground/50 px-4">
                <Link
                    href="/contacto"
                    data-path="/contacto"
                    className="text-muted-foreground text-sm lg:text-base"
                >
                    contacto
                </Link>
            </motion.div>
        </>
    )
}

export default MainEditorNavigationLinks