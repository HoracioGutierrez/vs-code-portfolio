import { motion } from "motion/react";
import ContainerWithBorder from "./ContainerWithBorder";
import {
  GithubIcon,
  InstagramIcon,
  LucideGithub,
  TwitterIcon,
} from "lucide-react";
import { Fira_Code } from "next/font/google";
import { cn } from "@/lib/utils";
import MainEditorSocials from "./MainEditorSocials";
import Link from "next/link";

const firaCode = Fira_Code({ weight: "400", subsets: ["latin"] });

type MainEditorFooterProps = {
  ref: any;
};
function MainEditorFooter({ ref }: MainEditorFooterProps) {
  return (
    <motion.footer
      ref={ref}
      className={cn(
        firaCode.className,
        "border-t border-muted-foreground/50 flex"
      )}
      style={{ gridColumn: "1/-1" }}
    >
      <ContainerWithBorder
        variant="right"
        className="px-3 lg:px-5.5 py-3 text-muted-foreground"
        as="p"
      >
        Encontrame en:
      </ContainerWithBorder>
      <MainEditorSocials />
      <ContainerWithBorder
        variant="left"
        className="px-3 lg:px-5.5 py-3 text-muted-foreground ml-auto flex items-center gap-2  transition-[width]"
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
    </motion.footer>
  );
}
export default MainEditorFooter;
