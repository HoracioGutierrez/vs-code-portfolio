"use client";
import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import Link from "next/link";

function HomePage() {


  const containerVariants = {
    hide: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const childVariants = {
    hide: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring" , bounce: 0.85, stiffness: 400, damping: 14 } },
  }

  return (
    <motion.div
      key="home"
      initial="hide"
      animate="show"
      variants={containerVariants}
      className={cn(
        "grid place-content-center col-start-1 -col-end-1 row-start-2 row-end-5"
      )}
    >
      <div className="flex flex-col gap-20 px-4">
        <div>
          <motion.p variants={childVariants} className="text-sm lg:text-base transition-[font-size]">Hola, soy</motion.p>
          <motion.h1 variants={childVariants} className="text-4xl lg:text-6xl transition-[font-size]">
            Horacio Gutierrez
          </motion.h1>
          <motion.p variants={childVariants} className="text-xl lg:text-3xl text-accent-1 font-bold transition-[font-size]">{`> Full-stack Developer`}</motion.p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm lg:text-base">{`// complete el juego para continuar`}</p>
          <p className="text-muted-foreground text-sm lg:text-base">{`// también podes ir a ver el código`}</p>
          <p className="flex gap-2 flex-wrap text-sm lg:text-base">
            <span className="text-accent-1">const</span>
            <span className="text-accent-2">githubLink</span>
            <span>=</span>
            <Link
              href="https://github.com/HoracioGutierrez"
              target="_blank"
              className="text-accent-3 break-words"
            >
              <span className="sm:hidden">&quot;https://github.com/</span>
              <br className="sm:hidden" />
              <span className="sm:hidden">HoracioGutierrez&quot;</span>
              <span className="hidden sm:inline">
                &quot;https://github.com/HoracioGutierrez&quot;
              </span>
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
export default HomePage;
