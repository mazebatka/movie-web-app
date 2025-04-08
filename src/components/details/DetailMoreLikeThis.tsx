import { fetchDataFromTMDB } from "@/utils";
import { MovieLists } from "../movie";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui";
import Link from "next/link";

type DetailMoreLikeThisProps = {
  id: number;
};

export const DetailMoreLikeThis = async (props: DetailMoreLikeThisProps) => {
  const { id } = props;

  const response = await fetchDataFromTMDB<MoviesListResponse>(
    `/movie/${id}/similar?language=en-US&page=1`
  );

  const { results } = response;

  if (results.length === 0)
    return (
      <div className="my-8 font-bold text-xl">No Similar Movies Found</div>
    );

  const firstFiveMovies = results.slice(0, 5);

  return (
    <div className="pb-8 lg:pb-[113px]">
      <div className="flex justify-between mb-8">
        <h3 className="text-2xl font-semibold">More Like This</h3>
        <Link href={`/category/${id}/similar`}>
          <Button variant="link">
            See more <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
      <MovieLists
        movies={firstFiveMovies}
        className="lg:gap-8"
        imageHeight="lg:h-[281px]"
        imageWidth="lg:w-[190px]"
      />
    </div>
  );
};