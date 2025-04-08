import { MovieImage } from "../movie";
import { Badge } from "../ui";

type DetailGenresProps = {
  overview: string;
  genres: MovieGenre[];
  posterPath: string;
};

export const DetailGenres = (props: DetailGenresProps) => {
  const { overview, genres, posterPath } = props;

  return (
    <div className="flex gap-x-[34px] lg:block">
      <MovieImage
        posterPath={posterPath}
        className="flex w-[100px] h-[148px] rounded shrink-0 lg:hidden"
      />

      <div className="space-y-5 mb-5">
        <div className="flex flex-wrap gap-3">
          {genres.map((genre, index) => (
            <Badge
              key={index}
              variant="outline"
              className="rounded-full text-xs"
            >
              {genre.name}
            </Badge>
          ))}
        </div>
        <p className="text-base">{overview}</p>
      </div>
    </div>
  );
};