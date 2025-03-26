import { MovieListCard } from "./MovieListCard";

type MovieListsProps = {
  movies: MovieDetail[];
};

export const MovieLists = (props: MovieListsProps) => {
  const { movies } = props;
  return (
    <div className="flex flex-wrap gap-6">
      {movies.map((movie, index) => (
        <MovieListCard key={index} movie={movie} />
      ))}
    </div>
  );
};