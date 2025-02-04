type SobreMiPageProps = {
  params: Promise<{ type: string }>
}

async function SobreMiPage({ params }: SobreMiPageProps) {
  const type = (await params).type

  return (
    <div className="motion-preset-fade-md flex grow" style={{ gridColumn: "3/-1", gridRow: "2/-2" }}>
      {type}
    </div>
  )
}
export default SobreMiPage