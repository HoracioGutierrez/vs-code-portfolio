"use client"

import { useAnimate } from "motion/react";
import { useEffect } from "react";
import ContainerWithBorder from "./ContainerWithBorder";
import MainEditorHeader from "./MainEditorHeader";
import MainEditorContent from "./MainEditorContent";
import MainEditorFooter from "./MainEditorFooter";
import MainEditorDrawer from "./MainEditorDrawer";

function MainEditor({ children }: Readonly<{ children: React.ReactNode }>) {

  const [editor, animateEditor] = useAnimate();
  const [editorHeader, animateEditorHeader] = useAnimate();
  const [editorContent, animateEditorContent] = useAnimate();
  const [editorFooter, animateEditorFooter] = useAnimate();

  useEffect(() => {
    initialAnimation()
  }, [])

  const initialAnimation = async () => {
    /* await animateEditor(editor.current, { flexGrow: 1 })
    await animateEditor(editor.current, { width: "100%" })
    await animateEditorHeader(editorHeader.current, { opacity: 1, display: "flex" })
    await animateEditorFooter(editorFooter.current, { opacity: 1, display: "flex" })
    await animateEditorContent(editorContent.current, { opacity: 1 }) */
  }

  return (
    <ContainerWithBorder
      /* ref={editor} */
      /* initial={{ height: 0, width: "10px", flexGrow: 0 }} */
      className="mx-auto rounded-md overflow-hidden grid grid-rows-[min-content_auto_1fr_min-content] md:grid-rows-[min-content_1fr_min-content] flex-grow w-full grid-cols-[57px_max-content_1fr_min-content] editor-grid"
    >
      <MainEditorHeader ref={editorHeader} />
      <MainEditorContent ref={editorContent}>
        {children}
      </MainEditorContent>
      <MainEditorDrawer/>
      <MainEditorFooter ref={editorFooter}/>
    </ContainerWithBorder>
  )
}

export default MainEditor