"use client";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback, useEffect, useState } from 'react';
import useContactFormStore from '../stores/useContactFormStore';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { defaultTheme } from '@/lib/themes/codemirror';

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

    const onChange = useCallback((val: string, _viewUpdate: ViewUpdate) => {
        setValue(val);
    }, []);

    return (
        <CodeMirror
            theme={defaultTheme}
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