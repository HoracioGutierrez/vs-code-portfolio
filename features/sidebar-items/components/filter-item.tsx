"use client";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useTransition } from "react";

interface FilterItemProps {
  filter: {
    label: string;
    value: string;
    icon?: string;
  };
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FilterItem({ filter, checked, onChange }: FilterItemProps) {
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      onChange(e);
    });
  };

  return (
    <div
      className={`flex items-center rounded-full px-3 py-1.5 md:p-0 transition-colors duration-200 gap-4
        ${
          checked
            ? "bg-accent-2/10 md:bg-transparent hover:bg-accent-2/20"
            : "hover:bg-accent-1/10 md:hover:bg-transparent"
        }`}
    >
      <input
        type="checkbox"
        value={filter.value}
        id={filter.value}
        name={filter.value}
        className="hidden md:block md:size-4 md:accent-accent-2"
        onChange={handleChange}
        checked={checked}
      />
      <label
        htmlFor={filter.value}
        className="flex cursor-pointer items-center gap-2 md:gap-4"
      >
        {filter.icon && !isPending && (
          <Image
            src={filter.icon}
            alt={filter.label}
            width={20}
            height={20}
            className="aspect-square"
          />
        )}
        {isPending && <Loader className="animate-spin size-5" />}
        <span className="text-sm md:text-base">{filter.label}</span>
      </label>
    </div>
  );
}
