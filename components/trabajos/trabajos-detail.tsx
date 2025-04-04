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
        <motion.div initial="initial" animate="show" exit="hide" variants={containerVariants} className="flex flex-col grow">
            <motion.h1 variants={itemVariants} className="text-2xl font-bold">{payload.title}</motion.h1>
            <motion.p variants={itemVariants} className="mb-12 text-xs text-muted-foreground">{payload.subtitle}</motion.p>
            <div className="grid grid-cols-1 lg:grid-cols-2 grow">
                <div className="self-end">
                    {payload.description.split(".").map((paragraph: string, index: number) => {
                        return (
                            <motion.p variants={itemVariants} key={index} className="mb-4 transition-colors text-muted-foreground hover:text-white">{paragraph}</motion.p>
                        )
                    })}
                    <motion.div variants={itemVariants} className="flex justify-center my-8 lg:justify-start">
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
                    className="grid relative grid-cols-1 justify-self-center self-end w-full aspect-video lg:justify-self-end"
                    /* whileHover="hover"
                    initial="initial" */
                >
                   {/*  <motion.div
                        className="relative col-start-1 row-start-1 justify-self-center w-full aspect-1/2 max-w-3xs max-h-[450px] self-center"
                        variants={{
                            initial: { rotateY: 180, opacity: 0, transition: {} },
                            hover: { rotateY: 0, opacity: 1, transition: { delay: 0.5, duration: 0.7, ease: "backOut" } }
                        }}
                    >
                        <Image
                            src={"/images/trabajos/" + payload.slug + "/mobile.png"}
                            alt={payload.title}
                            fill
                            className="object-cover w-full"
                        />
                    </motion.div> */}
                    <motion.div
                        className="relative col-start-1 row-start-1 justify-self-center self-center w-full aspect-video"
                        /* variants={{
                            initial: { rotateY: 0, opacity: 1, transition: {} },
                            hover: { rotateY: 180, opacity: 0, transition: { duration: 0.7, ease: "backOut" } }
                        }} */
                    >
                        <Image
                            src={"/images/trabajos/" + payload.slug + "/laptop.png"}
                            alt={payload.title}
                            fill
                            className="object-contain w-full"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )

}

export default TrabajosDetail