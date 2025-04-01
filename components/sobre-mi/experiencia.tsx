import EditorContent from "./editor-content"

function Experiencia() {
    
    const content = `/**
 * Experiencia Laboral
 * 
 * [Cargando experiencia.exe...]
 * 
 * Próximamente: Una historia épica sobre cómo sobreviví
 * a diferentes trabajos y aprendí en el proceso y los distintos
 * proyectos en los que participé.
 * 
 * Loading coffee levels... ☕
 * 
**/

const yearsOfExperience = 12;
const coffeeConsumed = "∞";
const bugsFixed = "más de 9000";
const projectStatus = "npm run build";
const deploymentLevel = "soon™";

function calculateSanityLevel(coffeeLevel) {
    return coffeeLevel > 3 ? "Productive" : "Need more coffee"
}

function showProjects() {
    return "git push --force-with-lease"
}
`

    return (
        <div>
            <EditorContent
                content={content}
            />
        </div>
    )
}
export default Experiencia