import MainEditorPageTitle from "@/components/layout/main-editor-page-title"
import { AnimatePresence } from "motion/react";
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
            await new Promise((resolve) => setTimeout(resolve, 600)); // Simulate a long loading time for the componen
            return import(`@/components/sobre-mi/${file}`)
        },
    );

    return (
        <motion.div initial="hide" animate="show" exit="exit" className="flex grow p-3 flex-col">
            <AnimatePresence mode="wait">
                <Suspense fallback={<motion.div key={file + "loading"} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }}>Loading...</motion.div>}>
                    <motion.div key={file} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="flex flex-col">
                        <Component />
                    </motion.div>
                </Suspense>
            </AnimatePresence>
        </motion.div>
    );
}