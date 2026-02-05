import EditorContent from "../editor-content"

function EducationReadme() {

    const content = `# Educación

Estudié Ciencias Naturales, terminé programando. La vida te lleva por caminos raros.

Mi educación formal en programación fue un curso de PHP en 2012. El resto lo aprendí a los golpes, leyendo documentación y preguntándole a Stack Overflow.

## TLDR:
Fui abanderado pero me hago el humilde. El título no programa, pero el café sí.
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