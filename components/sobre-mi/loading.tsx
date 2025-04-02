import * as motion from "motion/react-client"

export default function Loading() {

    const containerVariants = {
        hide: {},
        show: { transition: { staggerChildren: 0.2 } },
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
                <motion.div variants={itemVariants} className="p-5 rounded-md border animate-pulse border-muted-foreground/50 grow">
                    <div className="h-4 rounded bg-muted-foreground/50"></div>
                    <div className="mt-4 h-4 rounded bg-muted-foreground/50"></div>
                    <div className="mt-4 h-4 rounded bg-muted-foreground/50"></div>
                </motion.div>
                <motion.div variants={itemVariants} className="p-5 rounded-md border animate-pulse border-muted-foreground/50 grow">
                    <div className="h-4 rounded bg-muted-foreground/50"></div>
                    <div className="mt-4 h-4 rounded bg-muted-foreground/50"></div>
                    <div className="mt-4 h-4 rounded bg-muted-foreground/50"></div>
                </motion.div>
                <motion.div variants={itemVariants} className="p-5 rounded-md border animate-pulse border-muted-foreground/50 grow">
                    <div className="h-4 rounded bg-muted-foreground/50"></div>
                    <div className="mt-4 h-4 rounded bg-muted-foreground/50"></div>
                    <div className="mt-4 h-4 rounded bg-muted-foreground/50"></div>
                </motion.div>
                <motion.div variants={itemVariants} className="p-5 rounded-md border animate-pulse border-muted-foreground/50 grow">
                    <div className="h-4 rounded bg-muted-foreground/50"></div>
                    <div className="mt-4 h-4 rounded bg-muted-foreground/50"></div>
                    <div className="mt-4 h-4 rounded bg-muted-foreground/50"></div>
                </motion.div>
                <motion.div variants={itemVariants} className="p-5 rounded-md border animate-pulse border-muted-foreground/50 grow">
                    <div className="h-4 rounded bg-muted-foreground/50"></div>
                    <div className="mt-4 h-4 rounded bg-muted-foreground/50"></div>
                    <div className="mt-4 h-4 rounded bg-muted-foreground/50"></div>
                </motion.div>
                <motion.div variants={itemVariants} className="p-5 rounded-md border animate-pulse border-muted-foreground/50 grow">
                    <div className="h-4 rounded bg-muted-foreground/50"></div>
                    <div className="mt-4 h-4 rounded bg-muted-foreground/50"></div>
                    <div className="mt-4 h-4 rounded bg-muted-foreground/50"></div>
                </motion.div>
                <motion.div variants={itemVariants} className="p-5 rounded-md border animate-pulse border-muted-foreground/50 grow">
                    <div className="h-4 rounded bg-muted-foreground/50"></div>
                    <div className="mt-4 h-4 rounded bg-muted-foreground/50"></div>
                    <div className="mt-4 h-4 rounded bg-muted-foreground/50"></div>
                </motion.div>
            </motion.div>
        </>
    );
}