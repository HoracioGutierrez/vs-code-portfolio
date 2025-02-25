"use client"
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback, useState } from 'react';
import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from '@lezer/highlight';
import { EditorView } from '@codemirror/view';


export default function Bio() {

    const [value, setValue] = useState(`/**
 * Sobre mi
 *
 * 
 * Mi nombre es Horacio Gutierrez, tengo 35 años y soy de Buenos Aires, Argentina. 
 * 
 * Venía trabajando 5 años seguidos en un call center y originalmente proyecté para ser Biotecnologo pero por circunstancias de la vida una cosa llevó a la otra y terminé anotandome en un curso de Desarrollo Web en PHP. 
 * 
 * Un año más tarde me veo con la ventaja de saber una habilidad nueva y que encima me gustaba muchísimo (sobre todo mucho mas que el call center), por lo que decido hacer un giro laboral en mi vida y comenzar el arduo camino de la programación. 
 * 
 * 12 años mas tarde, un día como hoy, me doy cuenta que fue una de las mejores decisiones que tomé en mi vida y que me permitió y permitirá crecer tanto como he podido hasta ahora.
 * 
 * Nada que ver pero también soy fan de aprender idiomas nuevos, no se porque; me gusta muchisimo mirar series y peliculas, sobre todo las de ciencia ficcion, disfruto escuchar música de cualquier parte del mundo, sobre todo si habla alguno de los idiomas que conozco, obviamente como soy programador tomo mucho, mucho café y en mi tiempo libre me juego alguna partida de algo para desestresar.
 * 
 * 
**/

const githubLink = "https://github.com/HoracioGutierrez"

`);

    const onChange = useCallback((val: any, viewUpdate: any) => {
        console.log('val:', val);
        setValue(val);
    }, []);

    const customTheme = createTheme({
        theme: "dark",
        settings: {
            background: "var(--primary)",
            gutterBackground: "var(--primary)",
            gutterActiveForeground: "var(--accent-3)",  
            gutterForeground: "var(--muted-foreground)",
            fontSize: "16px",
        },
        styles: [
            { tag: t.comment, color: "var(--muted-foreground)" },
            { tag: t.variableName, color: "var(--accent-2)" },
            { tag: t.string, color: "var(--accent-3)" },
            { tag: t.keyword, color: "var(--accent-1)" },
        ]
    })

    return (
        <div className="flex grow">
            <CodeMirror
                theme={customTheme}
                className='w-full outline-none border-none h-full'
                basicSetup={{
                    autocompletion: true,
                }}
                value={value}
                extensions={[javascript({ jsx: true }),EditorView.lineWrapping]} 
                onChange={onChange}
            />
        </div>
    )
}