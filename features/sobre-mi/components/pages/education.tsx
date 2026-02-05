import EditorContent from "../editor-content"

function Education() {

    const content = `/**
 * Educación
 * De las ciencias naturales al código: un plot twist
**/

const educacionFormal = {
    titulo: "Bachiller en Ciencias Naturales",
    institucion: "Instituto Dr. Eduardo Braun Menendez",
    año: 2006,
    dato: "Sí, estudié biología. No, no sé por qué terminé programando.",
    abanderado: true // flex innecesario pero merecido
};

const certificaciones = {
    nombre: "PHP Full Stack Web Developer",
    institucion: "EducacionIT",
    año: 2012,
    tecnologias: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    estado: "Fue mi puerta de entrada al mundo dev"
};

// La verdadera educación
const autodidacta = {
    horas_en_youtube: "incontables",
    documentacion_leida: "mucha (mentira, solo los ejemplos)",
    stackoverflow_visits: Infinity,
    cursos_udemy_sin_terminar: 47,
    cursos_udemy_terminados: 3
};

// Stack actual (aprendido en la trinchera)
const skills = {
    frontend: [
        "HTML5", "CSS3", "JavaScript/ES6+",
        "React", "Next.js", "TailwindCSS",
        "Redux", "Zustand", "ShadCN"
    ],
    backend: [
        "Node.js", "Express",
        "MongoDB", "PostgreSQL", "MySQL",
        "PHP" // nunca se olvida el primer amor
    ],
    tools: [
        "Git/GitHub", "Webpack", "Vite",
        "TypeScript", "Docker", "Vercel"
    ]
};

// Idiomas (el callcenter sirvió de algo)
const idiomas = {
    español: "Nativo",
    ingles: "Fluido (C2) - gracias callcenter",
    frances: "Intermedio - oui oui baguette",
    aleman: "Básico - ich bin ein developer",
    ruso: "Principiante - только начинаю"
};

function getEducationSummary() {
    return "Título en ciencias, certificado en PHP, experto en Googlear errores";
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
export default Education