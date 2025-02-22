import { ReactNode } from "react";

type MainEditorContentProps = {
  children: ReactNode;
};

function MainEditorContent({ children }: Readonly<MainEditorContentProps>) {
  return <main className="contents">{children}</main>;
}
export default MainEditorContent;
