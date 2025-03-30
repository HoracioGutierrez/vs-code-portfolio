"use client"
import { useMedia } from "react-use"
import * as motion from "motion/react-client"
import { defaultFilters } from "@/features/sidebar-items/lib/utils"
import Image from "next/image"
import { parseAsArrayOf, parseAsString, useQueryState } from 'nuqs'

function MainEditorWorksSidebar() {

    const isBigEnough = useMedia("(min-width: 768px)")
    const [stack, setStack] = useQueryState('stack', parseAsArrayOf(parseAsString))

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
        animate: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } }
    }

    const itemVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
    }

    const handleToggleStack = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.currentTarget.dataset.target || ''

        if(!stack) {
            return setStack([target])
        }

        if(stack.includes(target)) {
            const filteredStack = stack.filter((item) => item !== target)
            if(filteredStack.length > 0) {
                return setStack(filteredStack)
            } else {
                return setStack(null) 
            }
        } else {
            return setStack([...stack, target]) 
        }
    }

    return (
        <motion.div initial="hide" exit="exit" animate="show" className="md:border-r border-muted-foreground/50 flex flex-col items-stretch overflow-hidden w-full" variants={sidebarVariants}>
            <motion.div initial="initial" animate="animate" exit="exit" variants={sidebarItemVariants} className="py-3 flex flex-wrap md:flex-col gap-3 md:gap-0 justify-center">
                {defaultFilters.map((filter, index) => {
                    return (
                        <motion.div key={index} variants={itemVariants} className="px-5 py-2 flex gap-3 rounded-full md:rounded-none border border-muted-foreground/50 md:border-none text-xs md:text-sm items-center cursor-pointer select-none hover:bg-accent-2/20 transition-colors" onClick={handleToggleStack} data-target={filter.value}>
                            {filter.icon && (
                                <Image
                                    src={filter.icon || ""}
                                    alt={filter.label}
                                    width={20}
                                    height={20}
                                    className="aspect-square"
                                />
                            )}
                            {filter.label}
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
    )
}
export default MainEditorWorksSidebar