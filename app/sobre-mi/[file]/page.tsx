import MainEditorPageTitle from "@/components/layout/main-editor-page-title"
import * as motion from "motion/react-client"

type PageProps = Readonly<{
    params: Promise<{
        file: string
    }>
}>;

export default async function Page({ params }: PageProps) {
    
    const { file } = await params

    return (
        <motion.div initial="hide" animate="show" exit="exit" className="flex grow p-3">
            <MainEditorPageTitle title="Sobre mi" />
        </motion.div>
    );
}