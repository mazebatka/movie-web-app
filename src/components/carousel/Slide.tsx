import Link from "next/link";
import { MovieImage } from "../movie";

type SlideProp = {
  movie: MovieDetail;
};

export const Slide = ({ movie }: SlideProp) => {
  const { id, backdrop_path } = movie;

  return (
    <div className="relative">
      <Link href={`details/${id}`}>
        <MovieImage
          imageWidth="original"
          posterPath={backdrop_path}
          className="h-[246px] lg:h-[600px]"
        />
      </Link>
    </div>
  );
};