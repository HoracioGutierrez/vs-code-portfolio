"use client";
import ContainerWithBorder from "@/features/laytout/components/ContainerWithBorder";
import SobreMi from "@/features/sidebar-items/components/sobre-mi";
import { cn } from "@/lib/utils";
import * as Accordion from "@radix-ui/react-accordion";
import { Triangle } from "lucide-react";
import { usePathname } from "next/navigation";
import { lazy, Suspense } from "react";
import { useMedia } from "react-use";

const DynamicComponent = ({ file }: { file: string }) => {
  const Component = lazy(
    () => import(`@/features/sidebar-items/components/${file}`)
  );
  return (
    <Suspense fallback={<SobreMi />}>
      <Component />
    </Suspense>
  );
};

type SidebarItem = {
  title: string;
  itemsFile: string;
};

export default function WithSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const mainPath = pathname.split("/")[1];
  const folderPath = pathname.split("/")[2];
  const isSmallScreen = useMedia("(max-width: 1024px)", false);
  const isAboutPage = pathname.includes("sobre-mi");

  const sidebarItems: { [key: string]: SidebarItem[] } = {
    trabajos: [{ title: "trabajos", itemsFile: "trabajos" }],
    contacto: [
      { title: "contacto", itemsFile: "contacto" },
      { title: "encontrame-tambien-en", itemsFile: "encontrame-tambien-en" },
    ],
    "sobre-mi": [
      { title: "contacto", itemsFile: "contacto" },
      { title: "sobre-mi", itemsFile: "sobre-mi" },
    ],
  };

  const selectedSidebarItem = sidebarItems[mainPath];

  return (
    <>
      <ContainerWithBorder
        className={cn(
          "w-full row-start-2",
          isSmallScreen && isAboutPage && "col-start-1 -col-end-1",
          isSmallScreen && !isAboutPage && "col-start-1 -col-end-1",
          !isSmallScreen && isAboutPage && "col-start-2 -col-end-3",
          !isSmallScreen && !isAboutPage && "col-start-1 col-end-2"
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
        className={cn(
          "motion-preset-fade-md flex grow row-start-3 lg:row-start-2",
          isSmallScreen && "col-start-1 -col-end-1",
          !isSmallScreen && !isAboutPage && "col-start-2 -col-end-1",
          !isSmallScreen && isAboutPage && "col-start-3 -col-end-1"
        )}
      >
        {children}
      </div>
    </>
  );
}
