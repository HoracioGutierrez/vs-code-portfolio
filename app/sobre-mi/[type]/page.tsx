type SobreMiPageProps = {
  params: {
    type: Promise<string>
  }
}

async function SobreMiPage({ params }: SobreMiPageProps) {
  const type = (await params).type

  return (
    <div className="motion-preset-fade-md flex grow">
      {type}
    </div>
  )
}
export default SobreMiPage