"use client";
import ContainerWithBorder from "./ContainerWithBorder";
import MainEditorNavigationLink from "./MainEditorNavigationLink";
import { useMedia } from "react-use";
import { links } from "../lib/utils";

function MainEditorNavigation() {
  const isVisible = useMedia("(min-width: 1024px)", false);

  if (!isVisible) return null;

  return (
    <ContainerWithBorder variant="bottom" as="nav" className="flex">
      {links.map((link) => (
        <MainEditorNavigationLink key={link.label} link={link} />
      ))}
    </ContainerWithBorder>
  );
}
export default MainEditorNavigation;
