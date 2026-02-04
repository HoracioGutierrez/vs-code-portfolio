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
