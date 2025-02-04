import { Fira_Code } from "next/font/google"
import { cn } from "@/lib/utils";

const firaCode = Fira_Code({ weight: "400", subsets: ["latin"] })


export default function SobreMiLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className={cn(firaCode.className, "motion-preset-fade-md grow text-muted-foreground contents")}>
      {children}
    </div >
  )
}