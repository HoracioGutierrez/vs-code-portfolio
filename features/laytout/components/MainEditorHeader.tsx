import { cn } from "@/lib/utils"
import { Fira_Code } from "next/font/google"
import MainEditorNavigation from "./MainEditorNavigation"
import { motion } from "motion/react"
import ContainerWithBorder from "./ContainerWithBorder"
import DrawerToggleButton from "./DrawerToggleButton"
import Link from "next/link"

const firaCode = Fira_Code({ weight: "400", subsets: ["latin"] })

type MainEditorHeaderProps = {
  ref: any
}

function MainEditorHeader({ ref }: MainEditorHeaderProps) {
  return (
    <motion.header
      /* ref={ref} */
      /* initial={{ display: "none", opacity: 0 }} */
      /* className={cn(firaCode.className, "border-b border-muted-foreground flex ")} */
      className={cn(firaCode.className, "border-b border-muted-foreground/50 contents")}
    >
      <h1 className="text-muted-foreground pl-4 lg:pl-5.5 py-4 transition-all border-r border-b-1 border-muted-foreground/50 pr-30 lg:pr-39" style={{ gridArea: "title" }}>horacio-gutierrez</h1>
      <MainEditorNavigation />
      <DrawerToggleButton />
      <ContainerWithBorder variant="bottom-left" className="hidden lg:flex ml-auto px-4 lg:px-5.5 py-4 -motion-translate-x-in-25" style={{ gridArea: "header-cta" }}>
        <Link href="/contacto" className="text-muted-foreground">_contacto</Link>
      </ContainerWithBorder>
    </motion.header>
  )
}
export default MainEditorHeader