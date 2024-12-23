import { motion } from "motion/react"
import ContainerWithBorder from "./ContainerWithBorder"
import { GithubIcon, InstagramIcon, LucideGithub, TwitterIcon } from "lucide-react"
import { Fira_Code } from "next/font/google"
import { cn } from "@/lib/utils"
import MainEditorSocials from "./MainEditorSocials"
import Link from "next/link"

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
      <ContainerWithBorder variant="right" className="px-3 lg:px-5.5 py-3 text-muted-foreground" as="p">
        Encontrame en:
      </ContainerWithBorder>
      <MainEditorSocials />
      <ContainerWithBorder variant="left" className="px-3 lg:px-5.5 py-3 text-muted-foreground ml-auto flex items-center gap-2 -motion-translate-x-in-25 transition-[width]" as="p">
        <Link href="https://github.com/HoracioGutierrez" target="_blank" className="flex items-center gap-2">
          <span className="hidden lg:inline motion-preset-slide-up-lg">
            @horaciogutierrez
          </span>
          <LucideGithub className="size-4" />
        </Link>
      </ContainerWithBorder>
    </motion.footer>
  )
}
export default MainEditorFooter