import { Fira_Code } from "next/font/google";
import { cn } from "@/lib/utils";
import { getProjectsByFilter } from "@/features/sidebar-items/actions/getProjectsByFilter";
import TrabajosList from "@/features/trabajos/components/TrabajosList";
import { Suspense } from "react";

const firaCode = Fira_Code({ weight: "400", subsets: ["latin"] });

type TrabajosPageProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

async function TrabajosPage({ searchParams }: TrabajosPageProps) {
  const { filter } = await searchParams;
  const projectPromise = getProjectsByFilter(filter ? filter.split(",") : []);

  return (
    <div
      className={cn(
        firaCode.className,
        "motion-preset-fade-md flex items-start gap-4 p-4 xl:p-20 w-full"
      )}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <TrabajosList projectPromise={projectPromise} />
      </Suspense>
    </div>
  );
}
export default TrabajosPage;
