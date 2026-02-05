import EditorContent from "../editor-content"

function HobbiesReadme() {

    const content = `# Intereses

Cuando no estoy programando o enseñando, probablemente estoy jugando Valorant o muriendo en Noita por enésima vez.

También me gusta aprender idiomas (aunque el ruso me está ganando) y perder tiempo en YouTube viendo videos de "10 minutos" que terminan siendo 3 horas.

## TLDR:
Sova main en Valorant. Si necesitás un recon bolt perfecto, soy tu tipo. Si necesitás clutchear un 1v5, buscá a otro.
`

    return (
        <div>
            <EditorContent
                content={content}
                type="markdown"
            />
        </div>
    )
}
export default HobbiesReadme