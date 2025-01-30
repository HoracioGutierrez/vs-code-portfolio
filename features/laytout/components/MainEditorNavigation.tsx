import { links } from "../lib/utils"
import ContainerWithBorder from "./ContainerWithBorder"
import MainEditorNavigationLink from "./MainEditorNavigationLink"

function MainEditorNavigation() {

  return (
    <ContainerWithBorder variant="bottom" as="nav" className="hidden lg:flex">
      {links.map((link) => (
        <MainEditorNavigationLink key={link.label} link={link} />
      ))}
    </ContainerWithBorder>
  )
}
export default MainEditorNavigation