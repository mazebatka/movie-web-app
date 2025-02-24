import { MovieZLogo } from "@/components/common";
import { GenreDropdown, SearchBar } from "@/components";
import { ThemeToggleButton } from "./ThemeToggleButton";

export const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-20 h-[59px] bg-background flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-screen-xl px-5 lg:px-0">
        <MovieZLogo className="text-indigo-700" />

        <div className="relative hidden lg:flex items-center gap-x-3">
          <GenreDropdown />
          <SearchBar isMobile={false} />
        </div>

        <div className="flex items-center gap-x-3">
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};