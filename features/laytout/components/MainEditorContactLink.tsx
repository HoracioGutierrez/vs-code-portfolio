"use client";

import Link from "next/link";
import ContainerWithBorder from "./ContainerWithBorder";
import { useMedia } from "react-use";
import { forwardRef } from "react";
import { motion } from "motion/react"

function MainEditorContactLink() {
  const isVisible = useMedia("(min-width: 1024px)", false);

  if (!isVisible) return null;

  const MotionNextLink = forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<typeof Link>>((props, ref) => {
    return (
      <Link {...props} ref={ref} />
    )
  })

  return (
    <ContainerWithBorder
      variant="bottom-left"
      className="hidden lg:flex ml-auto px-4 lg:px-5.5 py-4"
    >
      <MotionNextLink href="/contacto" className="text-muted-foreground">
        <motion.span variants={{ tap: { scale: 0.85, color: "#FEA55F" } }}>
          _contacto
        </motion.span>
      </MotionNextLink>
    </ContainerWithBorder>
  );
}
export default MainEditorContactLink;
