import ContainerWithBorder from "@/features/laytout/components/ContainerWithBorder";
import { Gamepad, SquareTerminal, User } from "lucide-react";
import Link from "next/link";

export default function SobreMiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="motion-preset-fade-md flex grow">
      <ContainerWithBorder variant="right" className="flex flex-col">
        <Link href="/sobre-mi/profesional" className="p-4 text-muted-foreground hover:text-white">
          <SquareTerminal />
        </Link>
        <Link href="/sobre-mi/personal" className="p-4 text-muted-foreground hover:text-white">
          <User />
        </Link>
        <Link href="/sobre-mi/hobbies" className="p-4 text-muted-foreground hover:text-white">
          <Gamepad />
        </Link>
      </ContainerWithBorder>
      {children}
    </div>
  )

}