"use client"
import * as motion from "motion/react-client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { useMedia } from "react-use"
import Link from "next/link"
import { Folder } from "lucide-react"

function MainEditorAboutSidebar() {

    const isBigEnough = useMedia("(min-width: 768px)")

    let sidebarVariants

    if (isBigEnough) {
        sidebarVariants = {
            hide: { opacity: 0, width: "0px" },
            show: { opacity: 1, width: "300px", height: "auto" },
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
                    <AccordionItem value="work" className="w-full border-muted-foreground/50" asChild>
                        <motion.div variants={itemVariants}>
                            <AccordionTrigger className="!w-full !flex !gap-2 !p-3 !cursor-pointer !box-border !text-muted-foreground">
                                <span>
                                    <Folder className="fill-accent-1 stroke-0"/>
                                </span>
                                _experiencia
                            </AccordionTrigger>
                            <AccordionContent className="px-3">
                                Experiencia content
                            </AccordionContent>
                        </motion.div>
                    </AccordionItem>
                    <AccordionItem value="education" className="w-full border-muted-foreground/50" asChild>
                        <motion.div variants={itemVariants}>
                            <AccordionTrigger className="!w-full !flex !gap-2 !p-3 !cursor-pointer !box-border !text-muted-foreground">
                                <span>
                                    <Folder className="fill-accent-2 stroke-0"/>
                                </span>
                                _educacion
                            </AccordionTrigger>
                            <AccordionContent className="pb-0">
                                <Link href="/sobre-mi/education-readme" className="p-3 w-full block hover:bg-accent-1 text-muted-foreground">
                                    readme.md
                                </Link>
                                <Link href="/sobre-mi/education" className="p-3 w-full block hover:bg-accent-1 text-muted-foreground">
                                    education.js
                                </Link>
                            </AccordionContent>
                        </motion.div>
                    </AccordionItem>
                    <AccordionItem value="hobbies" className="w-full !border-b border-muted-foreground/50" asChild>
                        <motion.div variants={itemVariants}>
                            <AccordionTrigger className="!w-full !flex !gap-2 !p-3 !cursor-pointer !box-border !text-muted-foreground">
                                <span>
                                    <Folder className="fill-accent-3 stroke-0"/>
                                </span>
                                _hobbies
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