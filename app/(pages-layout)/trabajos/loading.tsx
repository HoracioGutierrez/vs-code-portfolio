import { cn } from "@/lib/utils";

export default function Loading() {
  return (
    <div
      className={cn(
        "motion-preset-fade-md flex items-start gap-4 p-4 xl:p-20 w-full"
      )}
    >
      loading...
    </div>
  );
}
