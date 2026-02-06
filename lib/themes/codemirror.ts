import createTheme from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

export type ThemeVariant = "default" | "transparent";

const baseStyles = [
    { tag: t.comment, color: "var(--muted-foreground)" },
    { tag: t.variableName, color: "var(--accent-2)" },
    { tag: t.string, color: "var(--accent-3)" },
    { tag: t.keyword, color: "var(--accent-1)" },
];

const extendedStyles = [
    ...baseStyles,
    { tag: t.heading, color: "var(--accent-2)" },
    { tag: t.list, color: "var(--accent-3)" },
    { tag: t.tagName, color: "var(--accent-1)" },
];

const backgrounds: Record<ThemeVariant, string> = {
    default: "var(--primary)",
    transparent: "rgba(0, 0, 0, 0.5)",
};

export function createCodeMirrorTheme(variant: ThemeVariant = "default", extended = false) {
    return createTheme({
        theme: "dark",
        settings: {
            background: backgrounds[variant],
            gutterBackground: "var(--primary)",
            gutterActiveForeground: "var(--accent-3)",
            gutterForeground: "var(--muted-foreground)",
            fontSize: "16px",
        },
        styles: extended ? extendedStyles : baseStyles,
    });
}

export const defaultTheme = createCodeMirrorTheme("default", false);
export const extendedTheme = createCodeMirrorTheme("default", true);
export const transparentTheme = createCodeMirrorTheme("transparent", true);
