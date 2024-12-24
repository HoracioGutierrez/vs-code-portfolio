import MainEditorCodeTab from "@/features/laytout/components/MainEditorCodeTab"

type SobreMiPageProps = {
  params: Promise<{
    file: string
  }>
}

async function page({ params }: SobreMiPageProps) {

  const file = (await params).file

  return (
    <MainEditorCodeTab tabTitle={`${file}.md`}>
      {file}
    </MainEditorCodeTab>
  )
}
export default page