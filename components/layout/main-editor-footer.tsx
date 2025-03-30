import { LucideGithub } from "lucide-react"
import * as motion from "motion/react-client"
import Link from "next/link"

function MainEditorFooter() {

    const childVariants = {
        hide: { opacity: 0, height: "0px" },
        show: { opacity: 1, height: "60px", transition: { type: "spring", bounce: 0.85, stiffness: 400, damping: 14, delay: 0.2, staggerChildren: 0.1, delayChildren: 0.4 } },
    }

    const linkVariants = {
        hide: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.85, stiffness: 400, damping: 16 } },
    }

    return (
        <motion.div
            initial="hide"
            animate="show"
            exit="exit"
            variants={childVariants}
            className="border-t h-[60px] flex overflow-hidden items-stretch border-muted-foreground/50"
        >
            <motion.div variants={linkVariants} className="flex items-center justify-center px-4 ml-auto border-l border-muted-foreground/50">
                <Link
                    href="https://github.com/HoracioGutierrez"
                    target="_blank"
                    className="flex items-center gap-2"
                >
                    <span className="hidden lg:inline">@horaciogutierrez</span>
                    <LucideGithub className="size-4" />
                </Link>
            </motion.div>
        </motion.div>
    )
}
export default MainEditorFooter