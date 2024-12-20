import { motion } from "motion/react"
import ContainerWithBorder from "./ContainerWithBorder"
import { GithubIcon, InstagramIcon, LucideGithub, TwitterIcon } from "lucide-react"
import { Fira_Code } from "next/font/google"
import { cn } from "@/lib/utils"
import MainEditorSocials from "./MainEditorSocials"

const firaCode = Fira_Code({ weight: "400", subsets: ["latin"] })

type MainEditorFooterProps = {
  ref: any
}
function MainEditorFooter({ ref }: MainEditorFooterProps) {
  return (
    <motion.footer
      ref={ref}
      initial={{ display: "none", opacity: 0 }}
      className={cn(firaCode.className, "border-t border-muted-foreground flex")}
    >
      <ContainerWithBorder variant="right" className="px-4 lg:px-5.5 py-4 text-muted-foreground" as="p">
        Encontrame en:
      </ContainerWithBorder>
      <MainEditorSocials />
      <ContainerWithBorder variant="left" className="px-4 lg:px-5.5 py-4 text-muted-foreground ml-auto flex items-center gap-2 -motion-translate-x-in-25" as="p">
        @horaciogutierrez
          <LucideGithub className="size-4"/>
      </ContainerWithBorder>
    </motion.footer>
  )
}
export default MainEditorFooter