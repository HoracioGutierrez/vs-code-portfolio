"use client";
import { useEffect, useState } from "react";
import { defaultFilters } from "../lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "next/form";
import { FilterItem } from "./filter-item";

export default function Trabajos() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [checkedFilters, setCheckedFilters] = useState<string[]>([]);

  useEffect(() => {
    const currentFilters = searchParams.get("filter")?.split(",") || [];
    setCheckedFilters(currentFilters);
  }, [searchParams]);

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
      <Form
        action=""
        className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-3"
      >
        {defaultFilters.map((filter) => (
          <FilterItem
            key={filter.value}
            filter={filter}
            checked={checkedFilters.includes(filter.value)}
            onChange={handleChange}
          />
        ))}
      </Form>
    </div>
  );
}
