"use client"
import { usePathname } from "next/navigation"
import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight, File, Folder } from "lucide-react";

export default function SobreMi() {

    const pathname = usePathname()
    const splitedPath = pathname.split("/")
    const mainPath = splitedPath[1] //"sobre-mi"
    const type = splitedPath[2] //"personal", "profesional", "hobbies"
    const folder = splitedPath[3] //"bio", "intereses", "educacion" , "programacion", "experiencia", "habilidades", "proyectos" , "juegos", "viajes"

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

    if (!type) return <p className="text-muted-foreground/20">(empty)</p>

    return (
        <Accordion.Root type="single" className="AccordionRoot" defaultValue={folder} collapsible id="accordion-root">
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
                        <Accordion.Content className="AccordionContent flex flex-col gap-4">
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
    )
}