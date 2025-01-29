import MainEditorCodeTab from "@/features/laytout/components/MainEditorCodeTab"
import dynamic from "next/dynamic"

type SobreMiPageProps = {
  params: Promise<{
    file: string
  }>
}

async function page({ params }: SobreMiPageProps) {

  const file = (await params).file

  const DynamicComponent = dynamic(
    () => import(`@/features/sobre-mi/components/${file}`),
    {
      loading: () => <div>Loading...</div>,
    }
  )

  return (
    <MainEditorCodeTab tabTitle={`${file}.js`}>
      <DynamicComponent />
    </MainEditorCodeTab>
  )
}
export default page