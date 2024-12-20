import MainEditorNavigationLink from "./MainEditorNavigationLink"

function MainEditorNavigation() {

  const links = [
    { id: 1, label: "_hola", href: "/" },
    { id: 2, label: "_sobre-mi", href: "/sobre-mi" },
    { id: 3, label: "_trabajos", href: "/trabajos" },
  ]

  return (
    <nav className="hidden lg:flex">
      {links.map((link) => (
        <MainEditorNavigationLink key={link.label} link={link} />
      ))}
    </nav>
  )
}
export default MainEditorNavigation