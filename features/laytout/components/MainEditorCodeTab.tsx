import { X } from "lucide-react";
import ContainerWithBorder from "./ContainerWithBorder";

type MainEditorCodeTabProps = {
  children?: React.ReactNode;
  tabTitle: string;
};

function MainEditorCodeTab({
  tabTitle = "tab-title.md",
  children,
}: MainEditorCodeTabProps) {
  return (
    <div className="w-full flex flex-col">
      <ContainerWithBorder
        variant="right"
        className="p-3 w-fit text-muted-foreground flex gap-12 items-center h-[48px]"
      >
        <span>{tabTitle}</span>
        <X className="size-4" />
      </ContainerWithBorder>
      <ContainerWithBorder variant="top" className="w-full grow flex flex-col">
        {children}
      </ContainerWithBorder>
    </div>
  );
}
export default MainEditorCodeTab;
