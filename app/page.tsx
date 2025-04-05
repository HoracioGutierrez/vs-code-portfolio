import HomeGame from "@/components/home/home-game";
import * as motion from "motion/react-client"
import Link from "next/link";

function HomePage() {

    const containerVariants = {
        show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
    };

    const childVariants = {
        hide: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <motion.div initial="hide" animate="show" className="grid gap-8 p-3 xl:grid-cols-2 grow xl:gap-20" variants={containerVariants}>
            <div className="flex flex-col gap-16 justify-self-center self-center xl:justify-self-end">
                <div>
                    <motion.p variants={childVariants} className="text-sm lg:text-base transition-[font-size]">Hola, soy</motion.p>
                    <motion.h1 variants={childVariants} className="text-4xl lg:text-6xl transition-[font-size]">
                        Horacio Gutierrez
                    </motion.h1>
                    <motion.p variants={childVariants} className="text-xl lg:text-3xl text-accent-1 font-bold transition-[font-size]">{`> Full-stack Developer`}</motion.p>
                </div>
                <div>
                    {/* <motion.p className="text-sm text-muted-foreground lg:text-base" variants={childVariants}>{`// complete el juego para continuar`}</motion.p> */}
                    <motion.p className="text-sm text-muted-foreground lg:text-base" variants={childVariants}>{`// podes ir a ver el código a`}</motion.p>
                    <motion.p className="flex flex-wrap gap-2 text-sm lg:text-base" variants={childVariants}>
                        <span className="text-accent-1">const</span>
                        <span className="text-accent-2">githubLink</span>
                        <span>=</span>
                        <Link
                            href="https://github.com/HoracioGutierrez"
                            target="_blank"
                            className="break-words text-accent-3"
                        >
                            <span className="sm:hidden">&quot;https://github.com/</span>
                            <br className="sm:hidden" />
                            <span className="sm:hidden">HoracioGutierrez&quot;</span>
                            <span className="hidden sm:inline">
                                &quot;https://github.com/HoracioGutierrez&quot;
                            </span>
                        </Link>
                    </motion.p>
                </div>
            </div>
            <div className="self-center max-w-[450px] lg:max-w-[600px] w-full justify-self-center  xl:justify-self-start flex flex-col gap-2">
                <HomeGame/>
            </div>
        </motion.div>
    )
}
export default HomePage