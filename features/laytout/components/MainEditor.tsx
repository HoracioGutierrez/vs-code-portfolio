"use client"
import ContainerWithBorder from "./ContainerWithBorder";
import MainEditorHeader from "./MainEditorHeader";
import MainEditorContent from "./MainEditorContent";
import MainEditorFooter from "./MainEditorFooter";
import MainEditorDrawer from "./MainEditorDrawer";
import { useAnimate } from "motion/react";
import { useEffect } from "react";

function MainEditor({ children }: Readonly<{ children: React.ReactNode }>) {

  const [editorContainerRef, animate] = useAnimate()

  useEffect(() => {
    mainAnimation()
  }, [])

  async function mainAnimation() {
    await animate(editorContainerRef.current, { opacity: 1 , borderRadius : "6px" }, { duration: 0.6 })
    await animate(editorContainerRef.current, { flexGrow: 1 }, { duration: 0.7, bounce: 0.4, type: "spring" })
    await animate(editorContainerRef.current, { width: "100%" }, { duration: 0.6, bounce: 0.7, bounceDamping: 0, type: "spring" })
  }

  return (
    <ContainerWithBorder
      ref={editorContainerRef}
      className={"overflow-hidden w-full mx-auto grow origin-center"}
      initial={{ opacity: 0, height: 20, width: 20, flexGrow: 0 , borderRadius : "50%" }}
      id="main-editor"
    >
      <MainEditorHeader />
      <MainEditorContent>{children}</MainEditorContent>
      <MainEditorDrawer />
      <MainEditorFooter />
    </ContainerWithBorder>
  );
}

export default MainEditor;
