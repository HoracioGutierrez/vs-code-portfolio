"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { animate, AnimatePresence, motion } from "motion/react"

type TrabajosListProps = {
  projectPromise: Promise<{ error: boolean; message: string; payload: any[] }>;
};

export default function TrabajosList({ projectPromise }: TrabajosListProps) {
  const { payload: projects, error } = use(projectPromise);
  return (
    <motion.div
      className={cn(
        "items-start gap-6 p-4 xl:p-20 w-full flex flex-col sm:grid sm:grid-cols-2 2xl:grid-cols-[repeat(auto-fill,_minmax(min(100%,300px),_1fr))] grid-rows-[min-content]"
      )}
    ><AnimatePresence>
        {projects.map((project, i) => {
          return (
            <motion.div key={project.id} className="self-stretch flex flex-col gap-4 transition-all" >
              <motion.h2 className="" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }}>
                <span className="text-accent-1">Proyecto {i + 1}</span>
                <span className="text-muted-foreground">
                  {" "}
                  {"//"}_{project.title}
                </span>
              </motion.h2>
              <motion.article className="w-full border border-secondary rounded-2xl grow flex flex-col" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}>
                <div className="rounded-t-2xl overflow-hidden group">
                  <Image
                    src={
                      `/images/trabajos/${project.thumbnail}` ||
                      "/images/thumbnail.png"
                    }
                    alt={project.title}
                    width={370}
                    height={370}
                    className="rounded-md object-cover w-full max-h-[150px] object-top group-hover:scale-125 transition-all grayscale-35 group-hover:grayscale-0"
                  />
                </div>
                <div className="p-7 pt-4 flex flex-col justify-between grow">
                  <p className="line-clamp-3 text-sm text-muted-foreground mb-4">
                    {project.subtitle}
                  </p>
                  <Link
                    href={`/trabajos/${project.slug}`}
                    className="!text-sm !bg-muted-foreground/30 !py-2.5 !px-3 !rounded-lg !w-fit !cursor-pointer"
                  >
                    ver-proyecto
                  </Link>
                </div>
              </motion.article>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}
