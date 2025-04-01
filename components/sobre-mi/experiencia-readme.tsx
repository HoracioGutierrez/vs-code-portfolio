import EditorContent from "./editor-content"

function ExperienciaReadme() {

    const content = `# Experiencia

Algo sobre mi experiencia laboral como programador y otros rubros.

## TLDR:
tldr: Si me hablas por privado te digo cual fue el peor trabajo que he hecho.
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
export default ExperienciaReadme