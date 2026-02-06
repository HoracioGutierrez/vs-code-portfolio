import { InstagramIcon, LucideGithub, TwitterIcon } from "lucide-react"
import * as motion from "motion/react-client"
import Link from "next/link"
import { SOCIAL_LINKS } from "@/features/shared/constants/social-links"

function MainEditorFooter() {

    const childVariants = {
        hide: { opacity: 0, height: "0px" },
        show: { opacity: 1, height: "60px", transition: { type: "spring", bounce: 0.85, stiffness: 400, damping: 14, delay: 0.2, staggerChildren: 0.1, delayChildren: 0.4 } },
    }

    const linkVariants = {
        hide: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.85, stiffness: 400, damping: 16 } },
    }

    return (
        <motion.div
            initial="hide"
            animate="show"
            exit="exit"
            variants={childVariants}
            className="border-t h-[60px] flex overflow-hidden items-stretch border-border-editor"
        >
            <motion.p variants={linkVariants} className="w-[300px] border-r border-border-editor flex items-center justify-center text-[#607B96]">
                Encontrame en :
            </motion.p>
            <motion.div variants={linkVariants} className="flex border-r transition-colors border-border-editor hover:bg-accent">
                <Link href={SOCIAL_LINKS.twitter} target="_blank" className="flex items-center px-5 text-[#607B96] hover:text-primary transition-colors">
                    <TwitterIcon className="size-4" />
                </Link>
            </motion.div>
            <motion.div variants={linkVariants} className="flex border-r transition-colors border-border-editor hover:bg-accent">
                <Link href={SOCIAL_LINKS.instagram} target="_blank" className="flex items-center px-5 text-[#607B96] hover:text-primary transition-colors">
                    <InstagramIcon className="size-4" />
                </Link>
            </motion.div>
            <motion.div variants={linkVariants} className="flex justify-center ml-auto border-l border-border-editor hover:bg-accent">
                <Link
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    className="flex gap-2 items-center px-5 text-[#607B96] hover:text-primary transition-colors"
                >
                    <span className="hidden lg:inline">{SOCIAL_LINKS.githubUsername}</span>
                    <LucideGithub className="size-4" />
                </Link>
            </motion.div>
        </motion.div>
    )
}
export default MainEditorFooter