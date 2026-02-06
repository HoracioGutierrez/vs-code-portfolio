"use client"
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback, useState } from 'react';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { defaultTheme } from '@/lib/themes/codemirror';

export default function VideoJuegos() {
    const [value, setValue] = useState(`/**
 * Gaming Corner
 * 
 * [Cargando partida guardada...]
 * 
 * Preparando estadísticas de juego y momentos épicos.
 * Please don't check my K/D ratio.
 * 
 * Press F to pay respects
 * 
**/

const valorantMain = "Sova"
const gamesPlayed = "not enough"
const hadesEscapeAttempts = 9999

function gitGud() {
    return "Instructions unclear, stuck in bronze"
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