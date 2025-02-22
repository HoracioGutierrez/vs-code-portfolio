"use client";
import { cn } from "@/lib/utils";
import { links } from "../lib/utils";
import MainEditorDrawerLink from "./MainEditorDrawerLink";
import { useLayout } from "../stores/useLayout";
import { AnimatePresence } from "motion/react";

function MainEditorDrawer() {
  const { drawerOpen }: any = useLayout();

  return (
    <nav
      className={cn(
        "overflow-hidden opacity-0 bg-primary pointer-events-none fixed top-17 md:top-23 left-2 md:left-8 w-[calc(100%_-_1rem)] md:w-[calc(100%_-_4rem)] h-full z-50 transition-all duration-300",
        drawerOpen && "backdrop-blur-3xl opacity-100 pointer-events-auto",
        "lg:opacity-0 lg:pointer-events-none"
      )}
    >
      <AnimatePresence>
        {drawerOpen &&
          links.map((link) => {
            return <MainEditorDrawerLink key={link.id} link={link} />;
          })}
        {drawerOpen && (
          <MainEditorDrawerLink
            link={{ id: 4, label: "_contacto", href: "/contacto" }}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
export default MainEditorDrawer;
