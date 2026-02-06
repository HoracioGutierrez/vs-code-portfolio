"use client"
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback, useState } from 'react';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { defaultTheme } from '@/lib/themes/codemirror';

export default function Habilidades() {
    const [value, setValue] = useState(`/**
 * Habilidades Tech & More
 * 
 * [Inicializando matriz de habilidades...]
 * 
 * Cargando lista de tecnologías, frameworks, 
 * y habilidades secretas desbloqueadas.
 * 
 * Skill points remaining: 42
 * 
**/

const skillTree = {
    programming: "loading...",
    debugging: "level 99",
    coffeeBrewingSkill: "legendary",
    valorantRank: "still practicing..."
}

function levelUp(skill) {
    return "Need more experience points"
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