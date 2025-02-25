"use client";
import createTheme from '@uiw/codemirror-themes';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback, useEffect, useState } from 'react';
import { tags as t } from '@lezer/highlight';
import useContactFormStore from '../stores/useContactFormStore';
import { EditorView } from '@codemirror/view';

function ContactFormText() {

    const { name, email, message } = useContactFormStore()
    const [value, setValue] = useState("");

    useEffect(() => {
        setValue(generateMessage(name, email, message))
    }, [name, email, message])

    const generateMessage = (name: string, email: string, message: string) => {
        return `const button = document.querySelector('#sendBtn');

const message = {
	name: "${name}",
	email: "${email}",
	message: "${message}",
	date: "${new Date().toLocaleDateString()}",
}

button.addEventListener('click', () => {
	form.send(message);
})`
    }

    const onChange = useCallback((val: any, viewUpdate: any) => {
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
        <CodeMirror
            theme={customTheme}
            className='w-full outline-none border-none'
            basicSetup={{ autocompletion: true }}
            value={value}
            height="100%"
            extensions={[javascript({ jsx: true }), EditorView.lineWrapping]}
            onChange={onChange}
            readOnly={true}
        />
    )
}
export default ContactFormText