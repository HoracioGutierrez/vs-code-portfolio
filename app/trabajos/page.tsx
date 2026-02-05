import * as motion from "motion/react-client"
import { loadStackParams } from "../../features/trabajos/utils/stackParams"
import { SearchParams } from "nuqs/server";
import { Suspense } from "react";
import TrabajosList from "@/features/trabajos/components/trabajos-list";
import Loading from "@/features/sobre-mi/components/loading";
import { AnimatePresence } from "motion/react";
import { getProjectsCountByFilter } from "@/features/sidebar-items/actions/getProjectsCountByFilter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trabajos",
  description: "Explora los proyectos de Horacio Gutierrez. Aplicaciones web con React, Next.js, Node.js y más.",
};

type TrabajosPageProps = Readonly<{
    searchParams: Promise<SearchParams>
}>;

async function TrabajosPage({ searchParams }: TrabajosPageProps) {

    const { stack } = await loadStackParams(searchParams)
    const { payload } = await getProjectsCountByFilter(stack ? stack : []);

    return (
        <motion.div className="flex flex-col justify-center items-center p-8 2xl:p-24 w-full h-full grow" variants={{ show: { transition: { staggerChildren: 0.3, delayChildren: 10, delay: 10 } }, exit: { transition: { staggerChildren: 0.3 } } }}>
            <AnimatePresence key={stack?.toString()} mode="wait">
                <Suspense fallback={<Loading count={payload} />}>
                    <TrabajosList stack={stack} key={stack?.toString()} />
                </Suspense>
            </AnimatePresence>
        </motion.div>
    )
}
export default TrabajosPage