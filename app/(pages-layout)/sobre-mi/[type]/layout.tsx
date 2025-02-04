"use client"
import ContainerWithBorder from "@/features/laytout/components/ContainerWithBorder";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronRight, File, Folder, Mail, Phone, Triangle } from "lucide-react";
import Link from "next/link";
import { Fira_Code } from "next/font/google"
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const firaCode = Fira_Code({ weight: "400", subsets: ["latin"] })


export default function SobreMiLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname()
  const type = pathname.split("/")[2]
  const folder = pathname.split("/")[3]

  const accordionItems: any = {
    "profesional": {
      folders: [
        {
          name: "experiencia", color: "text-accent-1 fill-accent-1", files: [
            { title: "experiencia.js", href: "/experiencia" }
          ]
        },
        {
          name: "habilidades", color: "text-accent-2 fill-accent-2", files: [
            { title: "habilidades.js", href: "/habilidades" }
          ]
        },
        {
          name: "proyectos", color: "text-accent-3 fill-accent-3", files: [
            { title: "proyectos.js", href: "/proyectos" }
          ]
        }
      ]
    },
    "personal": {
      folders: [
        {
          name: "bio", color: "text-accent-1 fill-accent-1", files: [
            { title: "bio.js", href: "/bio" }
          ]
        },
        {
          name: "intereses", color: "text-accent-2 fill-accent-2", files: [
            { title: "intereses.js", href: "/intereses" }
          ]
        },
        {
          name: "educacion", color: "text-accent-3 fill-accent-3", files: [
            { title: "secundaria.js", href: "/secundaria" },
            { title: "programacion.js", href: "/programacion" },
          ]
        }
      ]
    },
    "hobbies": {
      folders: [
        {
          name: "juegos", color: "text-accent-1 fill-accent-1", files: [
            { title: "video-juegos.js", href: "/video-juegos" }
          ]
        },
        {
          name: "viajes", color: "text-accent-2 fill-accent-2", files: [
            { title: "viajes.js", href: "/viajes" }
          ]
        }
      ]
    }
  }
  return (
    <div className={cn(firaCode.className, "motion-preset-fade-md grow text-muted-foreground contents")}>
      {/* <ContainerWithBorder className="shrink-0 w-full" style={{ gridColumn: "2/3", gridRow: "2/3" }} variant="right">
        <Accordion.Root type="single" className="AccordionRoot" defaultValue={type} collapsible id="accordion-root">
          <Accordion.Item value={type} className="AccordionItem">
            <Accordion.Header>
              <Accordion.Trigger className="AccordionTrigger" asChild>
                <ContainerWithBorder variant="bottom" className="justify-start gap-2 text-muted-foreground hover:text-white p-3">
                  <Triangle className="AccordionChevron transition-all rotate-180 size-2 fill-muted-foreground hover:text-white" />
                  <span>{type}</span>
                </ContainerWithBorder>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <ContainerWithBorder variant="bottom" className="p-4">
                <Accordion.Root type="single" className="AccordionRoot" collapsible id="accordion-root" value={folder}>
                  {accordionItems[type].folders.map((folder: any) => {
                    return (
                      <Accordion.Item value={folder.name} className="AccordionItem" key={folder.name}>
                        <Accordion.Header>
                          <Accordion.Trigger className="AccordionTrigger group/root " asChild>
                            <Link href={`/sobre-mi/${type}/${folder.name}`} className={cn("gap-2 text-muted-foreground/70 hover:text-white p-3", pathname === `/sobre-mi/${type}/${folder.name}` ? "text-white" : "")}>
                              <ChevronRight className="size-6 group-data-[state=open]/root:rotate-90 transition-all" />
                              <Folder className={cn("transition-all size-4", folder.color)} />
                              <span>{folder.name}</span>
                            </Link>
                          </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="AccordionContent flex flex-col gap-2">
                          <Link href={`/sobre-mi/${type}/${folder.name}`} className={cn("pl-10 text-muted-foreground/70 hover:text-white flex items-center gap-2", pathname === `/sobre-mi/${type}/${folder.name}` ? "text-white" : "")}>
                            <File className="size-4" />
                            <span>readme.md</span>
                          </Link>
                          {folder.files.map((file: any) => {
                            return (
                              <Link href={`/sobre-mi/${type}/${folder.name}${file.href}`} className={cn("pl-10 text-muted-foreground/70 hover:text-white flex items-center gap-2", pathname === `/sobre-mi/${type}/${folder.name}${file.href}` ? "text-white" : "")} key={file.title}>
                                <File className="size-4" />
                                {file.title}
                              </Link>
                            )
                          })}
                        </Accordion.Content>
                      </Accordion.Item>
                    )
                  })}
                </Accordion.Root>
              </ContainerWithBorder>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </ContainerWithBorder> */}
      {children}
    </div >
  )
}