"use client"
import MainEditorCodeTab from "@/features/laytout/components/MainEditorCodeTab";
import createTheme from "@uiw/codemirror-themes";
import CodeMirror from '@uiw/react-codemirror';
import { tags as t } from '@lezer/highlight';
import { javascript } from '@codemirror/lang-javascript';
import { useParams } from "next/navigation";

type SobreMiPageProps = {
    params: Promise<{
        folder: string
    }>
}

export default function Page() {


    const { folder } = useParams()

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


    const readmes: any = {
        "bio": `/*
* Un poco sobre mi vida en general. 
*
* tldr: soy un desarrollador web y me gusta Valorant
*/`,
        "intereses": `/*
* Por si no fui lo suficientemente autoreferencial, 
* aca te digo que me interesa (?). 
*
* tldr: soy un desarrollador web y me gusta Valorant
*/`,
        "educacion": `/*
* Te cuento algo sobre mi educacion; si no te gusta no te preocupes, 
* tampoco estudié demasiado.
*
* tldr: fui abanderado pero me hago el humilde
*/`,
        "experiencia": `/*
* Algo sobre mi experiencia laboral como programador
* y otros rubros.
* 
* tldr: Si me hablas por privado te digo cual fue el peor
* trabajo que he hecho.
*/`,
        "habilidades": `/*
* Te cuento un poco sobre mi stack de programacion y algunos
* que otros skills ocultos que tengo.
* 
* tldr: Nada que ver una cosa con la otra mis gustos
*
*/`,
        "proyectos": `/*
* Muestro algunos de mis proyectos, pero me da mucha 
* vergüenza asi que no sean tan haters.
* 
* tldr: Siendo un niño de cristal con mi trabajo
*
*/`,
        "juegos": `/*
* Como me gusta jugar videojuegos, te lo cuento porque 
* ya fue todo; quien te dice armamos un team (ah re, nunca
* programar un juego)
* 
* tldr: Siendo un niño de cristal con mi trabajo
*
*/`,
        "viajes": `/*
* No se me ocurria otra cosa que me gusta hacer,
* asi que aca les dejo un poco sobre viajes random que 
* hice 
* 
* tldr: Atlantida <3
*
*/`,
    }

    return (
        <MainEditorCodeTab tabTitle="readme.md">
            <CodeMirror
                theme={customTheme}
                className='w-full outline-none border-none'
                basicSetup={{
                    autocompletion: true
                }}
                value={readmes[folder as string]}
                height="100%"
                extensions={[javascript({ jsx: true })]}
            />
        </MainEditorCodeTab>
    );
}