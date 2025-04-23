"use client"
import * as motion from "motion/react-client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { useMedia } from "react-use"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Folder } from "lucide-react"

function MainEditorAboutSidebar() {
    const pathname = usePathname()
    const isBigEnough = useMedia("(min-width: 768px)")

    // Determine which accordion item should be expanded by default
    const getDefaultAccordionValue = () => {
        if (pathname.includes('experiencia')) return 'work'
        if (pathname.includes('education')) return 'education'
        if (pathname.includes('hobbies')) return 'hobbies'
        return undefined
    }

    let sidebarVariants

    if (isBigEnough) {
        sidebarVariants = {
            hide: { opacity: 0, width: "0px" },
            show: { opacity: 1, width: "300px", height: "auto", transition: { delay: 0.3 } },
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
        <motion.div initial="hide" exit="exit" animate="show" className="md:border-r border-[#1E2D3D] flex flex-col items-stretch overflow-hidden w-full" variants={sidebarVariants}>
            <Accordion type="single" className="w-full" collapsible asChild defaultValue={getDefaultAccordionValue()}>
                <motion.div initial="initial" animate="animate" exit="exit" variants={sidebarItemVariants}>
                    <AccordionItem value="work" className="w-full border-[#1E2D3D]" asChild>
                        <motion.div variants={itemVariants}>
                            <AccordionTrigger className="!w-full !flex !gap-2 !p-3 !cursor-pointer !box-border !text-muted-foreground">
                                <span>
                                    <Folder className="fill-accent-1 stroke-0" />
                                </span>
                                _experiencia
                            </AccordionTrigger>
                            <AccordionContent className="pb-0">
                                <Link href="/sobre-mi/experiencia-readme" 
                                      className={`p-3 w-full block hover:bg-accent-1 ${pathname.includes('experiencia-readme') ? 'text-primary bg-[#1E2D3D]' : 'text-muted-foreground'}`}>
                                    readme.md
                                </Link>
                                <Link href="/sobre-mi/experiencia" 
                                      className={`p-3 w-full block hover:bg-accent-1 ${pathname.includes('experiencia') && !pathname.includes('readme') ? 'text-primary bg-[#1E2D3D]' : 'text-muted-foreground'}`}>
                                    experiencia.js
                                </Link>
                            </AccordionContent>
                        </motion.div>
                    </AccordionItem>
                    <AccordionItem value="education" className="w-full border-[#1E2D3D]" asChild>
                        <motion.div variants={itemVariants}>
                            <AccordionTrigger className="!w-full !flex !gap-2 !p-3 !cursor-pointer !box-border !text-muted-foreground">
                                <span>
                                    <Folder className="fill-accent-2 stroke-0" />
                                </span>
                                _educacion
                            </AccordionTrigger>
                            <AccordionContent className="pb-0">
                                <Link href="/sobre-mi/education-readme" 
                                      className={`p-3 w-full block hover:bg-accent-1 ${pathname.includes('education-readme') ? 'text-primary bg-[#1E2D3D]' : 'text-muted-foreground'}`}>
                                    readme.md
                                </Link>
                                <Link href="/sobre-mi/education" 
                                      className={`p-3 w-full block hover:bg-accent-1 ${pathname.includes('education') && !pathname.includes('readme') ? 'text-primary bg-[#1E2D3D]' : 'text-muted-foreground'}`}>
                                    education.js
                                </Link>
                            </AccordionContent>
                        </motion.div>
                    </AccordionItem>
                    <AccordionItem value="hobbies" className="w-full !border-b border-[#1E2D3D]" asChild>
                        <motion.div variants={itemVariants}>
                            <AccordionTrigger className="!w-full !flex !gap-2 !p-3 !cursor-pointer !box-border !text-muted-foreground">
                                <span>
                                    <Folder className="fill-accent-3 stroke-0" />
                                </span>
                                _hobbies
                            </AccordionTrigger>
                            <AccordionContent className="pb-0">
                                <Link href="/sobre-mi/hobbies-readme" 
                                      className={`p-3 w-full block hover:bg-accent-1 ${pathname.includes('hobbies-readme') ? 'text-primary bg-[#1E2D3D]' : 'text-muted-foreground'}`}>
                                    readme.md
                                </Link>
                                <Link href="/sobre-mi/hobbies" 
                                      className={`p-3 w-full block hover:bg-accent-1 ${pathname.includes('hobbies') && !pathname.includes('readme') ? 'text-primary bg-[#1E2D3D]' : 'text-muted-foreground'}`}>
                                    hobbies.js
                                </Link>
                            </AccordionContent>
                        </motion.div>
                    </AccordionItem>
                </motion.div>
            </Accordion>
        </motion.div>
    )
}

export default MainEditorAboutSidebar