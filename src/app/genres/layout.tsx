import { GenreOrSearch } from "@/components";
import { Suspense } from "react";

export const metadata = {
  title: "Filter Your Favorite Movies by Genre",
  description: "Dive into a world of movies",
};

const MovieGenres = (props: ParralelRoutesLayoutProps) => {
  const { genres, movies } = props;

  return (
    <Suspense>
      <GenreOrSearch
        wrapperTitle="Genre Filter"
        title="Genres"
        genres={genres}
        movies={movies}
      />
    </Suspense>
  );
};

export default MovieGenres;