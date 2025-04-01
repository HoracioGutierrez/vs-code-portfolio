import EditorContent from "./editor-content"

function Hobbies() {
    
    const content = `/**
 * Gaming Corner y Viajes
 * 
 * [Cargando destinos y partidas guardadas...]
 * 
 * Preparando estadísticas de juego y momentos épicos.
 * Please don't check my K/D ratio.
 * 
 * Press F to pay respects
 * 
**/

const valorantMain = "Sova";
const gamesPlayed = "not enough";
const hadesEscapeAttempts = 9999;
const favoritePlace = "Atlantida <3";
const travelMode = "tourist.DEBUG_MODE";

function gitGud() {
    return "Instructions unclear, stuck in bronze"
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