"use client"
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback, useState } from 'react';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { defaultTheme } from '@/lib/themes/codemirror';

export default function Proyectos() {
    const [value, setValue] = useState(`/**
 * Proyectos & Creaciones
 * 
 * [Compilando portfolio...]
 * 
 * Preparando showcase de proyectos que sobrevivieron
 * a la fase de desarrollo y están orgullosos de mostrarse.
 * 
 * npm install more-creativity
 * 
**/

const projectStatus = "npm run build"
const deploymentLevel = "soon™"

function showProjects() {
    return "git push --force-with-lease"
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