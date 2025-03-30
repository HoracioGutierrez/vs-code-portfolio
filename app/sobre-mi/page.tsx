import * as motion from "motion/react-client"

function SobreMiPage() {
    return (
        <motion.div initial="hide" animate="show" exit="exit" className="flex grow">
            <motion.div initial="hide" animate="show" className="grow">
                sobre mi
            </motion.div>
        </motion.div>
    )
}
export default SobreMiPage