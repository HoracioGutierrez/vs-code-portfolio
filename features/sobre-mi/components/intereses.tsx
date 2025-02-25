"use client"
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback, useState } from 'react';
import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from '@lezer/highlight';
import { EditorView } from '@codemirror/view';

export default function Intereses() {
    const [value, setValue] = useState(`/**
 * Mis Intereses
 * 
 * Como desarrollador web, paso gran parte de mi tiempo explorando nuevas tecnologías
 * y frameworks. La programación web no es solo mi trabajo, es una de mis pasiones
 * principales y disfruto manteniéndome al día con las últimas tendencias.
 * 
 * Cuando no estoy codeando, probablemente me encuentres en Valorant intentando
 * mejorar mi aim o quejándome del matchmaking. Es mi juego competitivo principal
 * y una excelente forma de desestresarme (o estresarme más, depende del día). Soy Sova main (?).
 * 
 * También soy un gran fan de los roguelikes, especialmente Hades. Hay algo adictivo
 * en intentar una y otra vez superar tus propias marcas mientras descubrís nueva
 * historia y mejoras tu personaje.
 * 
 * La ciencia ficción es mi género favorito para series y películas. Me fascina
 * explorar futuros posibles y conceptos que desafían nuestra comprensión actual
 * de la realidad.
 * 
 * Y por supuesto, como todo buen dev, mantengo un nivel constante de cafeína
 * en sangre, alternando entre café y Monster para mantener el código fluyendo.
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
                extensions={[javascript({ jsx: true }), EditorView.lineWrapping]} 
                onChange={onChange}
            />
        </div>
    )
}