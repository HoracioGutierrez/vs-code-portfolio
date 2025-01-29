import ContainerWithBorder from "@/features/laytout/components/ContainerWithBorder";
import MainCategoryLink from "@/features/sobre-mi/components/MainCategoryLink";
import { Gamepad, SquareTerminal, User } from "lucide-react";
import Link from "next/link";

export default function SobreMiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="motion-preset-fade-md flex grow">
      <ContainerWithBorder variant="right" className="flex flex-col">
        <MainCategoryLink href="/sobre-mi/profesional/experiencia/experiencia">
          <SquareTerminal />
        </MainCategoryLink>
        <MainCategoryLink href="/sobre-mi/personal/bio/bio">
          <User />
        </MainCategoryLink>
        <MainCategoryLink href="/sobre-mi/hobbies/juegos/video-juegos">
          <Gamepad />
        </MainCategoryLink>
      </ContainerWithBorder>
      {children}
    </div>
  )

}