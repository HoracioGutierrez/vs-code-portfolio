import MainEditorPageTitle from "@/components/layout/main-editor-page-title"
import * as motion from "motion/react-client"
import { lazy, Suspense } from "react";

type PageProps = Readonly<{
    params: Promise<{
        file: string
    }>
}>;

export default async function Page({ params }: PageProps) {

    const { file } = await params

    const Component = lazy(
        async () => {
            //await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a long loading time for the componen
            return import(`@/components/sobre-mi/${file}`)
        },
    );

    return (
        <motion.div initial="hide" animate="show" exit="exit" className="flex grow p-3 flex-col">
            <Suspense fallback={"Loading..."}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, repeat: 1, repeatDelay: 1 } }} className="flex flex-col">
                    <Component />
                </motion.div>
            </Suspense>
        </motion.div>
    );
}