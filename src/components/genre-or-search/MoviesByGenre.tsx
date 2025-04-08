"use client";

import { useMoviesByGenre } from "@/hooks";
import { MovieLists } from "../movie";
import { DynamicPagination } from "../common";
import { NoResultFound } from "./NoResultFound";
import { Loading } from "./Loading";

export const MoviesByGenre = () => {
  const { isLoading, movies, totalPages, totalResults }
  = useMoviesByGenre();

  if (isLoading) return <Loading />;

  if (!totalResults) return <NoResultFound />;

  return (
    <div className="flex-1 space-y-8 lg:pr-12">
      <h4 className="text-xl text-foreground font-semibold">
        {totalResults} titles
      </h4>

      <MovieLists
        movies={movies}
        className="lg:gap-x-12 lg:gap-y-8"
        imageHeight="lg:h-[244px]"
        imageWidth="lg:w-[164px]"
      />

      <DynamicPagination totalPages={totalPages} />
    </div>
  );
};