"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getProjectsByFilter } from "../actions/getProjectsByFilter";
import useProjectsStore from "../stores/useProjectsStore";
import { defaultFilters } from "../lib/utils";
import Form from "next/form";
import { useSearchParam } from "react-use";
import { useRouter, useSearchParams } from "next/navigation";

export default function Trabajos() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleChange = async (e: any) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    const value = e.target.value;
    const isChecked = e.target.checked;

    const currentFilters = newSearchParams.get("filter")?.split(",") || [];

    if (isChecked) {
      if (!currentFilters.includes(value)) {
        currentFilters.push(value);
      }
    } else {
      const index = currentFilters.indexOf(value);
      if (index > -1) {
        currentFilters.splice(index, 1);
      }
    }

    if (currentFilters.length > 0) {
      newSearchParams.set("filter", currentFilters.join(","));
    } else {
      newSearchParams.delete("filter");
    }

    router.push(`?${newSearchParams.toString()}`, { scroll: false });
  };

  return (
    <div>
      <Form action="" className="flex flex-col gap-4">
        {defaultFilters.map((filter) => (
          <div key={filter.value} className="flex items-center gap-4">
            <input
              type="checkbox"
              value={filter.value}
              id={filter.value}
              name={filter.value}
              className="size-4 accent-accent-2"
              onChange={handleChange}
            />
            <label htmlFor={filter.value} className="flex items-center gap-4">
              {filter.icon && (
                <Image
                  src={filter.icon}
                  alt={filter.label}
                  width={20}
                  height={20}
                  className="aspect-square"
                />
              )}
              {filter.label}
            </label>
          </div>
        ))}
      </Form>
    </div>
  );
}
