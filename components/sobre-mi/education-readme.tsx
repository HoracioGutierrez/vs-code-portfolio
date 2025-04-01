import EditorContent from "./editor-content"

function EducationReadme() {

    const content = `# Educación

Te cuento algo sobre mi educacion; si no te gusta no te preocupes, tampoco estudié demasiado.

## TLDR:
tldr: fui abanderado pero me hago el humilde
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
export default EducationReadme