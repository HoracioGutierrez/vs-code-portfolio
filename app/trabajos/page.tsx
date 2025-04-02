import * as motion from "motion/react-client"
import { loadStackParams } from "./stackParams"
import { SearchParams } from "nuqs/server";
import { Suspense } from "react";
import TrabajosList from "@/components/trabajos/trabajos-list";
import Loading from "./loading";
import { AnimatePresence } from "motion/react";

type TrabajosPageProps = Readonly<{
    searchParams: Promise<SearchParams>
}>;

async function TrabajosPage({ searchParams }: TrabajosPageProps) {

    const { stack } = await loadStackParams(searchParams)

    return (
        <motion.div initial="hide" animate="show" exit="exit" className="flex flex-col justify-center items-center p-8 w-full h-full grow" variants={{ show: { transition: { staggerChildren: 0.3, delayChildren: 10 } }, exit: { transition: { staggerChildren: 0.3 } } }}>
            <AnimatePresence key={stack?.toString()}>
                <Suspense fallback={<Loading />}>
                    <TrabajosList stack={stack} />
                </Suspense>
            </AnimatePresence>
        </motion.div>
    )
}
export default TrabajosPage