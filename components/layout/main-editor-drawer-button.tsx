"use client"
import { useLayout } from "@/features/laytout/stores/useLayout"
import { Menu, X } from "lucide-react"
import { useAnimate } from "motion/react"
import * as motion from "motion/react-client"

function DrawerButton() {

    const [menuRef, animateMenu] = useAnimate()
    const [xRef, animateX] = useAnimate()
    const { setDrawerOpen } = useLayout()

    const handleOpen = async () => {
        animateMenu(menuRef.current, { rotate: 45, opacity: 0 })
        animateX(xRef.current, { rotate: 45, opacity: 1, pointerEvents: "all" }, { delay: 0.15 })
        setDrawerOpen(true)
    }

    const handleClose = async () => {
        animateX(xRef.current, { rotate: 0, opacity: 0, pointerEvents: "none" })
        animateMenu(menuRef.current, { rotate: 0, opacity: 1 }, { delay: 0.15 })
        setDrawerOpen(false)
    }

    return (
        <motion.div className="relative md:hidden flex items-center px-5 cursor-pointer border-l border-muted-foreground/50 ml-auto text-muted-foreground">
            <motion.div ref={menuRef} onClick={handleOpen}>
                <Menu />
            </motion.div>
            <motion.div ref={xRef} className="absolute opacity-0 pointer-events-none" onClick={handleClose}>
                <X />
            </motion.div>
        </motion.div>
    )
}
export default DrawerButton