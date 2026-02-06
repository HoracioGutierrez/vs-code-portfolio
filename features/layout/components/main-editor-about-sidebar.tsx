"use client"
import * as motion from "motion/react-client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/components/accordion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Folder } from "lucide-react"
import { useSidebarVariants } from "../hooks/useSidebarVariants"

function MainEditorAboutSidebar() {
    const pathname = usePathname()
    const { sidebarVariants, sidebarItemVariants, itemVariants } = useSidebarVariants()

    const getDefaultAccordionValue = () => {
        if (pathname.includes('experiencia')) return 'work'
        if (pathname.includes('education')) return 'education'
        if (pathname.includes('hobbies')) return 'hobbies'
        return undefined
    }

    return (
        <motion.div initial="hide" exit="exit" animate="show" className="md:border-r border-border-editor flex flex-col items-stretch overflow-hidden w-full" variants={sidebarVariants}>
            <Accordion type="single" className="w-full" collapsible asChild defaultValue={getDefaultAccordionValue()}>
                <motion.div initial="initial" animate="animate" exit="exit" variants={sidebarItemVariants}>
                    <AccordionItem value="work" className="w-full border-border-editor" asChild>
                        <motion.div variants={itemVariants}>
                            <AccordionTrigger className="!w-full !flex !gap-2 !p-3 !cursor-pointer !box-border !text-muted-foreground">
                                <span>
                                    <Folder className="fill-accent-1 stroke-0" />
                                </span>
                                _experiencia
                            </AccordionTrigger>
                            <AccordionContent className="pb-0">
                                <Link href="/sobre-mi/experiencia-readme" 
                                      className={`p-3 w-full block hover:bg-accent-1 ${pathname.includes('experiencia-readme') ? 'text-primary bg-border-editor' : 'text-muted-foreground'}`}>
                                    readme.md
                                </Link>
                                <Link href="/sobre-mi/experiencia" 
                                      className={`p-3 w-full block hover:bg-accent-1 ${pathname.includes('experiencia') && !pathname.includes('readme') ? 'text-primary bg-border-editor' : 'text-muted-foreground'}`}>
                                    experiencia.js
                                </Link>
                            </AccordionContent>
                        </motion.div>
                    </AccordionItem>
                    <AccordionItem value="education" className="w-full border-border-editor" asChild>
                        <motion.div variants={itemVariants}>
                            <AccordionTrigger className="!w-full !flex !gap-2 !p-3 !cursor-pointer !box-border !text-muted-foreground">
                                <span>
                                    <Folder className="fill-accent-2 stroke-0" />
                                </span>
                                _educacion
                            </AccordionTrigger>
                            <AccordionContent className="pb-0">
                                <Link href="/sobre-mi/education-readme" 
                                      className={`p-3 w-full block hover:bg-accent-1 ${pathname.includes('education-readme') ? 'text-primary bg-border-editor' : 'text-muted-foreground'}`}>
                                    readme.md
                                </Link>
                                <Link href="/sobre-mi/education" 
                                      className={`p-3 w-full block hover:bg-accent-1 ${pathname.includes('education') && !pathname.includes('readme') ? 'text-primary bg-border-editor' : 'text-muted-foreground'}`}>
                                    education.js
                                </Link>
                            </AccordionContent>
                        </motion.div>
                    </AccordionItem>
                    <AccordionItem value="hobbies" className="w-full !border-b border-border-editor" asChild>
                        <motion.div variants={itemVariants}>
                            <AccordionTrigger className="!w-full !flex !gap-2 !p-3 !cursor-pointer !box-border !text-muted-foreground">
                                <span>
                                    <Folder className="fill-accent-3 stroke-0" />
                                </span>
                                _hobbies
                            </AccordionTrigger>
                            <AccordionContent className="pb-0">
                                <Link href="/sobre-mi/hobbies-readme" 
                                      className={`p-3 w-full block hover:bg-accent-1 ${pathname.includes('hobbies-readme') ? 'text-primary bg-border-editor' : 'text-muted-foreground'}`}>
                                    readme.md
                                </Link>
                                <Link href="/sobre-mi/hobbies" 
                                      className={`p-3 w-full block hover:bg-accent-1 ${pathname.includes('hobbies') && !pathname.includes('readme') ? 'text-primary bg-border-editor' : 'text-muted-foreground'}`}>
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