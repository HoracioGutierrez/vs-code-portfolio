import * as motion from "motion/react-client"

export default function Loading() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.6 } }} className="w-full h-full grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-5 lg:gap-10 grid-rows-[repeat(auto-fill,min(400px,100%)">
            <div className="border border-muted-foreground/50 rounded-md p-5 animate-pulse grow">
                <div className="h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
            </div>
            <div className="border border-muted-foreground/50 rounded-md p-5 animate-pulse grow">
                <div className="h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
            </div>
            <div className="border border-muted-foreground/50 rounded-md p-5 animate-pulse grow">
                <div className="h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
            </div>
            <div className="border border-muted-foreground/50 rounded-md p-5 animate-pulse grow">
                <div className="h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
            </div>
            <div className="border border-muted-foreground/50 rounded-md p-5 animate-pulse grow">
                <div className="h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
            </div>
            <div className="border border-muted-foreground/50 rounded-md p-5 animate-pulse grow">
                <div className="h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
            </div>
            <div className="border border-muted-foreground/50 rounded-md p-5 animate-pulse grow">
                <div className="h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
            </div>
        </motion.div>
    );
}