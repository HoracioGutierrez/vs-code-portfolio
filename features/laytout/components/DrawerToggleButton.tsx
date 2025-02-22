"use client";
import { Menu, X } from "lucide-react";
import { useLayout } from "../stores/useLayout";
import { cn } from "@/lib/utils";
import { useAnimate } from "motion/react";
import ContainerWithBorder from "./ContainerWithBorder";
import { useMedia } from "react-use";

function DrawerToggleButton() {
  const { setDrawerOpen, drawerOpen }: any = useLayout();
  const [menu, animateMenu] = useAnimate();
  const [x, animateX] = useAnimate();
  const isVisible = useMedia("(max-width: 1024px)", false);

  const toggleDrawer = () => {
    const newDrawerState = !drawerOpen;

    setDrawerOpen(newDrawerState);

    if (newDrawerState) {
      animateX(x.current, { opacity: 1, rotate: 0 });
      animateMenu(menu.current, { opacity: 0, rotate: 180 });
    } else {
      animateX(x.current, { opacity: 0, rotate: 180 });
      animateMenu(menu.current, { opacity: 1, rotate: 0 });
    }
  };

  if (!isVisible) return null;

  return (
    <ContainerWithBorder
      className="relative grid place-items-center justify-items-end cursor-pointer col-start-3 p-4 text-muted-foreground"
      variant="bottom-left"
    >
      <Menu ref={menu} onClick={toggleDrawer} className={cn("self-center")} />
      <X
        ref={x}
        onClick={toggleDrawer}
        className={cn("self-center absolute opacity-0")}
      />
    </ContainerWithBorder>
  );
}
export default DrawerToggleButton;
