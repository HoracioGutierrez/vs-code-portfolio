import EditorContent from "../editor-content"

function Experiencia() {
    
    const content = `/**
 * Experiencia Laboral
 * De callcenter a código: una historia de redención
**/

const career = {
    totalYears: 12,
    coffeeConsumed: Infinity,
    bugsCreated: "no comment",
    bugsFixed: "más de 9000"
};

// ============================================
// CAPÍTULO 1: La era del headset (2012-2017)
// ============================================

const callcenter = {
    company: "Soporte Técnico Internacional",
    duration: "5 años",
    role: "Técnico de Soporte Bilingüe",
    skills: ["Paciencia nivel Dios", "Inglés fluido", "Reiniciar routers"],
    highlight: "Aprendí que 'Did you try turning it off and on again?' funciona el 90% del tiempo",
    trauma: "Todavía escucho el sonido del teléfono en mis pesadillas"
};

// ============================================
// CAPÍTULO 2: Primeros pasos en dev (2017-2020)
// ============================================

const primerosPasos = [
    { lugar: "Startup #1", duracion: "~1 año", learned: "PHP no está tan muerto" },
    { lugar: "Empresa chica #2", duracion: "~1 año", learned: "jQuery era una droga" },
    { lugar: "Freelance random", duracion: "~1 año", learned: "Cobrar por adelantado" },
];

// ============================================
// CAPÍTULO 3: La era de React (2020-presente)
// ============================================

const coderhouse = {
    role: "Instructor de ReactJS",
    period: "Marzo 2020 - Presente",
    students: 500,
    courses: 30,
    achievement: "Convertir juniors en seniors (o al menos en mids)"
};

const tripleten = {
    role: "Full Stack Web Developer Instructor",
    period: "Marzo 2022 - Presente",
    company: "Tripleten by Yandex",
    flex: "Primer instructor extranjero de la plataforma",
    duties: [
        "Formar 200+ estudiantes internacionales",
        "Reviews técnicos de la plataforma",
        "Organizar 2 hackatones en YouTube"
    ]
};

const astra = {
    role: "React Architect / Developer",
    company: "Astra / IT Tech Group",
    period: "Julio 2022 - Enero 2023",
    project: "Casino Online",
    impact: "+20% user engagement",
    achievement: "Implementé Git Flow y el equipo dejó de hacer push a main"
};

const actionFintech = {
    role: "React Developer",
    company: "Action Fintech",
    period: "Junio 2022 - Enero 2023",
    learned: "Web3, Smart Contracts, Metamask",
    impact: "+10% velocidad del equipo frontend",
    confession: "Tardé 6 meses en entender qué era un NFT"
};

// Status actual
function getCurrentStatus() {
    return {
        doing: "Enseñando y haciendo freelance",
        learning: "Siempre algo nuevo",
        mood: career.coffeeConsumed > 3 ? "Productivo" : "Necesito café"
    };
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