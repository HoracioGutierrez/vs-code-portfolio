import EditorContent from "./editor-content"

function Education() {

    const content = `/**
 * Educación Secundaria
 * 
 * [En construcción...]
 * 
 * Pronto agregaré información sobre mi educación secundaria,
 * incluyendo detalles sobre la escuela, orientación y experiencias y formación
 * en programación, incluyendo cursos, certificaciones y aprendizaje autodidacta.
 * 
 * 
**/

const schoolYear = "2000-2006";
const startedCoding = 2012;
const currentLevel = "sSR/SR";
const languages = ["Javascript","Typescript", "PHP", "HTML", "CSS", "MySQL"];
`

    return (
        <div>
            <EditorContent
                content={content}
            />
        </div>
    )
}
export default Education