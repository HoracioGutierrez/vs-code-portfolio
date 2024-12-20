import { GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react"
import ContainerWithBorder from "./ContainerWithBorder"
import MainEditorSocialLink from "./MainEditorSocialLink"

function MainEditorSocials() {

  const socialIcons = [
    { id: 1, icon: <TwitterIcon className="size-4" /> },
    { id: 3, icon: <InstagramIcon className="size-4" /> },
  ]

  return (
    <>
      {socialIcons.map(icon => {
        return (
          <MainEditorSocialLink key={icon.id} icon={icon.icon} id={icon.id}/>
        )
      })}
    </>
  )
}
export default MainEditorSocials