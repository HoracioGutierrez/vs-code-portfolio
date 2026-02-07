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

