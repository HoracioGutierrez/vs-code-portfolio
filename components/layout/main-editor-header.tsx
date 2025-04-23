"use client"
import * as motion from "motion/react-client"
import Link from "next/link"
import DrawerButton from "./main-editor-drawer-button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { AnimatePresence } from "motion/react"


function MainEditorHeader() {
    const [showAlternativeText, setShowAlternativeText] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const interval = setInterval(() => {
            setShowAlternativeText(prev => !prev)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const childVariants = {
        hide: { opacity: 0, height: "0px" },
        show: { opacity: 1, height: "60px", transition: { type: "spring", bounce: 0.85, stiffness: 400, damping: 14, delay: 0.2, staggerChildren: 0.1, delayChildren: 0.4 } },
    }

    const linkVariants = {
        hide: { opacity: 0, y: -50 },
        show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.85, stiffness: 400, damping: 16 } },
        exit: { opacity: 0, y: -50, scaleX: 0 },
    }

    const textVariants = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
    }

    return (
        <motion.div
            initial="hide"
            animate="show"
            exit="exit"
            variants={childVariants}
            className="border-b h-[60px] flex overflow-hidden items-stretch border-[#1E2D3D]"
        >
            <motion.h1 className="text-[#607B96] border-r border-[#1E2D3D] flex w-[300px] hover:text-foreground transition-colors" variants={linkVariants}>
                <Link href="/" className="px-4 w-full flex items-center">
                    horacio-gutierrez
                </Link>
            </motion.h1>
            <motion.div variants={linkVariants} className={cn("hidden border-r transition-colors duration-300 border-[#1E2D3D] md:flex hover:bg-accent group",
                pathname === "/trabajos" && "bg-accent"
            )}>
                <Link
                    href="/trabajos"
                    className={cn("text-sm text-[#607B96] lg:text-base group-hover:text-primary px-4 flex items-center", pathname === "/trabajos" && "text-primary")}
                >
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        key={showAlternativeText ? "alt1" : "orig1"}
                        variants={textVariants}
                        transition={{ duration: 0.3, delay: 0 }}
                    >
                        {showAlternativeText ? "_trabajemos" : "_trabajos"}
                    </motion.div>
                </Link>
            </motion.div>
            <motion.div variants={linkVariants} className={cn("hidden border-r transition-colors duration-300 border-[#1E2D3D] md:flex hover:bg-accent group",
                pathname === "/sobre-mi" && "bg-accent"
            )}>
                <Link
                    href="/sobre-mi"
                    className={cn("text-sm text-[#607B96] lg:text-base group-hover:text-primary px-4 flex items-center", pathname === "/sobre-mi" && "text-primary")}
                >
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        key={showAlternativeText ? "alt2" : "orig2"}
                        variants={textVariants}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        {showAlternativeText ? "_juntos" : "_sobre-mi"}
                    </motion.div>
                </Link>
            </motion.div>
            <AnimatePresence mode="wait">
                {!showAlternativeText && (
                    <motion.div variants={linkVariants} className={cn("hidden border-r transition-colors duration-300 border-[#1E2D3D] md:flex hover:bg-accent group",
                        pathname === "/contacto" && "bg-accent"
                    )}>
                        <Link
                            href="/contacto"
                            className={cn("text-sm text-[#607B96] lg:text-base group-hover:text-primary px-4 flex items-center", pathname === "/contacto" && "text-primary")}
                        >
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                key={showAlternativeText ? "alt3" : "orig3"}
                                variants={textVariants}
                                transition={{ duration: 0.3, delay: 0.2 }}
                            >
                                {showAlternativeText ? "_coordinamos" : "_contacto"}
                            </motion.div>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
            <DrawerButton />
        </motion.div>
    )
}
export default MainEditorHeader