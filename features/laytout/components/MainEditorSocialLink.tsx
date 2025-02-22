"use client";
import { useEffect } from "react";
import ContainerWithBorder from "./ContainerWithBorder";
import { useAnimate } from "motion/react";
import Link from "next/link";

type MainEditorSocialLinkProps = {
  icon: React.ReactNode;
  id: Number;
  href: string;
};

function MainEditorSocialLink({ icon, id, href }: MainEditorSocialLinkProps) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    initialAnimation();
  }, []);

  const initialAnimation = async () => {
    //await animate(scope.current, { x: -400, opacity: 0 })
    //await animate(scope.current, { x: 0, opacity: 1 }, { delay: Number(id) * 0.1 })
  };

  return (
    <ContainerWithBorder
      as="span"
      ref={scope}
      variant="top-right"
      className="px-3 lg:px-5.5 py-3 text-muted-foreground grid place-content-center h-full"
    >
      <Link href={href} target="_blank">
        {icon}
      </Link>
    </ContainerWithBorder>
  );
}
export default MainEditorSocialLink;
