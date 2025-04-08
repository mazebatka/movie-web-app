import Link from "next/link";
import { MovieImage } from "./MovieImage";
import { Vote } from "../common";
import { ClassValue } from "clsx";
import { cn } from "@/lib";

type MovieListCardProps = {
  movie: MovieDetail;
  imageHeight?: ClassValue;
  imageWidth?: ClassValue;
};

export const MovieListCard = (props: MovieListCardProps) => {
  const { movie, imageHeight, imageWidth } = props;
  return (
    <Link
      href={`/details/${movie.id}`}
      className={cn(
        "overflow-hidden rounded-lg bg-secondary space-y-1 w-[157.5px] lg:w-[230px]",
        imageHeight,
        imageWidth
      )}
    >
      <MovieImage
        posterPath={movie.poster_path}
        imageWidth="original"
        className={cn(
          "w-[157.5px] h-[234px] lg:w-[230px] lg:h-[340px]",
          imageHeight,
          imageWidth
        )}
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