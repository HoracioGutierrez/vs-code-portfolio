import AnimatedTextContainer from "@/components/home/animated-text-container";
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
        <motion.div initial="hide" animate="show" className="grid gap-8 p-3 lg:p-6 lg:grid-cols-2 grow xl:gap-20" variants={containerVariants}>
            <div className="flex flex-col gap-16 justify-self-center self-end lg:self-center xl:justify-self-end w-fit items-start lg:items-end xl:items-start">
                <div className="">
                    <motion.p variants={childVariants} className="text-sm lg:text-base transition-[font-size]">Hola, soy</motion.p>
                    <motion.h1 variants={childVariants} className="text-4xl xl:text-6xl transition-[font-size]">
                        Horacio Gutierrez
                    </motion.h1>
                    {/* <motion.p variants={childVariants} className="text-xl lg:text-3xl text-accent-1 font-bold transition-[font-size]">{`> Full-stack Developer`}</motion.p> */}
                    <AnimatedTextContainer />
                </div>
                <div className="">
                    {/* <motion.p className="text-sm text-muted-foreground lg:text-base" variants={childVariants}>{`// complete el juego para continuar`}</motion.p> */}
                    <motion.p className="text-sm text-muted-foreground lg:text-base w-fit" variants={childVariants}>{`// podes ir a ver el código a`}</motion.p>
                    <motion.p className="flex flex-wrap gap-2 text-sm lg:text-base w-full md:w-fit md:max-w-[396px] xl:max-w-full" variants={childVariants}>
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
            <div className="relative flex justify-center lg:justify-start overflow-hidden">
                <svg width="864" height="784" viewBox="0 0 864 784" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full animate-spin duration-[10s]">
                    <g opacity="0.4" filter="url(#filter0_f_64_1236)">
                        <path d="M673.469 258.482L689.984 477.861L655.759 582.726L485.295 609.598L413.003 448.57L297.588 487.343L184.059 311.368L174 177.746L452.567 174.828L523.099 285.846L673.469 258.482Z" fill="#43D9AD" />
                    </g>
                    <defs>
                        <filter id="filter0_f_64_1236" x="0" y="0.827728" width="863.983" height="782.77" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="87" result="effect1_foregroundBlur_64_1236" />
                        </filter>
                    </defs>
                </svg>
                <svg width="868" height="831" viewBox="0 0 868 831" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full animate-spin duration-[10s] direction-alternate-reverse">
                    <g opacity="0.4" filter="url(#filter0_f_64_1235)">
                        <path d="M477.946 656.519L264.032 605.132L174.663 540.469L201.226 369.957L376.649 350.391L375.041 228.647L577.309 174.392L707.602 205.691L625.165 471.797L497.892 504.987L477.946 656.519Z" fill="#4D5BCE" />
                    </g>
                    <defs>
                        <filter id="filter0_f_64_1235" x="0.663574" y="0.391769" width="880.938" height="830.128" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="87" result="effect1_foregroundBlur_64_1235" />
                        </filter>
                    </defs>
                </svg>

                <div className="max-w-[480px] lg:max-w-[600px] w-full justify-self-center  xl:justify-self-start flex flex-col gap-2 max-h-[400px] relative lg:self-center self-start">


                    <HomeGame />
                </div>
            </div>
        </motion.div>
    )
}
export default HomePage