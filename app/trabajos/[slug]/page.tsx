import TrabajosDetail from "@/features/trabajos/components/trabajos-detail";
import { getProjectBySlug } from "@/features/trabajos/actions/getProjectBySlug";
import * as motion from "motion/react-client"
import { Suspense } from "react";
import type { Metadata } from "next";

type TrabajosDetailPageProps = {
    params: Promise<{
        slug: string;
    }>
}

export async function generateMetadata({
    params,
}: TrabajosDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const { error, payload } = await getProjectBySlug(slug);

    if (error || !payload?.title) {
        return {
            title: "Proyecto no encontrado",
            description: "El proyecto solicitado no fue encontrado.",
        };
    }

    return {
        title: payload.title,
        description: payload.subtitle || payload.description?.split("||")[0],
    };
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