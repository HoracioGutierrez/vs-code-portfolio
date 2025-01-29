"use client"
import { cn } from "@/lib/utils";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronRight, File, Folder } from "lucide-react";
import Link from "next/link";


export default function FolderAccordion({ folder }: any) {
    return (
        <Accordion.Root type="single" className="AccordionRoot" key={folder.folderTitle} collapsible id="accordion-root">
            <Accordion.Item value={folder.folderTitle} className="AccordionItem">
                <Accordion.Header>
                    <Accordion.Trigger className="AccordionTrigger group/root " asChild>
                        <div className="gap-2 text-muted-foreground hover:text-white p-3">
                            <ChevronRight className="size-6 group-data-[state=open]/root:rotate-90 transition-all" />
                            <Folder className={cn("transition-all size-4", folder.folderColor)} />
                            <span>{folder.folderTitle}</span>
                        </div>
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="AccordionContent flex flex-col gap-2">
                    {folder.files.map((file: any) => {
                        return (
                            <Link href={file.href} className="pl-10 text-muted-foreground hover:text-white flex items-center gap-2" key={file.title}>
                                <File className="size-4" />
                                {file.title}
                            </Link>
                        )
                    })}
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
    )
}