import ContainerWithBorder from "./ContainerWithBorder";
import MainEditorHeader from "./MainEditorHeader";
import MainEditorContent from "./MainEditorContent";
import MainEditorFooter from "./MainEditorFooter";
import MainEditorDrawer from "./MainEditorDrawer";

function MainEditor({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ContainerWithBorder
      className={"rounded-md overflow-hidden w-full"}
      id="main-editor"
    >
      <MainEditorHeader />
      <MainEditorContent>{children}</MainEditorContent>
      {/* 
      
      <MainEditorDrawer />
       */}
      <MainEditorFooter />
    </ContainerWithBorder>
  );
}

export default MainEditor;
