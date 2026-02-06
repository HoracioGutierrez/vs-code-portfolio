"use client"
import ReactCodeMirror from "@uiw/react-codemirror"
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { EditorView } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { extendedTheme } from "@/lib/themes/codemirror";

function EditorContent({ content, type = "javascript" }: { content: string, type?: string }) {
    return (
        <ReactCodeMirror
            theme={extendedTheme}
            className="w-full border-none outline-none"
            basicSetup={{
                autocompletion: true,
            }}
            value={content}
            height="100%"
            extensions={[
                type === "javascript" ? javascript({ jsx: true }) : markdown({ base: markdownLanguage, codeLanguages: languages, completeHTMLTags: true }),
                EditorView.lineWrapping
            ]}
        />
    )
}
export default EditorContent