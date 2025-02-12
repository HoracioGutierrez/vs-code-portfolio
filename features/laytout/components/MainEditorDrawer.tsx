"use client"
import { cn } from "@/lib/utils"
import { links } from "../lib/utils"
import { Fira_Code } from "next/font/google"
import MainEditorDrawerLink from "./MainEditorDrawerLink"
import { useLayout } from "../stores/useLayout"
import { AnimatePresence } from "motion/react"

const firaCode = Fira_Code({ weight: "400", subsets: ["latin"] })

function MainEditorDrawer() {

  const { drawerOpen }: any = useLayout()

  return (
    <nav
      className={cn(firaCode.className, "overflow-hidden opacity-0 bg-primary pointer-events-none", drawerOpen && "backdrop-blur-3xl opacity-100 pointer-events-auto")}
      style={{
        gridColumn: "1/-1",
        gridRow: "2/4",
      }}
    >
      <AnimatePresence>
        {drawerOpen && (
          links.map((link) => {
            return (
              <MainEditorDrawerLink key={link.id} link={link} />
            )
          })
        )}
        <MainEditorDrawerLink link={{ id: 4, label: "_contacto", href: "/contacto" }} />
      </AnimatePresence>
    </nav>
  )
}
export default MainEditorDrawer