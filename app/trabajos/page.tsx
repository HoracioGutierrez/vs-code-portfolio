import * as motion from "motion/react-client"
import { loadStackParams } from "./stackParams"
import { SearchParams } from "nuqs/server";
import { Suspense } from "react";
import TrabajosList from "@/components/trabajos/trabajos-list";
import Loading from "./loading";

type TrabajosPageProps = Readonly<{
    searchParams: Promise<SearchParams>
}>;

async function TrabajosPage({ searchParams }: TrabajosPageProps) {

    const { stack } = await loadStackParams(searchParams)

    return (
        <motion.div initial="hide" animate={{ opacity: 1, transition: { delay: 0.4 } }} exit="exit" className="flex grow p-8 flex-col justify-center items-center">
            <Suspense key={stack ? stack.join(',') : ""} fallback={<Loading />}>
                <TrabajosList stack={stack} />
            </Suspense>
        </motion.div>
    )
}
export default TrabajosPage