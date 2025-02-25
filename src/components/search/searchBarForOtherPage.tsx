"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { SearchInput } from "./SearchInput";
import { SearchResultList } from "./SearchResultList";

type SearchBarForOtherPageProps = { isMobile: boolean };

export const SearchBarForOtherPage = ({
  isMobile,
}: SearchBarForOtherPageProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
  };
console.log(searchValue)

  const removeSearchValue = () => setSearchValue("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        removeSearchValue();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={searchInputRef}>
      <SearchInput
        isMobile={isMobile}
        searchValue={searchValue}
        handleChange={handleChange}
      />

      {searchValue && (
        <SearchResultList
          searchValue={searchValue}
          removeSearchValue={removeSearchValue}
        />
      )}
    </div>
  );
};