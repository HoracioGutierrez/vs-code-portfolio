import EditorContent from "../editor-content"

function Hobbies() {
    
    const content = `/**
 * Hobbies & Intereses
 * Lo que hago cuando no estoy debuggeando mi vida
**/

// ============================================
// GAMING
// ============================================

const valorant = {
    main: "Sova",
    rank: "no preguntes",
    playstyle: "Recon bolts perfectos, aim cuestionable",
    bestMoment: "Ese ace que nadie vio porque no estaba grabando",
    worstMoment: "Cada vez que digo 'los tengo' y no los tengo",
    hoursPlayed: "suficientes para preocuparme",

    sovaStats: {
        reconBolts: "calculados con precisión matemática",
        shockDarts: "a veces pegan",
        ultimates: "ENEMY DETECTED... y después muero",
        droneSkill: "mejor que mi aim"
    }
};

const noita = {
    descripcion: "El mejor roguelike que nadie conoce",
    muertes: Infinity,
    victorias: "algunas, eventualmente",
    causa_de_muerte_favorita: "Yo mismo (literalmente)",

    porQueEsUnico: [
        "Cada pixel es simulado físicamente",
        "Podés mezclar cualquier cosa con cualquier cosa",
        "El juego te odia y vos lo amás",
        "Morir por tu propia explosión es un arte"
    ],

    wands: {
        creadas: "muchas",
        que_funcionaron: "pocas",
        que_me_mataron: "la mayoría"
    }
};

// ============================================
// OTROS INTERESES
// ============================================

const idiomas = {
    estudiando: ["Francés", "Alemán", "Ruso"],
    motivacion: "Me gusta sufrir de formas nuevas",
    progreso_ruso: "Puedo pedir vodka, lo básico"
};

const youtube = {
    generos: ["Tech", "Gaming", "Idiomas", "Rabbit holes random"],
    tiempo_promedio: "empiezo con un video de 10 min, termino 3 horas después",
    tabs_abiertas: 47
};

const musica = {
    coding: ["Lo-fi", "Synthwave", "Silencio absoluto"],
    gaming: ["Lo que sea que tenga el juego"],
    mood: "depende del bug que esté arreglando"
};

function getHobbyStatus() {
    const hora = new Date().getHours();
    if (hora < 12) return "Probablemente durmiendo";
    if (hora < 18) return "Trabajando (o en YouTube)";
    return "Valorant o Noita, dependiendo del nivel de frustración";
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
export default Hobbies