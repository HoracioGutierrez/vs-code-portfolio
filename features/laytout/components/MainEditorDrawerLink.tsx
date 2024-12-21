import { useAnimate } from "motion/react"
import ContainerWithBorder from "./ContainerWithBorder"
import { useEffect } from "react"
import { delay, stagger } from "motion"

type MainEditorDrawerLinkProps = {
  link: {
    id: number
    label: string
  }
}

function MainEditorDrawerLink({ link }: MainEditorDrawerLinkProps) {

  return (
    <ContainerWithBorder
      variant="bottom"
      key={link.id}
      className="py-4 px-4 text-muted-foreground"
      initial={{ opacity: 0, y: 100, }}
      animate={{ opacity: 1, y: 0, transition: { delay: link.id * 0.1 } }}
      exit={{ opacity: 0, y: -100, transition: { delay: link.id * 0.1 } }}
    >
      {link.label}
    </ContainerWithBorder>
  )
}
export default MainEditorDrawerLink