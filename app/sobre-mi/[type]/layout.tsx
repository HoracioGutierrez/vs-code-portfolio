import ContainerWithBorder from "@/features/laytout/components/ContainerWithBorder";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronRight, File, Folder, Mail, Phone, Triangle } from "lucide-react";
import Link from "next/link";
import { Fira_Code } from "next/font/google"
import { cn } from "@/lib/utils";
import FolderAccordion from "@/features/sobre-mi/components/FolderAccordion";

const firaCode = Fira_Code({ weight: "400", subsets: ["latin"] })


export default async function SobreMiLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ type: string }>
}) {

  const type = (await params).type

  const accordionItems = [
    {
      pathKey: 'personal',
      triggerTitle: 'info-personal',
      folders: [
        {
          folderTitle: "bio",
          folderColor: "text-accent-1 fill-accent-1",
          files: [
            { title: "bio.js", href: "/sobre-mi/personal/bio/bio" }
          ]
        },
        {
          folderTitle: "intereses",
          folderColor: "text-accent-2 fill-accent-2",
          files: [
            { title: "intereses.js", href: "/sobre-mi/personal/intereses/intereses" }
          ]
        },
        {
          folderTitle: "educacion",
          folderColor: "text-accent-3 fill-accent-3",
          files: [
            { title: "secundaria.js", href: "/sobre-mi/personal/educacion/secundaria" },
            { title: "programacion.js", href: "/sobre-mi/personal/educacion/programacion" },
          ]
        }
      ]
    },
    {
      pathKey: 'profesional',
      triggerTitle: 'info-profesional',
      folders: [
        {
          folderTitle: "experiencia",
          folderColor: "text-accent-1 fill-accent-1",
          files: [
            { title: "experiencia.js", href: "/sobre-mi/profesional/experiencia/experiencia" }
          ]
        },
        {
          folderTitle: "habilidades",
          folderColor: "text-accent-2 fill-accent-2",
          files: [
            { title: "habilidades.js", href: "/sobre-mi/profesional/habilidades/habilidades" }
          ]
        },
        {
          folderTitle: "proyectos",
          folderColor: "text-accent-3 fill-accent-3",
          files: [
            { title: "proyectos.js", href: "/sobre-mi/profesional/proyectos/proyectos" }
          ]
        }
      ]
    },
    {
      pathKey: 'hobbies',
      triggerTitle: 'hobbies',
      folders: [
        {
          folderTitle: "juegos",
          folderColor: "text-accent-1 fill-accent-1",
          files: [
            { title: "video-juegos.js", href: "/sobre-mi/hobbies/juegos/video-juegos" },
          ]
        },
        {
          folderTitle: "viajes",
          folderColor: "text-accent-2 fill-accent-2",
          files: [
            { title: "viajes.js", href: "/sobre-mi/hobbies/viajes/viajes" }
          ]
        }
      ]
    }
  ]

  const accordionItemsFiltered = accordionItems.filter(item => item.pathKey === type)
    ? accordionItems.filter(item => item.pathKey === type)[0]
    : accordionItems[0]

  return (
    <div className={cn(firaCode.className, "motion-preset-fade-md flex grow text-muted-foreground")}>
      <ContainerWithBorder className="shrink-0 w-full max-w-3xs">
        <Accordion.Root type="single" className="AccordionRoot" defaultValue={accordionItemsFiltered.triggerTitle} collapsible>
          <Accordion.Item value={accordionItemsFiltered.triggerTitle} className="AccordionItem">
            <Accordion.Header>
              <Accordion.Trigger className="AccordionTrigger" asChild>
                <ContainerWithBorder variant="bottom" className="justify-start gap-2 text-muted-foreground hover:text-white p-3">
                  <Triangle className="AccordionChevron transition-all rotate-180 size-2 fill-muted-foreground hover:text-white" />
                  <span>{accordionItemsFiltered.triggerTitle}</span>
                </ContainerWithBorder>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <ContainerWithBorder variant="bottom" className="p-4">
                {accordionItemsFiltered.folders.map(folder => {
                  return (
                    <FolderAccordion folder={folder} key={folder.folderTitle}/>
                  )
                })}
              </ContainerWithBorder>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value={"contacto"} className="AccordionItem">
            <Accordion.Header>
              <Accordion.Trigger className="AccordionTrigger" asChild>
                <ContainerWithBorder variant="bottom" className="justify-start gap-2 text-muted-foreground hover:text-white p-3">
                  <Triangle className="AccordionChevron transition-all rotate-180 size-2 fill-muted-foreground hover:text-white" />
                  <span>contacto</span>
                </ContainerWithBorder>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent p-6 flex flex-col gap-2">
              <Link href="mailto:horacio.estevez@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-white" target="_blank">
                <Mail className="size-4" />
                <span>horacio.estevez@gmail.com</span>
              </Link>
              <Link href="tel:1135069607" className="flex items-center gap-2 text-muted-foreground hover:text-white" target="_blank">
                <Phone className="size-4" />
                <span>1135069607</span>
              </Link>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </ContainerWithBorder>
      {children}
    </div >
  )
}