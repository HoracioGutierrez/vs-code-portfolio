import { ChangeEvent } from "react";

export type FilterOption = {
  label: string;
  value: string;
  icon?: string;
};

export type FilterItemProps = {
  filter: FilterOption;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type SidebarFile = {
  title: string;
  href: string;
};

export type SidebarFolder = {
  name: string;
  color: string;
  files: SidebarFile[];
};

export type AccordionCategory = {
  folders: SidebarFolder[];
};

export type AccordionItems = {
  profesional: AccordionCategory;
  personal: AccordionCategory;
  hobbies: AccordionCategory;
};

export type AccordionType = keyof AccordionItems;
