"use client";
import ContainerWithBorder from "./ContainerWithBorder";
import { LucideGithub } from "lucide-react";
import { cn } from "@/lib/utils";
import MainEditorSocials from "./MainEditorSocials";
import Link from "next/link";
import { useMedia } from "react-use";
import { usePathname } from "next/navigation";

function MainEditorFooter() {
  const isSmallScreen = useMedia("(max-width: 1024px)", false);
  const path = usePathname();
  const isAboutPage = path.includes("sobre-mi");

  return (
    <footer className={cn("border-t border-muted-foreground/50 contents")}>
      <div
        className={cn(
          "flex items-center",
          isSmallScreen && isAboutPage && "col-start-1 col-end-2",
          !isSmallScreen && isAboutPage && "col-start-1 col-end-3",
          isSmallScreen && !isAboutPage && "col-start-1 col-end-2",
          !isSmallScreen && !isAboutPage && "col-start-1 col-end-2"
        )}
      >
        <ContainerWithBorder
          variant="right"
          className="p-4 lg:px-5.5  text-muted-foreground text-sm border-t w-full"
          as="p"
        >
          Encontrame en:
        </ContainerWithBorder>
        <MainEditorSocials />
      </div>
      <ContainerWithBorder
        variant="top-left"
        className="px-3 lg:px-5.5 py-3 text-muted-foreground ml-auto flex items-center gap-2  transition-[width] -col-start-3 -col-end-1"
        as="p"
      >
        <Link
          href="https://github.com/HoracioGutierrez"
          target="_blank"
          className="flex items-center gap-2"
        >
          <span className="hidden lg:inline">@horaciogutierrez</span>
          <LucideGithub className="size-4" />
        </Link>
      </ContainerWithBorder>
    </footer>
  );
}
export default MainEditorFooter;
