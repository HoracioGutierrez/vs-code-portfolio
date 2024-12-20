"use client"

import { AnimatePresence, useAnimate } from "motion/react";
import { useEffect } from "react";
import ContainerWithBorder from "./ContainerWithBorder";
import MainEditorHeader from "./MainEditorHeader";
import MainEditorContent from "./MainEditorContent";

function MainEditor({ children }: Readonly<{ children: React.ReactNode }>) {

  const [editor, animateEditor] = useAnimate();
  const [editorHeader, animateEditorHeader] = useAnimate();
  const [editorContent, animateEditorContent] = useAnimate();

  useEffect(() => {
    initialAnimation()
  }, [])

  const initialAnimation = async () => {
    await animateEditor(editor.current, { flexGrow: 1 })
    await animateEditor(editor.current, { width: "100%" })
    await animateEditorHeader(editorHeader.current, { opacity: 1, display: "flex" })
    await animateEditorContent(editorContent.current, { opacity: 1 })
  }

  return (
    <ContainerWithBorder
      ref={editor}
      initial={{ height: 0, width: "10px", flexGrow: 0 }}
      className="mx-auto rounded-md overflow-hidden"
    >
      <MainEditorHeader ref={editorHeader} />
      <MainEditorContent ref={editorContent}>
        <AnimatePresence>
          {children}
        </AnimatePresence>
      </MainEditorContent>
    </ContainerWithBorder>
  )
}

export default MainEditor