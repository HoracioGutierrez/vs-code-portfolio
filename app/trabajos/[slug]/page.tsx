import TrabajosDetail from "@/components/trabajos/trabajos-detail";
import * as motion from "motion/react-client"
import { Suspense } from "react";

type TrabajosDetailPageProps = {
    params: Promise<{
        slug: string;
    }>
}

async function TrabajosDetailPage({ params }: TrabajosDetailPageProps) {

    const { slug } = await params;

    return (
        <motion.div initial="hide" animate="show" exit="exit" className="flex flex-col p-8 grow">
            <Suspense fallback={"Loading..."}>
                <TrabajosDetail slug={slug} />
            </Suspense>
        </motion.div>
    )
}
export default TrabajosDetailPage