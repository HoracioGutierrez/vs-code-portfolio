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
        <motion.div initial="hide" animate="show" exit="exit" variants={containerVariants} className="w-full h-full grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-5 lg:gap-10 grid-rows-[repeat(auto-fill,min(400px,100%))]">
            <AnimatePresence>
                {payload?.map((project, index) => (
                    <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.05, transition: { type: "spring", bounce: 0.85, stiffness: 400, damping: 16 } }} className="border border-muted-foreground/50 rounded-md box-border overflow-hidden flex flex-col">
                        <Image
                            src={project.thumbnail ? `/images/trabajos/${project.thumbnail}` : "/images/thumbnail.png"}
                            alt={project.title}
                            width={300}
                            height={300}
                            className="w-full object-cover aspect-video"
                        />
                        <div className="p-5 flex flex-col gap-3 grow">
                            <h3>{project.title}</h3>
                            <p className="text-muted-foreground text-sm">{project.subtitle}</p>
                            <Button asChild className="bg-transparent border border-muted-foreground/50 mt-auto hover:bg-accent-2 hover:!text-primary">
                                <Link href={`/trabajos/${project.slug}`} className="text-sm !text-muted-foreground">Ver proyecto</Link>
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    )
}
export default TrabajosList