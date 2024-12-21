import { links } from "../lib/utils"
import MainEditorNavigationLink from "./MainEditorNavigationLink"

function MainEditorNavigation() {

  return (
    <nav className="hidden lg:flex">
      {links.map((link) => (
        <MainEditorNavigationLink key={link.label} link={link} />
      ))}
    </nav>
  )
}
export default MainEditorNavigation