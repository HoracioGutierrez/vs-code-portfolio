import * as motion from "motion/react-client"
import { loadStackParams } from "./stackParams"
import { SearchParams } from "nuqs/server";
import { Suspense } from "react";
import TrabajosList from "@/components/trabajos/trabajos-list";
import Loading from "@/components/sobre-mi/loading";
import { AnimatePresence } from "motion/react";

type TrabajosPageProps = Readonly<{
    searchParams: Promise<SearchParams>
}>;

async function TrabajosPage({ searchParams }: TrabajosPageProps) {

    const { stack } = await loadStackParams(searchParams)

    return (
        <motion.div className="flex flex-col justify-center items-center p-8 w-full h-full grow" variants={{ show: { transition: { staggerChildren: 0.3, delayChildren: 10, delay: 10 } }, exit: { transition: { staggerChildren: 0.3 } } }}>
            <AnimatePresence key={stack?.toString()} mode="wait">
                <Suspense fallback={<Loading />} key={stack?.toString()}>
                    <TrabajosList stack={stack} />
                </Suspense>
            </AnimatePresence>
        </motion.div>
    )
}
export default TrabajosPage