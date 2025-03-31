import { getProjectsByFilter } from "@/features/sidebar-items/actions/getProjectsByFilter";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client"
import Image from "next/image";

type TrabajosListProps = {
    stack?: string[] | null;
};

async function TrabajosList({ stack }: TrabajosListProps) {

    const { error, payload } = await getProjectsByFilter(stack ? stack : []);

    const containerVariants = {
        show: { transition: { staggerChildren: 0.1 } },
        hide: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
    }

    const itemVariants = {
        show: { x: 0, opacity: 1 },
        hide: { x: 50, opacity: 0 },
        exit: { x: 50, opacity: 0 },
    }

    if (error) {
        return (
            <div>Error</div>
        )
    }

    return (
        <motion.div initial="hide" animate="show" exit="exit" variants={containerVariants} className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(min(300px,_100%),_1fr))] gap-8 lg:gap-4 w-full 2xl:max-w-2/3">
            <AnimatePresence>
                {payload?.map((project, index) => (
                    <motion.div key={index} variants={itemVariants} className="border border-muted-foreground/50 rounded-md box-border overflow-hidden">
                        <Image
                            src={project.thumbnail ? `/images/trabajos/${project.thumbnail}` : "/images/thumbnail.png"}
                            alt={project.title}
                            width={300}
                            height={300}
                            className="w-full object-cover aspect-video"
                        />
                        <div className="p-5 flex flex-col gap-2">
                            <h3>{project.title}</h3>
                            <p className="text-muted-foreground text-sm">{project.subtitle}</p>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    )
}
export default TrabajosList