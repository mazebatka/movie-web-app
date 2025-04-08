import { MovieImage } from "../movie";
import { getMovieVideosById } from "@/services";
import { TrailerModal } from "./TrailerModal";

type DetailPosterProps = {
  posterPath: string;
  backdropPath: string;
  id: number;
};

export const DetailPoster = async (props: DetailPosterProps) => {
  const { posterPath, backdropPath, id } = props;

  const trailer = await getMovieVideosById(id);

  return (
    <div className="flex gap-x-8 mb-8">
      <MovieImage
        posterPath={posterPath}
        className="hidden lg:flex w-[290px] h-[428px] rounded"
      />

      <div className="relative">
        <div className="absolute inset-0 z-10 bg-black/40 rounded" />

        <MovieImage
          imageWidth="original"
          posterPath={backdropPath}
          className="w-[375px] lg:w-[760px] h-[211px] 
          lg:h-[428px] rounded"
        />

        <div className="absolute left-6 bottom-6 z-20">
          {trailer && <TrailerModal trailer={trailer} />}
        </div>
      </div>
    </div>
  );
};