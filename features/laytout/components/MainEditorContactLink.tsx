"use client";

import Link from "next/link";
import ContainerWithBorder from "./ContainerWithBorder";
import { useMedia } from "react-use";

function MainEditorContactLink() {
  const isVisible = useMedia("(min-width: 1024px)", false);

  if (!isVisible) return null;

  return (
    <ContainerWithBorder
      variant="bottom-left"
      className="hidden lg:flex ml-auto px-4 lg:px-5.5 py-4"
    >
      <Link href="/contacto" className="text-muted-foreground">
        _contacto
      </Link>
    </ContainerWithBorder>
  );
}
export default MainEditorContactLink;
