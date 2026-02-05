import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client"
import { lazy, Suspense } from "react";
import type { Metadata } from "next";

type PageProps = Readonly<{
    params: Promise<{
        file: string
    }>
}>;

const fileMetadata: Record<string, { title: string; description: string }> = {
    experiencia: {
        title: "Experiencia Laboral",
        description: "Trayectoria profesional de Horacio Gutierrez como desarrollador Full-Stack.",
    },
    education: {
        title: "Educacion",
        description: "Formacion academica de Horacio Gutierrez.",
    },
    hobbies: {
        title: "Hobbies",
        description: "Intereses y hobbies de Horacio Gutierrez.",
    },
    "experiencia-readme": {
        title: "Experiencia - README",
        description: "Detalles sobre la experiencia laboral.",
    },
    "education-readme": {
        title: "Educacion - README",
        description: "Detalles sobre la educacion.",
    },
    "hobbies-readme": {
        title: "Hobbies - README",
        description: "Detalles sobre los hobbies.",
    },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { file } = await params;
    const meta = fileMetadata[file];

    if (!meta) {
        return {
            title: "Seccion no encontrada",
            description: "La seccion solicitada no fue encontrada.",
        };
    }

    return {
        title: meta.title,
        description: meta.description,
    };
}

export default async function Page({ params }: PageProps) {

    const { file } = await params

    const Component = lazy(
        async () => {
            await new Promise((resolve) => setTimeout(resolve, 600)); // Simulate a long loading time for the componen
            return import(`@/features/sobre-mi/components/pages/${file}`)
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