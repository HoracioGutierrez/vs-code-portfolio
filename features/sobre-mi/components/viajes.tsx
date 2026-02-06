"use client"
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback, useState } from 'react';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { defaultTheme } from '@/lib/themes/codemirror';

export default function Viajes() {
    const [value, setValue] = useState(`/**
 * Viajes & Aventuras
 * 
 * [Calculando coordenadas...]
 * 
 * Próximamente: Una colección de historias y lugares
 * que vale la pena recordar.
 * 
 * google.maps.setDestination("Anywhere")
 * 
**/

const favoritePlace = "Atlantida <3"
const travelMode = "tourist.DEBUG_MODE"

function whereToNext() {
    return "Error 404: Destination not found"
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