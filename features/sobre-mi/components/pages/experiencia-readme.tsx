import EditorContent from "../editor-content"

function ExperienciaReadme() {

    const content = `# Experiencia

+6 años como desarrollador web, +5 años enseñando a otros a programar, y 5 años en un callcenter que me curtieron el alma (y el inglés).

Pasé por startups, empresas chicas, proyectos freelance, y ahora me dedico principalmente a formar a la próxima generación de devs que van a heredar mi código legacy.

## TLDR:
Si me hablás por privado te cuento cuál fue el peor trabajo que tuve. Spoiler: no fue programando.
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