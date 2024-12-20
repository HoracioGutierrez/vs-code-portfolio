import { useEffect } from "react";
import ContainerWithBorder from "./ContainerWithBorder"
import { useAnimate } from "motion/react";

type MainEditorSocialLinkProps = {
  icon: React.ReactNode
  id: Number
}

function MainEditorSocialLink({ icon, id }: MainEditorSocialLinkProps) {

  const [scope, animate] = useAnimate();

  useEffect(() => {
    initialAnimation()
  }, [])

  const initialAnimation = async () => {
    await animate(scope.current, { x: -400, opacity: 0 })
    await animate(scope.current, { x: 0, opacity: 1 }, { delay: Number(id) * 0.1 })
  }

  return (
    <ContainerWithBorder
      as="span"
      ref={scope}
      variant="right"
      className="px-4 lg:px-5.5 py-4 text-muted-foreground grid place-content-center"
    >
      {icon}
    </ContainerWithBorder>
  )
}
export default MainEditorSocialLink