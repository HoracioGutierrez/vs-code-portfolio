"use client"
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback, useState } from 'react';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { defaultTheme } from '@/lib/themes/codemirror';

export default function Experiencia() {
    const [value, setValue] = useState(`/**
 * Experiencia Laboral
 * 
 * [Cargando experiencia.exe...]
 * 
 * Próximamente: Una historia épica sobre cómo sobreviví
 * a diferentes trabajos y aprendí en el proceso.
 * 
 * Loading coffee levels... ☕
 * 
**/

const yearsOfExperience = 12
const coffeeConsumed = "∞"
const bugsFixed = "más de 9000"

function calculateSanityLevel(coffeeLevel) {
    return coffeeLevel > 3 ? "Productive" : "Need more coffee"
}
`);

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