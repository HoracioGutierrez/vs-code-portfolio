"use client"
import * as motion from "motion/react-client"
import { Accordion } from "../../ui/components/accordion"
import { usePathname } from "next/navigation"
import { useSidebarVariants } from "../hooks/useSidebarVariants"
import { AccordionSection } from "./AccordionSection"

const sections = [
    {
        value: "work",
        title: "_experiencia",
        folderColor: "accent-1" as const,
        links: [
            { href: "/sobre-mi/experiencia-readme", label: "readme.md", matchPath: "experiencia-readme" },
            { href: "/sobre-mi/experiencia", label: "experiencia.js", matchPath: "experiencia", excludeMatch: "readme" },
        ],
    },
    {
        value: "education",
        title: "_educacion",
        folderColor: "accent-2" as const,
        links: [
            { href: "/sobre-mi/education-readme", label: "readme.md", matchPath: "education-readme" },
            { href: "/sobre-mi/education", label: "education.js", matchPath: "education", excludeMatch: "readme" },
        ],
    },
    {
        value: "hobbies",
        title: "_hobbies",
        folderColor: "accent-3" as const,
        links: [
            { href: "/sobre-mi/hobbies-readme", label: "readme.md", matchPath: "hobbies-readme" },
            { href: "/sobre-mi/hobbies", label: "hobbies.js", matchPath: "hobbies", excludeMatch: "readme" },
        ],
    },
];

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
                    {sections.map((section, index) => (
                        <AccordionSection
                            key={section.value}
                            value={section.value}
                            title={section.title}
                            folderColor={section.folderColor}
                            links={section.links}
                            itemVariants={itemVariants}
                            isLast={index === sections.length - 1}
                        />
                    ))}
                </motion.div>
            </Accordion>
        </motion.div>
    )
}

export default MainEditorAboutSidebar
