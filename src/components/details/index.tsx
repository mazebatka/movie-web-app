import { DetailHeader } from "./DetailHeader";
import { DetailPoster } from "./DetailPoster";
import { DetailGenres } from "./DetailGenres";
import { DetailCredits } from "./DetailCredits";
import { DetailMoreLikeThis } from "./DetailMoreLikeThis";
import { getMovieDetailById } from "@/services";

type DetailsProps = {
  movieId: string;
};

export const Details = async (props: DetailsProps) => {
  const { movieId } = props;

  const movieDetail = await getMovieDetailById(movieId);

  if (!movieDetail) return <div>Movie not found</div>;

  const { backdrop_path, poster_path, id, overview, genres } = movieDetail;

  return (
    <div className="page-detail text-foreground">
      <DetailHeader movieDetail={movieDetail} />
      <DetailPoster
        backdropPath={backdrop_path}
        posterPath={poster_path}
        id={id}
      />

      <div className="px-5 lg:px-0">
        <DetailGenres
          overview={overview}
          genres={genres}
          posterPath={poster_path}
        />

        <DetailCredits id={id} />
        <DetailMoreLikeThis id={id} />
      </div>
    </div>
  );
};
