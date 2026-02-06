"use client"
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback, useEffect, useState } from 'react';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { useMedia } from 'react-use';
import { defaultTheme } from '@/lib/themes/codemirror';

export default function Intereses() {
    const isSmallScreen = useMedia("(max-width: 700px)", false);
    const [value, setValue] = useState("");

    useEffect(()=>{

        if(isSmallScreen){
            setValue(`/**
Mis Intereses

Como desarrollador web, paso gran parte de mi tiempo explorando nuevas tecnologías
y frameworks. La programación web no es solo mi trabajo, es una de mis pasiones
principales y disfruto manteniéndome al día con las últimas tendencias.

Cuando no estoy codeando, probablemente me encuentres en Valorant intentando
mejorar mi aim o quejándome del matchmaking. Es mi juego competitivo principal
y una excelente forma de desestresarme (o estresarme más, depende del día). Soy Sova main (?).

También soy un gran fan de los roguelikes, especialmente Hades. Hay algo adictivo
en intentar una y otra vez superar tus propias marcas mientras descubrís nueva
historia y mejoras tu personaje.

La ciencia ficción es mi género favorito para series y películas. Me fascina
explorar futuros posibles y conceptos que desafían nuestra comprensión actual
de la realidad.

Y por supuesto, como todo buen dev, mantengo un nivel constante de cafeína
en sangre, alternando entre café y Monster para mantener el código fluyendo.

**/

const githubLink = "https://github.com/HoracioGutierrez"
`)
        } else {
            setValue(`/**
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
`)
        }

    },[isSmallScreen])

    const onChange = useCallback((val: string, _viewUpdate: ViewUpdate) => {
        setValue(val);
    }, []);

    return (
        <div className="flex grow">
            <CodeMirror
                theme={defaultTheme}
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