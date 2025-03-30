"use client"
import * as motion from "motion/react-client"

function MainEditorMainSidebar() {

    const sidebarVariants = {
        hide: { opacity: 0, width: "0px" },
        show: { opacity: 1, width: "200px", transition: { delay: 0.15 } },
        exit: { opacity: 0, width: "0px" },
    }   

    return (
        <motion.div initial="hide" exit="exit" animate="show" className="border-r border-muted-foreground/50 flex items-stretch overflow-hidden" variants={sidebarVariants}>
            main sidebar
        </motion.div>
    )
}

export default MainEditorMainSidebar