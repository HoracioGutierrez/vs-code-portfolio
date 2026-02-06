"use client"
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback, useState } from 'react';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { defaultTheme } from '@/lib/themes/codemirror';

export default function Programacion() {
  const [value, setValue] = useState(`/**
 * Educación en Programación
 * 
 * [En construcción...]
 * 
 * Próximamente encontrarás aquí información detallada sobre mi formación
 * en programación, incluyendo cursos, certificaciones y aprendizaje autodidacta.
 * 
 * Loading...
 * 
**/

const startedCoding = 2012;
const currentLevel = "sSR/SR";
const languages = ["Javascript","Typescript", "PHP", "HTML", "CSS", "MySQL"]
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