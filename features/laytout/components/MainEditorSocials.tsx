import { GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import ContainerWithBorder from "./ContainerWithBorder";
import MainEditorSocialLink from "./MainEditorSocialLink";

function MainEditorSocials() {
  const socialIcons = [
    {
      id: 1,
      icon: <TwitterIcon className="size-4" />,
      href: "https://twitter.com/horagutierrez",
    },
    {
      id: 3,
      icon: <InstagramIcon className="size-4" />,
      href: "https://instagram.com/horagutierrez",
    },
  ];

  return (
    <>
      {socialIcons.map((icon) => {
        return (
          <MainEditorSocialLink
            key={icon.id}
            icon={icon.icon}
            id={icon.id}
            href={icon.href}
          />
        );
      })}
    </>
  );
}
export default MainEditorSocials;
