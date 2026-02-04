"use client"

import { motion, AnimatePresence } from "motion/react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import MainEditorHeader from "./main-editor-header"
import MainEditorFooter from "./main-editor-footer"
import MainEditorDrawer from "./main-editor-drawer"
import { useLayout } from "@/features/layout/stores/useLayout"
import MainEditorAboutSidebar from "./main-editor-about-sidebar"
import MainEditorWorksSidebar from "./main-editor-works-sidebar"
import { cn } from "@/lib/utils"
import { MainEditorProps } from "../types/editor"

function MainEditor({ children }: MainEditorProps) {

    const pathname = usePathname()
    const { drawerOpen } = useLayout()
    const [borderAnimationComplete, setBorderAnimationComplete] = useState(false)

    return (
        <div className="flex flex-col justify-center items-center w-full h-full grow">
            <div
                id="around"
                className="flex flex-col w-full h-full grow relative"
            >
                {/* SVG Border Animation */}
                <motion.svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-10"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: borderAnimationComplete ? 0 : 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <motion.rect
                        x="0.1"
                        y="0.1"
                        width="99.8"
                        height="99.8"
                        rx="1"
                        ry="1"
                        fill="none"
                        stroke="#1E2D3D"
                        strokeWidth="0.15"
                        pathLength="1"
                        initial={{
                            strokeDasharray: 1,
                            strokeDashoffset: 1
                        }}
                        animate={{
                            strokeDashoffset: 0
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut"
                        }}
                        onAnimationComplete={() => setBorderAnimationComplete(true)}
                    />
                </motion.svg>

                {/* Content Container */}
                <motion.div
                    className="flex flex-col w-full h-full grow border border-transparent bg-primary text-foreground rounded-[10px] overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: borderAnimationComplete ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <MainEditorHeader />

                    <div className="flex overflow-hidden relative flex-col grow md:flex-row max-h-[calc(100dvh_-_160px)] md:max-h-[calc(100dvh_-_200px)] lg:max-h-[calc(100dvh_-_260px)]">
                        <AnimatePresence mode="wait">
                            {pathname.includes("/sobre-mi") && (
                                <motion.div initial="hide" animate="show" exit="exit" className="flex" key={"sobre-mi"}>
                                    <MainEditorAboutSidebar />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            {pathname === "/trabajos" && (
                                <motion.div initial="hide" animate="show" exit="exit" className="flex" key={pathname}>
                                    <MainEditorWorksSidebar />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className={cn("flex overflow-y-auto overflow-x-hidden flex-col grow relative", pathname === "/trabajos" && "mask-linear-from-transparent mask-linear-from-0% mask-linear-to-black mask-linear-to-50%")}>
                            {children}
                        </div>

                        <AnimatePresence mode="wait">
                            {drawerOpen && (
                                <motion.div initial="hide" animate="show" exit="exit" variants={{ show: { opacity: 1 }, hide: { opacity: 0 }, exit: { opacity: 0 } }} className="flex absolute flex-col w-full h-full backdrop-blur-md grow">
                                    <MainEditorDrawer />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <MainEditorFooter />
                </motion.div>
            </div>
        </div>
    )
}
export default MainEditor
