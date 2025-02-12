import ContainerWithBorder from "./ContainerWithBorder";
import MainEditorHeader from "./MainEditorHeader";
import MainEditorContent from "./MainEditorContent";
import MainEditorFooter from "./MainEditorFooter";
import MainEditorDrawer from "./MainEditorDrawer";

function MainEditor({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ContainerWithBorder className="mx-auto rounded-md overflow-hidden grid grid-rows-[min-content_auto_auto_1fr_min-content] md:grid-rows-[min-content_1fr_min-content] flex-grow w-full grid-cols-[57px_auto_1fr_min-content] editor-grid">
      <MainEditorHeader />
      <MainEditorContent>{children}</MainEditorContent>
      <MainEditorDrawer />
      <MainEditorFooter />
    </ContainerWithBorder>
  );
}

export default MainEditor;
