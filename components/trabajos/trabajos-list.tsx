import { getProjectsByFilter } from "@/features/sidebar-items/actions/getProjectsByFilter";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type TrabajosListProps = {
    stack?: string[] | null;
};

async function TrabajosList({ stack }: TrabajosListProps) {

    await new Promise((resolve) => setTimeout(resolve, 1000))
    const { error, payload } = await getProjectsByFilter(stack ? stack : []);

    const containerVariants = {
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } },
        hide: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
    }

    const itemVariants = {
        show: { x: 0, opacity: 1, display: "block" },
        hide: { x: 50, opacity: 0, display: "none" },
        exit: { x: 50, opacity: 0 },
    }

    if (error) {
        return (
            <div>Error</div>
        )
    }

    return (
        <motion.div initial="hide" animate="show" exit="exit" variants={containerVariants} className="w-full h-full grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-5 lg:gap-10 grid-flow-row place-content-start">
            <AnimatePresence>
                {payload?.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        //whileHover={{ scale: 1.05, transition: { type: "spring", bounce: 0.85, stiffness: 400, damping: 16 } }}
                        //whileHover="hover"
                        className=" flex flex-col relative"
                    >
                        <motion.div whileHover="hover" className="h-full" initial="initial">
                            <motion.div
                                className="relative aspect-video border border-muted-foreground/50 rounded-md box-border overflow-hidden z-10"
                            /* variants={{ hover: { aspectRatio: "initial", height: "100%", width: "100%" } }} */
                            >
                                <Image
                                    src={project.thumbnail ? `/images/trabajos/${project.thumbnail}` : "/images/thumbnail.png"}
                                    alt={project.title}
                                    fill
                                    className="w-full object-cover"
                                />
                                <motion.div
                                    className="p-5 flex flex-col gap-3 grow absolute backdrop-blur-lg bg-black/80 z-20 w-full"
                                    variants={{
                                        initial: { bottom: -170, opacity: 0 },
                                        hover: { bottom: 0, opacity: 1 }
                                    }}
                                >
                                    <motion.h3>{project.title}</motion.h3>
                                    <motion.p
                                        variants={{
                                            initial: { opacity: 0, x: 50 },
                                            hover: { opacity: 1, x: 0, transition: { delay: 0.1 } }
                                        }}
                                        className="text-muted-foreground text-sm"
                                    >{project.subtitle}</motion.p>
                                    <Button asChild className="bg-transparent border border-muted-foreground/50 mt-auto hover:bg-accent-2 hover:!text-primary">
                                        <Link href={`/trabajos/${project.slug}`} className="text-sm !text-muted-foreground">Ver proyecto</Link>
                                    </Button>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className="py-2 flex flex-col gap-3 grow"
                                variants={{
                                    initial: { y: 0, opacity: 1, transition: { delay: 0.3 } },
                                    hover: { y: -200, opacity: 0 }
                                }}
                            /* variants={{ hover: { position: "absolute", bottom: 0, backgroundColor: "rgba(0,0,0,0.3)", backdropFilter: "blur(1.5)" } }} */
                            >
                                <motion.h3

                                >{project.title}</motion.h3>
                                {/* <motion.p
                                    variants={{
                                        
                                        initial: { opacity: 0 },
                                        hover: { opacity: 1, transition: { delay: 0.2 } } 
                                       
                                    }}
                                    className="text-muted-foreground text-sm"
                                >{project.subtitle}</motion.p> */}
                                {/* */}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    )
}
export default TrabajosList