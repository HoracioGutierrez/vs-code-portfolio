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
        "overflow-hidden opacity-0 bg-primary pointer-events-none z-50 transition-all duration-300 col-start-1 -col-end-1 row-start-2 -row-end-1",
        drawerOpen && "backdrop-blur-3xl opacity-100 pointer-events-auto ",
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
