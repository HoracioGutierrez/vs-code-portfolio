"use client"
import createTheme from "@uiw/codemirror-themes";
import ReactCodeMirror from "@uiw/react-codemirror"
import { tags as t } from "@lezer/highlight";
import { EditorView } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { Button } from "../ui/button";
import { useState } from "react";
import { experimental_useObject as useObject } from '@ai-sdk/react';
import { codeReviewSchema } from "@/app/api/codereview/schema";
import * as motion from "motion/react-client"
import { AnimatePresence } from "motion/react";
import { Loader } from "lucide-react";

function HomeGame() {

    const [newContent, setNewContent] = useState<string>("")
    const { object, submit, isLoading } = useObject({
        api: '/api/codereview',
        schema: codeReviewSchema,
        initialValue: {
            code: {
                correctCode: "",
                isValid: false,
                message: "",
            }
        }
    });

    const customTheme = createTheme({
        theme: "dark",
        settings: {
            background: "rgba(0, 0, 0, 0.5) ",
            gutterBackground: "var(--primary)",
            gutterActiveForeground: "var(--accent-3)",
            gutterForeground: "var(--muted-foreground)",
            fontSize: "16px",
            /* backdropFilter: "blur(10px)", */
            
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

    const content = `//Arregla el codigo de abajo para que funcione correctamente.

var person = {
    name: "John",
    age: 30,
    city: "New York"    
}:

function greet(person) {
    console.log("Hello,  +" person.name + "!");
}

greet(person());`

    const handleCheck = () => {
        submit(newContent)
        //submit("Messages during finals week.")
    }

    return (
        <>
            <div className="p-1 rounded-lg border border-muted-foreground/50 max-h-full overflow-auto backdrop-blur-2xl">
                <ReactCodeMirror
                    theme={customTheme}
                    onUpdate={(data) => {
                        setNewContent(data.state.doc.toString())
                    }}
                    className="w-full border-none outline-none"
                    basicSetup={{
                        autocompletion: true,
                    }}
                    value={content}
                    height="100%"
                    extensions={[
                        javascript({ jsx: true }),
                        EditorView.lineWrapping
                    ]}
                />
            </div>
            <AnimatePresence>
                {object?.code?.message && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, margin: "0px" }}
                        animate={{ opacity: 1, height: "auto", margin: "16px 0px", borderColor: object.code.isValid ? "var(--accent-1)" : "var(--accent-3)", transition: { delay: 1 } }}
                        exit={{ opacity: 0, height: 0, minHeight: 0 }}
                        className="overflow-auto p-2 rounded border"
                    >
                        <p>{object?.code?.message}</p>
                    </motion.div>
                )}
            </AnimatePresence>
            <Button onClick={handleCheck} className="!bg-transparent !border !border-muted-foreground/50 !mt-auto hover:!bg-accent-2 hover:!text-primary !text-sm !text-muted-foreground !rounded-md !px-3 !py-2 !cursor-pointer !ml-auto !flex !items-center !gap-2">
                {isLoading && <Loader className="animate-spin" />}
                {isLoading ? "Checking..." : "Check"}
            </Button>
        </>
    )
}
export default HomeGame