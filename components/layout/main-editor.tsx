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
        animate(scope.current, { opacity: 1 }, { delay: 0.15, duration: 0.3, type: "spring" })
        await animate(scope.current, { rotate: 0, borderRadius: "50%" }, { delay: 0.15, duration: 0.4 })
        await animate(scope.current, { flexGrow: 1, heigth: "100%", borderRadius: "10px", aspectRatio: "initial" }, { delay: 0.15, type: "spring", bounce: 0.85, stiffness: 300, damping: 20 })
        animate(scope.current, { width: "100%", borderRadius: "10px" }, { type: "spring", bounce: 0.85, stiffness: 500, damping: 20 })
        setFinished(true)
    }

    return (
        <div className="w-full grow flex justify-center items-center h-full flex-col">
            <motion.div
                ref={scope}
                initial={{ width: "1%", height: "1%", borderRadius: 0, rotate: 360, opacity: 0 }}
                className="w-full border-muted-foreground/50 bg-primary text-foreground border aspect-square flex flex-col"
            >
                <AnimatePresence>
                    {finished && (
                        <MainEditorHeader />
                    )}
                </AnimatePresence>

                <div className="flex grow relative overflow-hidden flex-col md:flex-row">
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

                    <AnimatePresence>
                        {finished && (
                            <motion.div initial="hide" animate="show" exit="exit" className="grow flex flex-col">
                                {children}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        {drawerOpen && finished && (
                            <motion.div initial="hide" animate="show" exit="exit" variants={{ show: { opacity: 1 }, hide: { opacity: 0 }, exit: { opacity: 0 } }} className="grow flex flex-col absolute w-full h-full backdrop-blur-md">
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