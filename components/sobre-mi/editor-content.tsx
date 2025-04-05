"use client"
import createTheme from "@uiw/codemirror-themes";
import ReactCodeMirror from "@uiw/react-codemirror"
import { tags as t } from "@lezer/highlight";
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { EditorView } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";

function EditorContent({ content, type = "javascript" }: { content: string, type?: string }) {

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
            { tag: t.heading, color: "var(--accent-2)" },
            { tag: t.list, color: "var(--accent-3)" },
            { tag: t.tagName, color: "var(--accent-1)" },
        ],
    });

    return (
        <ReactCodeMirror
            theme={customTheme}
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