"use client"

import { useAnimate, motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"

type MainEditorProps = {
    children: React.ReactNode
}

function MainEditor({ children }: MainEditorProps) {

    const [scope, animate] = useAnimate()
    const [finished, setFinished] = useState(false)

    useEffect(() => {
        initialAnimation()
    }, [])

    const initialAnimation = async () => {
        animate(scope.current, { opacity: 1, scale: 1 }, { delay: 0.15, duration: 0.3, type: "spring" })
        await animate(scope.current, { rotate: 0, borderRadius: "50%" }, { delay: 0.15, duration: 0.4 })
        await animate(scope.current, { flexGrow: 1, heigth: "100%", borderRadius: "10px" }, { delay: 0.15, type: "spring", bounce: 0.85, stiffness: 300, damping: 20 })
        animate(scope.current, { width: "100%", borderRadius: "10px" }, { type: "spring", bounce: 0.85, stiffness: 500, damping: 20 })
        setFinished(true)
    }

    return (
        <div className="w-full grow flex justify-center items-center h-full flex-col">
            <motion.div
                ref={scope}
                initial={{ width: "1%", height: "1%", borderRadius: 0, rotate: 360, opacity: 0, scale: 0 }}
                className="w-full  border-muted-foreground/50 bg-primary text-foreground border"
            >
                <AnimatePresence>
                    {finished && (
                        <motion.div initial="hide" animate="show">
                            {children}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}
export default MainEditor