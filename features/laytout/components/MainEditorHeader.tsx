import { cn } from "@/lib/utils"
import { Fira_Code } from "next/font/google"
import MainEditorNavigation from "./MainEditorNavigation"
import { motion } from "motion/react"
import { Menu } from "lucide-react"
import ContainerWithBorder from "./ContainerWithBorder"

const firaCode = Fira_Code({ weight: "400", subsets: ["latin"] })

type MainEditorHeaderProps = {
  ref: any
}

function MainEditorHeader({ ref }: MainEditorHeaderProps) {
  return (
    <motion.header
      ref={ref}
      initial={{ display: "none", opacity: 0 }}
      className={cn(firaCode.className, "border-b border-muted-foreground flex")}
    >
      <h1 className="text-muted-foreground pl-4 lg:pl-5.5 py-4 transition-all border-r border-muted-foreground pr-39">horacio-gutierrez</h1>
      <MainEditorNavigation />
      <Menu className="self-center ml-auto mr-4 text-muted-foreground -motion-translate-x-in-100 lg:hidden" />
      <ContainerWithBorder variant="left" className="hidden lg:flex ml-auto px-4 lg:px-5.5 py-4 -motion-translate-x-in-25">
        <p className="text-muted-foreground">_contacto</p>
      </ContainerWithBorder>
    </motion.header>
  )
}
export default MainEditorHeader