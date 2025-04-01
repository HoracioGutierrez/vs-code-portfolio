import EditorContent from "./editor-content"

function HobbiesReadme() {

    const content = `# Intereses

Por si no fui lo suficientemente autoreferencial, aca te digo que me interesa en mi tiempo libre (?).

## TLDR:
tldr: soy un desarrollador web y me gusta Valorant
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