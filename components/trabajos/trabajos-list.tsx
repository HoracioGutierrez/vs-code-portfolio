import { getProjectsByFilter } from "@/features/sidebar-items/actions/getProjectsByFilter";
import * as motion from "motion/react-client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type TrabajosListProps = {
    stack?: string[] | null;
};

async function TrabajosList({ stack }: TrabajosListProps) {

    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { error, payload } = await getProjectsByFilter(stack ? stack : []);

    const containerVariants = {
        show: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
        hide: { transition: { staggerChildren: 0.2 } },
        exit: { opacity: 0, transition: { staggerChildren: 0.3 } }
    }

    const itemVariants = {
        show: { x: 0, opacity: 1, /* display: "block", */ transition: { staggerChildren: 0.3 } },
        hide: { x: 50, opacity: 0, /* display: "none"  */},
        exit: { x: 50, opacity: 0, /* display: "none", */ transition: { staggerChildren: 0.3 } },
    }

    if (error) {
        return (
            <div>Error</div>
        )
    }

    return (
        <motion.div initial="hide" animate="show" exit="exit" variants={containerVariants} className="w-full h-full grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-5 lg:gap-10 grid-flow-row place-content-start">
            {payload?.map((project, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex relative flex-col"
                >
                    <motion.div whileHover="hover" whileTap="hover" className="h-full" initial="initial" animate="animate" variants={{
                        animate: { transition: { staggerChildren: 0.3 } }
                    }}>
                        <motion.div
                            className="box-border overflow-hidden relative z-10 rounded-md border aspect-video border-muted-foreground/50 bg-background min-h-[250px] w-full"
                        >
                            <motion.div
                                className="relative w-full h-full"
                                variants={{
                                    hover: { scale: 0.9, filter: "grayscale(1)" }
                                }}
                            >
                                <Image
                                    src={project.thumbnail ? `/images/trabajos/${project.thumbnail}` : "/images/thumbnail.png"}
                                    alt={project.title}
                                    fill
                                    className="object-cover w-full"
                                />
                            </motion.div>
                            <motion.div
                                className="flex absolute z-20 flex-col gap-3 p-5 w-full backdrop-blur-lg grow bg-black/80"
                                variants={{
                                    initial: { bottom: -170, opacity: 0 },
                                    hover: { bottom: 0, opacity: 1 }
                                }}
                            >
                                <motion.h3>{project.title}</motion.h3>
                                <motion.p
                                    className="text-sm text-muted-foreground"
                                    variants={{
                                        initial: { opacity: 0, x: 50 },
                                        hover: { opacity: 1, x: 0, transition: { delay: 0.1 } }
                                    }}
                                >
                                    {project.subtitle}
                                </motion.p>
                                <motion.div
                                    className="flex justify-end"
                                    variants={{
                                        initial: { opacity: 0, y: 50 },
                                        hover: { opacity: 1, y: 0, transition: { delay: 0.2 } }
                                    }}
                                >
                                    <Button asChild className="bg-transparent border border-muted-foreground/50 mt-auto hover:bg-accent-2 hover:!text-primary">
                                        <Link href={`/trabajos/${project.slug}`} className="text-sm !text-muted-foreground">Ver proyecto</Link>
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="flex flex-col gap-3 py-2 grow"
                            variants={{
                                initial: { y: 0, opacity: 1, transition: { delay: 0.4 } },
                                hover: { y: -200, opacity: 0 },
                                /* animate: { y: 0, opacity: 1 } */
                            }}
                        >
                            <motion.h3
                                variants={{
                                    /* initial: { y: 50, opacity: 0 },
                                    animate: { y: 0, opacity: 1 }, */
                                }}
                            >{project.title}</motion.h3>
                        </motion.div>
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    )
}
export default TrabajosList