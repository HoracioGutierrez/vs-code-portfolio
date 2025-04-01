import { getProjectBySlug } from "@/features/trabajos/actions/getProjectBySlug";
import * as motion from "motion/react-client"
import Image from "next/image";
import Link from "next/link";

type TrabajosDetailProps = {
    slug: string;
}

async function TrabajosDetail({ slug }: TrabajosDetailProps) {

    const { error, payload } = await getProjectBySlug(slug);

    const containerVariants = {
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } },
        hide: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
    }

    const itemVariants = {
        initial: { y: 50, opacity: 0 },
        show: { y: 0, opacity: 1 },
        hide: { y: 50, opacity: 0 },
    }

    if (error) {
        return (
            <div>Error</div>
        )
    }

    return (
        <motion.div initial="initial" animate="show" exit="hide" variants={containerVariants}>
            <motion.h1 variants={itemVariants} className="font-bold text-2xl">{payload.title}</motion.h1>
            <motion.p variants={itemVariants} className="text-muted-foreground text-xs mb-12">{payload.subtitle}</motion.p>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    {payload.description.split(".").map((paragraph: string, index: number) => {
                        return (
                            <motion.p variants={itemVariants} key={index} className="text-muted-foreground mb-4 hover:text-white transition-colors">{paragraph}</motion.p>
                        )
                    })}
                    <motion.div variants={itemVariants} className="justify-center lg:justify-start flex my-8">
                        <Link
                            className="!text-sm !bg-muted-foreground/30 !py-2.5 !px-3 !rounded-lg !w-fit !cursor-pointer"
                            href={payload.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            _ir-al-proyecto
                        </Link>
                    </motion.div>
                </div>
                <motion.div
                    variants={itemVariants}
                    className="relative w-full aspect-video max-w-xl justify-self-center lg:justify-self-end"
                >
                    <Image
                        src={"/images/trabajos/" + payload.slug + "/laptop.png"}
                        alt={payload.title}
                        fill
                        className="w-full object-cover"
                    />
                </motion.div>
            </div>
        </motion.div>
    )

}

export default TrabajosDetail