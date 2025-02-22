"use client";
import ContainerWithBorder from "@/features/laytout/components/ContainerWithBorder";
import MainCategoryLink from "@/features/sobre-mi/components/MainCategoryLink";
import { Gamepad, SquareTerminal, User } from "lucide-react";
import WithSidebarLayout from "../../(with-sidebar)/layout";

export default function SobreMiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ContainerWithBorder
        variant="right"
        className="flex lg:flex-col row-start-1 row-end-2 col-start-2 col-end-3 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3"
      >
        <MainCategoryLink href="/sobre-mi/profesional">
          <SquareTerminal />
        </MainCategoryLink>
        <MainCategoryLink href="/sobre-mi/personal">
          <User />
        </MainCategoryLink>
        <MainCategoryLink href="/sobre-mi/hobbies">
          <Gamepad />
        </MainCategoryLink>
      </ContainerWithBorder>
      <WithSidebarLayout>{children}</WithSidebarLayout>
    </>
  );
}
