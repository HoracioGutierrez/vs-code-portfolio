import * as motion from "motion/react-client"

function MainEditorPageTitle({ title, shouldDelay = false }: { title: string, shouldDelay?: boolean }) {
    return (
        <motion.h2 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0, transition: { delay: shouldDelay ? 0.6 : 0.2 } }} className="mb-8">
            {title}
        </motion.h2>
    )
}
export default MainEditorPageTitle