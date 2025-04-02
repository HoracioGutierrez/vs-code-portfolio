import MainEditorPageTitle from "@/components/layout/main-editor-page-title"
import * as motion from "motion/react-client"
import Link from "next/link"

function SobreMiPage() {
    const containerVariants = {
        hide: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
        exit: { opacity: 0 }
    };

    const childVariants = {
        hide: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    }

    return (
        <motion.div initial="hide" animate="show" exit="exit" className="flex flex-col p-8 grow" variants={containerVariants}>
            <MainEditorPageTitle title="Sobre mi" shouldDelay />

            <motion.div className="flex flex-col gap-6 mt-4 lg:flex-row" variants={childVariants}>
                <motion.div variants={childVariants} className="p-4 w-full rounded-md border border-muted-foreground/50 bg-primary/20">
                    <motion.p className="mb-2 text-sm text-muted-foreground">{`// bienvenido a mi perfil`}</motion.p>
                    <motion.p className="flex flex-wrap gap-2 text-sm">
                        <span className="text-accent-1">const</span>
                        <span className="text-accent-2">developer</span>
                        <span>=</span>
                        <span className="text-accent-3">{`{
                        nombre: "Horacio Gutierrez",
                        rol: "Full-stack Developer",
                        ubicacion: "Argentina"
                        }`}</span>
                    </motion.p>
                </motion.div>

                <motion.div variants={childVariants} className="p-4 w-full rounded-md border border-muted-foreground/50 bg-primary/20">
                    <motion.p className="mb-2 text-sm text-muted-foreground">{`// explora mis secciones`}</motion.p>
                    <motion.div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Link href="/sobre-mi/experiencia" className="p-3 rounded-md border transition-colors border-muted-foreground/50 hover:bg-accent-1/10">
                            <p className="text-sm text-accent-1">→ experiencia.js</p>
                            <p className="text-xs text-muted-foreground">Mi trayectoria profesional</p>
                        </Link>
                        <Link href="/sobre-mi/education" className="p-3 rounded-md border transition-colors border-muted-foreground/50 hover:bg-accent-1/10">
                            <p className="text-sm text-accent-1">→ education.js</p>
                            <p className="text-xs text-muted-foreground">Mi formación académica</p>
                        </Link>
                        <Link href="/sobre-mi/hobbies" className="p-3 rounded-md border transition-colors border-muted-foreground/50 hover:bg-accent-1/10">
                            <p className="text-sm text-accent-1">→ hobbies.js</p>
                            <p className="text-xs text-muted-foreground">Lo que hago en mi tiempo libre</p>
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
export default SobreMiPage