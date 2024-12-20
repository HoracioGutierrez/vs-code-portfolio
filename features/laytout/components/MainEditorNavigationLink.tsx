"use client"

import Link from "next/link"
import ContainerWithBorder from "./ContainerWithBorder"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useAnimate } from "motion/react"
import { useEffect } from "react"

type MainEditorNavigationLinkProps = {
  link: {
    id: number
    label: string
    href: string
  }
}

function MainEditorNavigationLink({ link }: MainEditorNavigationLinkProps) {

  const path = usePathname()
  const [scope, animate] = useAnimate();

  useEffect(() => {
    initialAnimation()
  }, [])

  const initialAnimation = async () => {
    await animate(scope.current, { x: -100, opacity: 0 })
    await animate(scope.current, { x: 0, opacity: 1 }, { delay: link.id * 0.1 })
  }

  return (
    <ContainerWithBorder
      ref={scope}
      variant="right"
      className="flex"
    >
      <Link
        href={link.href}
        className={cn(
          "px-8 grid place-content-center text-muted-foreground transition-all",
          path === link.href && "text-foreground border-b-3 border-b-accent"
        )}>
        {link.label}
      </Link>
    </ContainerWithBorder>
  )
}
export default MainEditorNavigationLink