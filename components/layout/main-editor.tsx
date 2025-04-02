"use client"

import { useAnimate, motion, AnimatePresence } from "motion/react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import MainEditorHeader from "./main-editor-header"
import MainEditorFooter from "./main-editor-footer"
import MainEditorDrawer from "./main-editor-drawer"
import { useLayout } from "@/features/laytout/stores/useLayout"
import MainEditorAboutSidebar from "./main-editor-about-sidebar"
import MainEditorWorksSidebar from "./main-editor-works-sidebar"

type MainEditorProps = {
    children: React.ReactNode
}

function MainEditor({ children }: MainEditorProps) {

    const [scope, animate] = useAnimate()
    const [finished, setFinished] = useState(false)
    const pathname = usePathname()
    const { drawerOpen } = useLayout()

    useEffect(() => {
        initialAnimation()
    }, [])

    const initialAnimation = async () => {

        animate(scope.current,
            { opacity: 1 },
            { delay: 0.15, duration: 0.3, type: "spring" }
        )

        await animate(scope.current,
            { rotate: 0, borderRadius: "50%" },
            { delay: 0.15, duration: 2, ease: "backIn" }
        )

        await animate(scope.current,
            { flexGrow: 1, heigth: "100%", borderRadius: "10px", aspectRatio: "initial" },
            { delay: 0.15, type: "spring", bounce: 0.85, stiffness: 300, damping: 20 }
        )

        animate(scope.current,
            { width: "100%", borderRadius: "10px" },
            { type: "spring", bounce: 0.85, stiffness: 500, damping: 20 }
        )

        setFinished(true)
    }

    return (
        <div className="flex overflow-hidden flex-col justify-center items-center w-full h-full grow">
            <motion.div
                ref={scope}
                initial={{ width: "5%", height: "5%", borderRadius: 0, rotate: 720, opacity: 0 }}
                className="flex flex-col w-full border border-muted-foreground/50 bg-primary text-foreground aspect-square"
            >
                <AnimatePresence>
                    {finished && (
                        <MainEditorHeader />
                    )}
                </AnimatePresence>

                <div className="flex overflow-hidden relative flex-col grow md:flex-row">
                    <AnimatePresence mode="wait">
                        {(pathname.includes("/sobre-mi")) && finished && (
                            <motion.div initial="hide" animate="show" exit="exit" className="flex" key={"sobre-mi"}>
                                <MainEditorAboutSidebar />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        {(pathname === "/trabajos") && finished && (
                            <motion.div initial="hide" animate="show" exit="exit" className="flex" key={pathname}>
                                <MainEditorWorksSidebar />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        {finished && (
                            <motion.div initial="hide" animate="show" exit="exit" className="flex flex-col grow">
                                {children}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        {drawerOpen && finished && (
                            <motion.div initial="hide" animate="show" exit="exit" variants={{ show: { opacity: 1 }, hide: { opacity: 0 }, exit: { opacity: 0 } }} className="flex absolute flex-col w-full h-full backdrop-blur-md grow">
                                <MainEditorDrawer />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <AnimatePresence>
                    {finished && (
                        <MainEditorFooter />
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}
export default MainEditor