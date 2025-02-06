"use client"
import ContactForm from "@/features/contacto/components/ContactForm"
import ContactFormText from "@/features/contacto/components/ContactFormText"
import ContainerWithBorder from "@/features/laytout/components/ContainerWithBorder"
import MainEditorCodeTab from "@/features/laytout/components/MainEditorCodeTab"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useMedia } from 'react-use';
import { cn } from "@/lib/utils"
import { Fira_Code } from "next/font/google"

const firaCode = Fira_Code({ weight: "400", subsets: ["latin"] })

function ContactoPage() {

  const isWide = useMedia('(min-width: 1300px)');

  if (isWide) {
    return (
      <MainEditorCodeTab tabTitle="contacto.tsx">
        <div className={cn(firaCode.className, "w-full grow flex flex-col")}>
          <PanelGroup autoSaveId="example" direction={isWide ? "horizontal" : "vertical"} className="w-full grow">
            <Panel>
              <ContainerWithBorder variant="right" className="flex justify-center items-center h-full">
                <ContactForm />
              </ContainerWithBorder>
            </Panel>
            <PanelResizeHandle />
            <Panel className="w-full grid place-content-center">
              <ContactFormText />
            </Panel>
          </PanelGroup>
        </div>
      </MainEditorCodeTab >
    )
  }

  return (
    <MainEditorCodeTab tabTitle="contacto.tsx">
      <div className={cn(firaCode.className, "w-full grow flex flex-col")}>
        <ContainerWithBorder variant="bottom" className="flex justify-center items-center h-full p-4">
          <ContactForm />
        </ContainerWithBorder>
        <div className="p-4">
          <ContactFormText />
        </div>
      </div>
    </MainEditorCodeTab >
  )
}
export default ContactoPage