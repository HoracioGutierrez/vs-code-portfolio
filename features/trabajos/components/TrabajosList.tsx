"use client";

import Image from "next/image";
import { use } from "react";

type TrabajosListProps = {
  projectPromise: Promise<{ error: boolean; message: string; payload: any[] }>;
};

export default function TrabajosList({ projectPromise }: TrabajosListProps) {
  const { payload: projects, error } = use(projectPromise);

  return (
    <>
      {projects.map((project, i) => {
        return (
          <div key={project.id}>
            <h2 className="mb-4">
              <span className="text-accent-1">Proyecto {i + 1}</span>
              <span className="text-muted-foreground">
                {" "}
                {"//"}_{project.title}
              </span>
            </h2>
            <article className="w-full border border-secondary rounded-2xl">
              <div className="rounded-t-2xl overflow-hidden">
                <Image
                  src={project.thumbnail || "/images/thumbnail.png"}
                  alt={project.title}
                  width={370}
                  height={370}
                  className="rounded-md object-cover w-full max-h-[150px]"
                />
              </div>
              <div className="p-7 pt-4">
                <p className="line-clamp-3 text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <button className="!text-sm !bg-muted-foreground/30 !py-2.5 !px-3 !rounded-lg !w-fit !cursor-pointer">
                  ver-proyecto
                </button>
              </div>
            </article>
          </div>
        );
      })}
    </>
  );
}
