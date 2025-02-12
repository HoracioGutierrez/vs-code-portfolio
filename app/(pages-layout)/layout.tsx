"use client";
import ContainerWithBorder from "@/features/laytout/components/ContainerWithBorder";
import MainCategoryLink from "@/features/sobre-mi/components/MainCategoryLink";
import { cn } from "@/lib/utils";
import * as Accordion from "@radix-ui/react-accordion";
import { Gamepad, SquareTerminal, Triangle, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { lazy, Suspense } from "react";

const DynamicComponent = ({ file }: { file: string }) => {
  const Component = lazy(
    () => import(`@/features/sidebar-items/components/${file}`)
  );
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

type SidebarItem = {
  title: string;
  itemsFile: string;
};

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const mainPath = pathname.split("/")[1];
  const folderPath = pathname.split("/")[2];

  const sidebarItems: { [key: string]: SidebarItem[] } = {
    trabajos: [{ title: "trabajos", itemsFile: "trabajos" }],
    contacto: [
      { title: "contacto", itemsFile: "contacto" },
      { title: "encontrame-tambien-en", itemsFile: "encontrame-tambien-en" },
    ],
    "sobre-mi": [
      { title: "sobre-mi", itemsFile: "sobre-mi" },
      { title: "contacto", itemsFile: "contacto" },
    ],
  };

  const selectedSidebarItem = sidebarItems[mainPath];

  return (
    <>
      {pathname.includes("sobre-mi") && (
        <ContainerWithBorder
          variant="right"
          className="flex md:flex-col"
          style={{ gridColumn: "1/2", gridRow: "2/3", gridArea: "tinysidebar" }}
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
      )}
      <ContainerWithBorder
        className={cn(
          "w-full row-start-2 row-end-3",
          pathname.includes("sobre-mi")
            ? "col-start-1 md:col-start-2 col-end-4 row-start-3 row-end-4 md:row-start-2 md:row-end-3"
            : "col-start-1 col-end-4 md:col-end-3 "
        )}
        variant="right"
      >
        <Accordion.Root
          type="single"
          className="AccordionRootLayout"
          defaultValue={mainPath}
          collapsible
          id="accordion-root"
        >
          {selectedSidebarItem.map((item: SidebarItem) => {
            return (
              <Accordion.Item
                value={item.title}
                className="AccordionItem"
                key={item.title}
              >
                <Accordion.Header>
                  <Accordion.Trigger className="AccordionTrigger" asChild>
                    <ContainerWithBorder
                      variant="bottom"
                      className="justify-start gap-2 text-muted-foreground hover:text-white p-3"
                    >
                      <Triangle className="AccordionChevron transition-all rotate-180 size-2 fill-muted-foreground hover:text-white" />
                      <span>
                        {item.title}{" "}
                        {item.title !== "contacto" &&
                          folderPath &&
                          `/_${folderPath}`}
                      </span>
                    </ContainerWithBorder>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="AccordionContent">
                  <ContainerWithBorder variant="bottom" className="p-4">
                    {item.itemsFile && (
                      <DynamicComponent file={item.itemsFile} />
                    )}
                  </ContainerWithBorder>
                </Accordion.Content>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>
      </ContainerWithBorder>
      <div
        className="motion-preset-fade-md flex grow"
        style={{ gridColumn: "3/-1", gridRow: "2/-2", gridArea: "content" }}
      >
        {children}
      </div>
    </>
  );
}
