export default function SobreMiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="motion-preset-fade-md grow contents">
      {children}
    </div>
  )

}