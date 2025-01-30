import { X } from "lucide-react"
import ContainerWithBorder from "./ContainerWithBorder"

type MainEditorCodeTabProps = {
  children?: React.ReactNode
  tabTitle: string
}

function MainEditorCodeTab({ tabTitle = "tab-title.md", children }: MainEditorCodeTabProps) {
  return (
    <div className="w-full" style={{ gridColumn: "3/-1" , gridRow: "2/4"}}>
      <ContainerWithBorder variant="right" className="p-3 w-fit text-muted-foreground flex gap-12 items-center h-[49px]">
        <span>
          {tabTitle}
        </span>
        <X className="size-4" />
      </ContainerWithBorder>
      <ContainerWithBorder variant="top" className="w-full p-4">
        {children}
      </ContainerWithBorder>
    </div>
  )
}
export default MainEditorCodeTab