import * as motion from "motion/react-client"

type LoadingProps = {
    count: number;
}

export default function Loading({ count = 6 }: LoadingProps) {
console.log("🚀 ~ Loading ~ count:", count)

    const containerVariants = {
        hide: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
        exit: { transition: { staggerChildren: 0.2 } }
    }

    const itemVariants = {
        hide: { y: 50, opacity: 0 },
        show: { y: 0, opacity: 1 },
        exit: { y: 50, opacity: 0 }
    }

    return (
        <>
            <motion.div initial="hide" animate="show" exit="exit" variants={containerVariants} className="w-full h-full grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-5 lg:gap-10 grid-rows-[repeat(auto-fill,min(400px,100%)">
                {/* <motion.div variants={itemVariants} className="grow">
                    <motion.div className="rounded-md border animate-pulse border-muted-foreground/50 grow">
                        <div className="h-full rounded bg-muted-foreground/50 aspect-[323/248]"></div>
                    </motion.div>
                    <div className="mt-4 w-2/3 h-4 rounded bg-muted-foreground/50"></div>
                </motion.div>
                <motion.div variants={itemVariants} className="grow">
                    <motion.div className="rounded-md border animate-pulse border-muted-foreground/50 grow">
                        <div className="h-full rounded bg-muted-foreground/50 aspect-[323/248]"></div>
                    </motion.div>
                    <div className="mt-4 w-2/3 h-4 rounded bg-muted-foreground/50"></div>
                </motion.div>
                <motion.div variants={itemVariants} className="grow">
                    <motion.div className="rounded-md border animate-pulse border-muted-foreground/50 grow">
                        <div className="h-full rounded bg-muted-foreground/50 aspect-[323/248]"></div>
                    </motion.div>
                    <div className="mt-4 w-2/3 h-4 rounded bg-muted-foreground/50"></div>
                </motion.div>
                <motion.div variants={itemVariants} className="grow">
                    <motion.div className="rounded-md border animate-pulse border-muted-foreground/50 grow">
                        <div className="h-full rounded bg-muted-foreground/50 aspect-[323/248]"></div>
                    </motion.div>
                    <div className="mt-4 w-2/3 h-4 rounded bg-muted-foreground/50"></div>
                </motion.div>
                <motion.div variants={itemVariants} className="grow">
                    <motion.div className="rounded-md border animate-pulse border-muted-foreground/50 grow">
                        <div className="h-full rounded bg-muted-foreground/50 aspect-[323/248]"></div>
                    </motion.div>
                    <div className="mt-4 w-2/3 h-4 rounded bg-muted-foreground/50"></div>
                </motion.div>
                <motion.div variants={itemVariants} className="grow">
                    <motion.div className="rounded-md border animate-pulse border-muted-foreground/50 grow">
                        <div className="h-full rounded bg-muted-foreground/50 aspect-[323/248]"></div>
                    </motion.div>
                    <div className="mt-4 w-2/3 h-4 rounded bg-muted-foreground/50"></div>
                </motion.div>
                <motion.div variants={itemVariants} className="grow">
                    <motion.div className="rounded-md border animate-pulse border-muted-foreground/50 grow">
                        <div className="h-full rounded bg-muted-foreground/50 aspect-[323/248]"></div>
                    </motion.div>
                    <div className="mt-4 w-2/3 h-4 rounded bg-muted-foreground/50"></div>
                </motion.div> */}
                {Array.from({ length: count }).map((_, index) => (
                    <motion.div variants={itemVariants} key={index} className="grow">
                        <motion.div className="rounded-md border animate-pulse border-muted-foreground/50 grow">
                            <div className="h-full rounded bg-muted-foreground/50 aspect-[323/248]"></div> 
                        </motion.div>
                        <div className="mt-4 w-2/3 h-4 rounded bg-muted-foreground/50"></div>
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
}