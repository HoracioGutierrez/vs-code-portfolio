"use client"
import MainEditorPageTitle from "@/components/layout/main-editor-page-title"
import ContactForm from "@/features/contacto/components/ContactForm"
import ContactFormText from "@/features/contacto/components/ContactFormText"
import { cn } from "@/lib/utils"
import * as motion from "motion/react-client"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { useMedia } from "react-use";

function ContactoPage() {

    const isWide = useMedia('(min-width: 1300px)');

    if (isWide) {
        return (
            <div className={cn("w-full grow flex flex-col")}>
                <PanelGroup autoSaveId="example" direction={isWide ? "horizontal" : "vertical"} className="w-full grow">
                    <Panel>
                        <div className="flex justify-center items-center h-full">
                            <ContactForm />
                        </div>
                    </Panel>
                    <PanelResizeHandle className="w-[1px] bg-muted-foreground/50" />
                    <Panel className="w-full grid place-content-center">
                        <ContactFormText />
                    </Panel>
                </PanelGroup>
            </div>
        )
    }

    return (
        <motion.div initial="hide" animate="show" exit="exit" className="flex grow p-8 flex-col">
            <MainEditorPageTitle title="Contactame" />
            <div className="flex flex-col gap-10">
                <ContactForm />
                <ContactFormText />
            </div>
        </motion.div>
    )
}
export default ContactoPage