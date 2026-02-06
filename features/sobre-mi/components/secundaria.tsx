"use client"
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback, useState } from 'react';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { defaultTheme } from '@/lib/themes/codemirror';

export default function Secundaria() {
    const [value, setValue] = useState(`/**
 * Educación Secundaria
 * 
 * [En construcción...]
 * 
 * Pronto agregaré información sobre mi educación secundaria,
 * incluyendo detalles sobre la escuela, orientación y experiencias.
 * 
 * Stay tuned!
 * 
**/

const schoolYear = "2000-2006"
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