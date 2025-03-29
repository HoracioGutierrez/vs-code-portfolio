"use client";
import MainEditorCodeTab from "@/features/laytout/components/MainEditorCodeTab";
import createTheme from "@uiw/codemirror-themes";
import CodeMirror from "@uiw/react-codemirror";
import { tags as t } from "@lezer/highlight";
import { useParams } from "next/navigation";
import { EditorView } from "@codemirror/view";
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';

export default function Page() {
  const { folder } = useParams();

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
      { tag : t.heading, color: "var(--accent-2)" },
      { tag : t.list, color: "var(--accent-3)" },
      { tag : t.tagName, color: "var(--accent-1)" },
    ],
  });

  const readmes: Record<string, string> = {
    bio: `# Sobre Mi

Un poco sobre mi vida en general.

## TLDR:
tldr: soy un desarrollador web y me gusta Valorant
`,
    intereses: `# Intereses

Por si no fui lo suficientemente autoreferencial, aca te digo que me interesa (?).

## TLDR:
tldr: soy un desarrollador web y me gusta Valorant
`,
    educacion: `# Educación

Te cuento algo sobre mi educacion; si no te gusta no te preocupes, tampoco estudié demasiado.

## TLDR:
tldr: fui abanderado pero me hago el humilde
`,
    experiencia: `# Experiencia

Algo sobre mi experiencia laboral como programador y otros rubros.

## TLDR:
tldr: Si me hablas por privado te digo cual fue el peor trabajo que he hecho.
`,
    habilidades: `# Skills

Te cuento un poco sobre mi stack de programacion y algunos que otros skills ocultos que tengo.

## TLDR:
tldr: Nada que ver una cosa con la otra mis gustos
`,
    proyectos: `# Proyectos

Muestro algunos de mis proyectos, pero me da mucha vergüenza asi que no sean tan haters.

## TLDR:
tldr: Siendo un niño de cristal con mi trabajo
`,
    juegos: `# Gaming

Como me gusta jugar videojuegos, te lo cuento porque ya fue todo; quien te dice armamos un team (ah re, nunca programar un juego).

## TLDR:
tldr: Siendo un niño de cristal con mi trabajo
`,
    viajes: `# Viajes

No se me ocurria otra cosa que me gusta hacer, asi que aca les dejo un poco sobre viajes random que hice.

## TLDR:
tldr: Atlantida <3
`,
  };

  return (
    <MainEditorCodeTab tabTitle="readme.md">
      <CodeMirror
        theme={customTheme}
        className="w-full outline-none border-none"
        basicSetup={{
          autocompletion: true,
        }}
        value={readmes[folder as string]}
        height="100%"
        extensions={[markdown({ base: markdownLanguage, codeLanguages: languages , completeHTMLTags : true }), EditorView.lineWrapping]}
      />
    </MainEditorCodeTab>
  );
}
