"use client"
import { useLayout } from "@/features/laytout/stores/useLayout"
import * as motion from "motion/react-client"
import Link from "next/link"

function MainEditorDrawer() {

    const { setDrawerOpen } = useLayout()

    const containerVariants = {
        show: { transition: { staggerChildren: 0.15 } },
        exit: { transition: { staggerChildren: 0.15 } },
    }

    const childVariants = {
        hide: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
    }

    const handleClick = () => {
        setDrawerOpen(false)
    }

    return (
        <motion.div initial="hide" animate="show" exit="exit" variants={containerVariants}>
            <motion.div variants={childVariants} className="border-b border-muted-foreground/50 flex justify-center py-5">
                <Link
                    href="/"
                    className="text-muted-foreground text-sm lg:text-base"
                    onClick={handleClick}
                >
                    _inicio
                </Link>
            </motion.div>
            <motion.div variants={childVariants} className="border-b border-muted-foreground/50 flex justify-center py-5">
                <Link
                    href="/trabajos"
                    className="text-muted-foreground text-sm lg:text-base"
                    onClick={handleClick}
                >
                    _trabajos
                </Link>
            </motion.div>
            <motion.div variants={childVariants} className="border-b border-muted-foreground/50 flex justify-center py-5">
                <Link
                    href="/sobre-mi"
                    className="text-muted-foreground text-sm lg:text-base"
                    onClick={handleClick}
                >
                    _sobre-mi
                </Link>
            </motion.div>
            <motion.div variants={childVariants} className="border-b border-muted-foreground/50 flex justify-center py-5">
                <Link
                    href="/contacto"
                    className="text-muted-foreground text-sm lg:text-base"
                    onClick={handleClick}
                >
                    _contacto
                </Link>
            </motion.div>
        </motion.div>
    )
}
export default MainEditorDrawer