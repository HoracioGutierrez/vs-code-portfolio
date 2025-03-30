"use client"
import * as motion from "motion/react-client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { useMedia } from "react-use"

function MainEditorAboutSidebar() {

    const isBigEnough = useMedia("(min-width: 768px)")

    let sidebarVariants

    if (isBigEnough) {
        sidebarVariants = {
            hide: { opacity: 0, width: "0px" },
            show: { opacity: 1, width: "200px", height: "auto" },
            exit: { opacity: 0, width: "0px" },
        }
    } else {
        sidebarVariants = {
            hide: { opacity: 0, height: "0px" },
            show: { opacity: 1, height: "auto", width: "100%" },
            exit: { opacity: 0, height: "0px" },
        }
    }

    const sidebarItemVariants = {
        animate: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
    }

    const itemVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
    }

    return (
        <motion.div initial="hide" exit="exit" animate="show" className="md:border-r border-muted-foreground/50 flex flex-col items-stretch overflow-hidden w-full" variants={sidebarVariants}>
            <Accordion type="single" className="w-full" collapsible asChild>
                <motion.div initial="initial" animate="animate" exit="exit" variants={sidebarItemVariants}>
                    <AccordionItem value="personal" className="w-full border-muted-foreground/50" asChild>
                        <motion.div variants={itemVariants}>
                            <AccordionTrigger className="!w-full !flex !gap-2 !p-3 !cursor-pointer !box-border">
                                Personal
                            </AccordionTrigger>
                            <AccordionContent className="px-3">
                                Personal content
                            </AccordionContent>
                        </motion.div>
                    </AccordionItem>
                    <AccordionItem value="hobbies" className="w-full !border-b border-muted-foreground/50" asChild>
                        <motion.div variants={itemVariants}>
                            <AccordionTrigger className="!w-full !flex !gap-2 !p-3 !cursor-pointer !box-border">
                                Hobbies
                            </AccordionTrigger>
                            <AccordionContent className="px-3">
                                Hobbies content
                            </AccordionContent>
                        </motion.div>
                    </AccordionItem>
                </motion.div>
            </Accordion>
        </motion.div>
    )
}

export default MainEditorAboutSidebar