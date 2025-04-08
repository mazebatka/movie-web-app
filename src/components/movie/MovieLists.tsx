import { ClassValue } from "clsx";
import { MovieListCard } from "./MovieListCard";
import { cn } from "@/lib";

type MovieListsProps = {
  movies: MovieDetail[];
  className?: ClassValue;
  imageHeight?: ClassValue;
  imageWidth?: ClassValue;
};

export const MovieLists = (props: MovieListsProps) => {
  const { movies, imageHeight, imageWidth, className } = props;
  return (
    <div className={cn("flex flex-wrap gap-6", className)}>
      {movies.map((movie, index) => (
        <MovieListCard
          key={index}
          movie={movie}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
        />
      ))}
    </div>
  );
};