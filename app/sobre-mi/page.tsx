import MainEditorPageTitle from "@/components/layout/main-editor-page-title"
import * as motion from "motion/react-client"
import Link from "next/link"

function SobreMiPage() {
    const containerVariants = {
        hide: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.3 } },
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

            <motion.div variants={childVariants}>
                <motion.div className="flex flex-col gap-6 mt-4 lg:flex-row" initial="hide" animate="show" variants={{ show: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } } }}>
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
                        <motion.div className="grid grid-cols-1 gap-4 md:grid-cols-2" initial="hide" animate="show" variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } } }}>

                            <motion.div variants={{ hide: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }} className="p-3 rounded-md border transition-colors border-muted-foreground/50 hover:bg-accent-1/10">
                                <motion.div whileHover="hover">
                                    <Link href="/sobre-mi/experiencia" >
                                        <p className="text-sm text-accent-1">
                                            <motion.span
                                                className="inline-block"
                                                initial={{ opacity: 0, scaleX: 0, width: 0 }}
                                                variants={{
                                                    hover: { opacity: 1, scaleX: 1, width: 25, transition: { type: "spring", duration: 0.4 } }
                                                }}
                                            >→ </motion.span>experiencia.js</p>
                                        <p className="text-xs text-muted-foreground">Mi trayectoria profesional</p>
                                    </Link>
                                </motion.div>
                            </motion.div>
                            <motion.div variants={{ hide: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }} className="p-3 rounded-md border transition-colors border-muted-foreground/50 hover:bg-accent-1/10">
                                <motion.div whileHover="hover">
                                    <Link href="/sobre-mi/education" >
                                        <p className="text-sm text-accent-1">
                                            <motion.span
                                                className="inline-block"
                                                initial={{ opacity: 0, scaleX: 0, width: 0 }}
                                                variants={{
                                                    hover: { opacity: 1, scaleX: 1, width: 25, transition: { type: "spring", duration: 0.4 } }
                                                }}
                                            >→ </motion.span>education.js</p>
                                        <p className="text-xs text-muted-foreground">Mi formación académica</p>
                                    </Link>
                                </motion.div>
                            </motion.div>
                            <motion.div variants={{ hide: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }} className="p-3 rounded-md border transition-colors border-muted-foreground/50 hover:bg-accent-1/10">
                                <motion.div whileHover="hover">
                                    <Link href="/sobre-mi/hobbies" >
                                        <p className="text-sm transition-all text-accent-1">
                                            <motion.span
                                                className="inline-block"
                                                initial={{ opacity: 0, scaleX: 0, width: 0 }}
                                                variants={{
                                                    hover: { opacity: 1, scaleX: 1, width: 25, transition: { type: "spring", duration: 0.4 } }
                                                }}
                                            >→&nbsp;</motion.span>
                                            <span className="transition-all duration-300">hobbies.js</span>
                                        </p>
                                        <p className="text-xs text-muted-foreground">Lo que hago en mi tiempo libre</p>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div >
                </motion.div>
            </motion.div >
        </motion.div >
    )
}
export default SobreMiPage