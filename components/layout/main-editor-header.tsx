import DrawerToggleButton from "@/features/laytout/components/DrawerToggleButton"
import * as motion from "motion/react-client"
import Link from "next/link"
import DrawerButton from "./main-editor-drawer-button"


function MainEditorHeader() {

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
            <motion.h1 className="text-muted-foreground border-r border-muted-foreground/50 flex items-center px-4 w-[200px]" variants={linkVariants}>
                <Link href="/">
                    horacio-gutierrez
                </Link>
            </motion.h1>
            <motion.div variants={linkVariants} className="items-center border-r border-muted-foreground/50 px-4 hidden md:flex">
                <Link
                    href="/trabajos"
                    className="text-muted-foreground text-sm lg:text-base"
                >
                    _trabajos
                </Link>
            </motion.div>
            <motion.div variants={linkVariants} className="hidden md:flex items-center border-r border-muted-foreground/50 px-4">
                <Link
                    href="/sobre-mi"
                    className="text-muted-foreground text-sm lg:text-base"
                >
                    _sobre-mi
                </Link>
            </motion.div>
            <motion.div variants={linkVariants} className="hidden md:flex items-center border-r border-muted-foreground/50 px-4">
                <Link
                    href="/contacto"
                    className="text-muted-foreground text-sm lg:text-base"
                >
                    _contacto
                </Link>
            </motion.div>
            <DrawerButton/>
        </motion.div>
    )
}
export default MainEditorHeader