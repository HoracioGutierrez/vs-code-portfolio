import * as motion from "motion/react-client"
import Link from "next/link"
import { forwardRef } from "react"


function MainEditorHeader() {

    const childVariants = {
        hide: { opacity: 0, height: "0px" },
        show: { opacity: 1, height: "60px", transition: { type: "spring", bounce: 0.85, stiffness: 400, damping: 14, delay: 0.2, staggerChildren: 0.1, delayChildren : 0.4 } },
    }

    const linkVariants = {
        hide: { opacity: 0, y: -50 },
        show: { opacity: 1, y: 0 , transition: { type: "spring" , bounce: 0.85, stiffness: 400, damping: 16 } },
    }

    const MotionNextLink = forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<typeof Link>>((props, ref) => {
        return (
            <Link {...props} ref={ref} />
        )
    })

    const MotionLink = motion.create(MotionNextLink)

    return (
        <motion.div
            key="main-editor-header"
            initial="hide"
            animate="show"
            variants={childVariants}
            className="border-b h-[60px] flex overflow-hidden items-center px-4 gap-4"
        >
            <MotionLink
                href="/"
                className="text-muted-foreground text-sm lg:text-base"
                variants={linkVariants}
            >
                home
            </MotionLink>
            <MotionLink
                href="/trabajos"
                className="text-muted-foreground text-sm lg:text-base"
                variants={linkVariants}
            >
                trabajos
            </MotionLink>
            <MotionLink
                href="/contacto"
                className="text-muted-foreground text-sm lg:text-base"
                variants={linkVariants}
            >
                contacto
            </MotionLink>
        </motion.div>
    )
}
export default MainEditorHeader