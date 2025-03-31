import MainEditorPageTitle from "@/components/layout/main-editor-page-title"
import * as motion from "motion/react-client"

function SobreMiPage() {
    return (
        <motion.div initial="hide" animate="show" exit="exit" className="flex grow p-8">
            <MainEditorPageTitle title="Sobre mi" shouldDelay/>
        </motion.div>
    )
}
export default SobreMiPage