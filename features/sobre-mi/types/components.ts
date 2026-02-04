import { ReactNode } from "react";

export type LoadingProps = {
  count?: number;
};

export type MainCategoryLinkProps = {
  children: ReactNode;
  href: string;
};

// Tipos para la estructura de archivos y carpetas del sidebar
export type SobreMiFile = {
  title: string;
  href: string;
};

export type SobreMiFolder = {
  folderTitle: string;
  parentPath: string;
  folderColor: string;
  files: SobreMiFile[];
};

export type FolderAccordionProps = {
  folder: SobreMiFolder;
};
