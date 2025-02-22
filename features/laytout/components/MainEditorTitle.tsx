"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useMedia } from "react-use";

function MainEditorTitle() {
  const path = usePathname();
  const isSmallScreen = useMedia("(max-width: 1024px)", false);
  const isAboutPage = path.includes("sobre-mi");

  useEffect(() => {
    handleResize();
  }, [isSmallScreen, isAboutPage]);

  function handleResize() {
    if (isAboutPage && isSmallScreen) {
      document.documentElement.style.setProperty(
        "--grid-cols-def",
        "max-content 1fr max-content"
      );
    }

    if (isAboutPage && !isSmallScreen) {
      document.documentElement.style.setProperty(
        "--grid-cols-def",
        "60px 240px 1fr max-content"
      );
    }

    if (!isAboutPage && !isSmallScreen) {
      document.documentElement.style.setProperty(
        "--grid-cols-def",
        "300px 1fr max-content"
      );
    }

    if (!isAboutPage && isSmallScreen) {
      document.documentElement.style.setProperty(
        "--grid-cols-def",
        "max-content 1fr max-content"
      );
    }

    if (isSmallScreen) {
      document.documentElement.style.setProperty(
        "--grid-rows-def",
        "max-content auto 1fr max-content"
      );
    }

    if (!isSmallScreen) {
      document.documentElement.style.setProperty(
        "--grid-rows-def",
        "max-content 1fr max-content"
      );
    }
  }

  return (
    <h1
      className={cn(
        "text-muted-foreground p-4 border-r border-b border-muted-foreground/50",
        isAboutPage && !isSmallScreen && "col-start-1 col-end-3"
      )}
    >
      horacio-gutierrez
    </h1>
  );
}
export default MainEditorTitle;
