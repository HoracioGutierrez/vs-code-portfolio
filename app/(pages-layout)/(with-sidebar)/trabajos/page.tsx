import { cn } from "@/lib/utils";
import { getProjectsByFilter } from "@/features/sidebar-items/actions/getProjectsByFilter";
import TrabajosList from "@/features/trabajos/components/TrabajosList";
import { Suspense } from "react";

type TrabajosPageProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

async function TrabajosPage({ searchParams }: TrabajosPageProps) {
  const { filter } = await searchParams;
  const projectPromise = getProjectsByFilter(filter ? filter.split(",") : []);

  return (
    <div
      className={cn(
        "items-start gap-6 p-4 xl:p-20 w-full flex flex-col sm:grid sm:grid-cols-2 2xl:grid-cols-[repeat(auto-fill,_minmax(min(100%,300px),_1fr))]"
      )}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <TrabajosList projectPromise={projectPromise} />
      </Suspense>
    </div>
  );
}
export default TrabajosPage;
