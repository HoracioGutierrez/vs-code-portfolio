"use client"

import useProjectsStore from "@/features/sidebar-items/stores/useProjectsStore"
import Image from "next/image"
import { Fira_Code } from "next/font/google"
import { cn } from "@/lib/utils"

const firaCode = Fira_Code({ weight: "400", subsets: ["latin"] })

function TrabajosPage() {

  const { projects } = useProjectsStore()

  return (
    <div className={cn(firaCode.className, "motion-preset-fade-md flex items-start gap-4 p-4 xl:p-20 w-full")}>
      {projects.map((project, i) => {
        return (
          <div key={project.id}>
            <h2 className="mb-4">
              <span className="text-accent-1">Proyecto {i + 1}</span>
              <span className="text-muted-foreground"> //_{project.title}</span>
            </h2>
            <article className="w-full max-w-[370px] border border-secondary rounded-2xl">
              <Image
                src={project.thumbnail || "/images/thumbnail.png"}
                alt={project.title}
                width={370}
                height={370}
                className="rounded-md"
              />
              <div className="p-7 pt-4">
                <p className="line-clamp-3 text-sm text-muted-foreground mb-4">{project.description}</p>
                <button className="!text-sm !bg-muted-foreground/30 !py-2.5 !px-3 !rounded-lg !w-fit !cursor-pointer">ver-proyecto</button>
              </div>
            </article>
          </div>
        )
      })}
    </div>
  )
}
export default TrabajosPage