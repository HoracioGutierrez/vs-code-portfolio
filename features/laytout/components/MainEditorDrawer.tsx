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
    <nav className={cn(firaCode.className, "overflow-hidden row-start-2 row-end-3 col-start-1 col-end-2 bg-primary", drawerOpen && "backdrop-blur-3xl")}>
      <AnimatePresence>
        {drawerOpen && (
          <div></div>
        )}
        {drawerOpen && (
          links.map((link) => {
            return (
              <MainEditorDrawerLink key={link.id} link={link} />
            )
          })
        )}
      </AnimatePresence>
    </nav>
  )
}
export default MainEditorDrawer