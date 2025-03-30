import MainEditorPageTitle from "@/components/layout/main-editor-page-title"
import * as motion from "motion/react-client"

function ContactoPage() {
    return (
        <motion.div initial="hide" animate="show" exit="exit" className="flex grow p-3">
            <MainEditorPageTitle title="Contacto" />
        </motion.div>
    )
}
export default ContactoPage