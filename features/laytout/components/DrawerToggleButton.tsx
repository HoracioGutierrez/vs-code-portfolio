"use client"
import { Menu, X } from "lucide-react"
import { useLayout } from "../stores/useLayout"
import { cn } from "@/lib/utils"
import { useAnimate } from "motion/react"
import ContainerWithBorder from "./ContainerWithBorder"

function DrawerToggleButton() {

  const { setDrawerOpen, drawerOpen }: any = useLayout()
  const [menu, animateMenu] = useAnimate();
  const [x, animateX] = useAnimate();

  const toggleDrawer = () => {

    const newDrawerState = !drawerOpen

    setDrawerOpen(newDrawerState)

    if (newDrawerState) {
      animateX(x.current, { opacity: 1, rotate: 0 })
      animateMenu(menu.current, { opacity: 0, rotate: 180 })
    } else {
      animateX(x.current, { opacity: 0, rotate: 180 })
      animateMenu(menu.current, { opacity: 1, rotate: 0 })
    }
  }

  return (
    <ContainerWithBorder
      className="relative lg:hidden grid place-items-center justify-items-end cursor-pointer"
      style={{ gridColumn: "3/4" }}
      variant="bottom"
    >
      <Menu
        ref={menu}
        onClick={toggleDrawer}
        className={cn("self-center mr-4 text-muted-foreground lg:hidden")}
      />
      <X
        ref={x}
        onClick={toggleDrawer}
        className={cn("self-center ml-auto mr-4 text-muted-foreground lg:hidden absolute opacity-0")}
      />
    </ContainerWithBorder>
  )
}
export default DrawerToggleButton