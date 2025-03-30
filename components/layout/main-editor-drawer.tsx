import * as motion from "motion/react-client"

function MainEditorDrawer() {

    const containerVariants = {
        show: { transition: { staggerChildren: 0.15 } },
        exit: { transition: { staggerChildren: 0.15 } },
    }

    const childVariants = {
        hide: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
    }

    return (
        <motion.div initial="hide" animate="show" exit="exit" variants={containerVariants}>
            <motion.div variants={childVariants} className="border-b border-muted-foreground/50 flex justify-center py-5">
                test
            </motion.div>
            <motion.div variants={childVariants} className="border-b border-muted-foreground/50 flex justify-center py-5">
                test
            </motion.div>
            <motion.div variants={childVariants} className="border-b border-muted-foreground/50 flex justify-center py-5">
                test
            </motion.div>
        </motion.div>
    )
}
export default MainEditorDrawer