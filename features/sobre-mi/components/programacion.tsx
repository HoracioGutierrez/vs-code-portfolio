"use client"
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback, useState } from 'react';
import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from '@lezer/highlight';
import { EditorView } from '@codemirror/view';

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