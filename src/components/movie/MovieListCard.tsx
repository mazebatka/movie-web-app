import Link from "next/link";
import { MovieImage } from "./MovieImage";
import { Vote } from "../common";

type MovieListCardProps = {
  movie: MovieDetail;
};

export const MovieListCard = (props: MovieListCardProps) => {
  const { movie } = props;
  return (
    <Link
      href={`/details/${movie.id}`}
      className="overflow-hidden rounded-lg bg-secondary space-y-1 w-[157.5px] lg:w-[230px]"
    >
      <MovieImage
        posterPath={movie.backdrop_path}
        imageWidth="original"
        className={"w-[157.5px] h-[234px] lg:w-[230px] lg:h-[340px]"}
      />

      <div className="p-2">
        <Vote voteAverage={movie.vote_average} />
        <h4 className="h-14 text-lg text-foreground overflow-hidden text-ellipsis line-clamp-2">
          {movie.original_title}
        </h4>
      </div>
    </Link>
  );
};