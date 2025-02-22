"use client";

import ContainerWithBorder from "./ContainerWithBorder";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLayout } from "../stores/useLayout";

type MainEditorDrawerLinkProps = {
  link: {
    id: number;
    label: string;
    href: string;
  };
};

function MainEditorDrawerLink({ link }: MainEditorDrawerLinkProps) {
  const { setDrawerOpen }: any = useLayout();

  const handleClick = () => {
    setDrawerOpen(false);
  };

  return (
    <ContainerWithBorder
      variant="bottom"
      className=" text-muted-foreground"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { delay: link.id * 0.1 } }}
      exit={{ opacity: 0, transition: { delay: link.id * 0.1 } }}
    >
      <Link
        href={link.href}
        onClick={handleClick}
        className={cn(
          "text-muted-foreground transition-all py-4 px-4 block hover:text-white"
        )}
      >
        {link.label}
      </Link>
    </ContainerWithBorder>
  );
}
export default MainEditorDrawerLink;
