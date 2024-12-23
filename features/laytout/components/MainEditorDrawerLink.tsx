import { useAnimate } from "motion/react"
import ContainerWithBorder from "./ContainerWithBorder"
import { useEffect } from "react"
import { delay, stagger } from "motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

type MainEditorDrawerLinkProps = {
  link: {
    id: number
    label: string
    href: string
  }
}

function MainEditorDrawerLink({ link }: MainEditorDrawerLinkProps) {

  return (
    <ContainerWithBorder
      variant="bottom"
      key={link.id}
      className=" text-muted-foreground"
      initial={{ opacity: 0, y: 100, }}
      animate={{ opacity: 1, y: 0, transition: { delay: link.id * 0.1 } }}
      exit={{ opacity: 0, y: -100, transition: { delay: link.id * 0.1 } }}
    >
      <Link
        href={link.href}
        className={cn(
          "text-muted-foreground transition-all py-4 px-4 block hover:text-white",
        )}>
        {link.label}
      </Link>
    </ContainerWithBorder>
  )
}
export default MainEditorDrawerLink