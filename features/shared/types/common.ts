import { ReactNode } from "react";

// Tipos base reutilizables para children
export type WithChildren<T = object> = T & {
  children?: ReactNode;
};

export type WithRequiredChildren<T = object> = T & {
  children: ReactNode;
};

// Tipo base para className
export type WithClassName<T = object> = T & {
  className?: string;
};

// Patrón común para links de navegación
export type NavigationLink = {
  id: number;
  label: string;
  href: string;
};

// Patrón para respuestas de API/server actions
export type ApiResponse<T> = {
  error: boolean;
  message: string;
  payload: T;
};

// Tipo para callbacks de CodeMirror onChange
// ViewUpdate viene de @codemirror/view
export type CodeMirrorOnChange = (value: string, viewUpdate: unknown) => void;

// Tipos de eventos comunes de React
export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type TextAreaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;
export type FormEvent = React.FormEvent<HTMLFormElement>;
