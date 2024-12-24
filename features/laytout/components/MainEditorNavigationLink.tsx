"use client"

import Link from "next/link"
import ContainerWithBorder from "./ContainerWithBorder"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion, useAnimate } from "motion/react"
import { forwardRef, useEffect } from "react"

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

  const currentPathStart = path.split("/")[1]
  const linkPathStart = link.href.split("/")[1]



  useEffect(() => {
    initialAnimation()
  }, [])

  const initialAnimation = async () => {
    await animate(scope.current, { x: -100, opacity: 0 })
    await animate(scope.current, { x: 0, opacity: 1 }, { delay: link.id * 0.1 })
  }

  const MotionNextLink = forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<typeof Link>>((props, ref) => {
    return (
      <Link {...props} ref={ref} />
    )
  })

  const MotionLink = motion(MotionNextLink)

  return (
    <ContainerWithBorder
      ref={scope}
      variant="right"
      className="flex"
      whileTap="tap"
    >
      <MotionLink
        href={link.href}
        className={cn(
          "px-8 grid place-content-center text-muted-foreground transition-all hover:text-white",
          currentPathStart === linkPathStart && "text-foreground border-b-3 border-b-accent"
        )}
        whileTap={{ borderBottomWidth: "10px", transition: { duration: 0.1 } }}
      >
        <motion.span variants={{ tap: { scale: 0.85, color: "#FEA55F" } }}>
          {link.label}
        </motion.span>
      </MotionLink>
    </ContainerWithBorder>
  )
}
export default MainEditorNavigationLink