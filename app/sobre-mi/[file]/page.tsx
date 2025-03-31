import MainEditorPageTitle from "@/components/layout/main-editor-page-title"
import * as motion from "motion/react-client"

export default function Page() {
    return (
        <motion.div initial="hide" animate="show" exit="exit" className="flex grow p-3">
            <MainEditorPageTitle title="Sobre mi"/>
        </motion.div>
    );
}