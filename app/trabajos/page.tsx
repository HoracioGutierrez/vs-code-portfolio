import MainEditorPageTitle from "@/components/layout/main-editor-page-title"
import * as motion from "motion/react-client"
import { loadStackParams } from "./stackParams"
import { SearchParams } from "nuqs/server";
import { Suspense } from "react";
import TrabajosList from "@/components/trabajos/trabajos-list";

type TrabajosPageProps = Readonly<{
    searchParams: Promise<SearchParams>
}>;

async function TrabajosPage({ searchParams }: TrabajosPageProps) {

    const { stack } = await loadStackParams(searchParams)

    return (
        <motion.div initial="hide" animate="show" exit="exit" className="flex grow p-3 flex-col">
            <MainEditorPageTitle title="Trabajos" shouldDelay />
            <Suspense key={stack ? stack.join(',') : ""} fallback={"loading..."}>
                <TrabajosList stack={stack} />
            </Suspense>
        </motion.div>
    )
}
export default TrabajosPage