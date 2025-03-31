import { CATEGORY_NAMES } from "@/constants";
import { fetchDataFromTMDB } from "@/utils";
import { AxiosError } from "axios";

type CategoryMoviesRequest = {
  page: number;
  segments: string[];
};

export const getMoviesByCategory = async ({
  page,
  segments,
}: CategoryMoviesRequest) => {
  const categoryPath = segments.join("/");
  const lastCategoryName = segments[segments.length - 1];
  const formattedCategoryName = lastCategoryName.replace(/_/g, " ");

  try {
    const { results: movies, total_pages: totalPages } =
      await fetchDataFromTMDB<MoviesListResponse>(
        `/movie/${categoryPath}?language=en-US&page=${page}`
      );

    const categoryTitle = CATEGORY_NAMES.
    includes(String(formattedCategoryName))
      ? formattedCategoryName
      : "More Like This";

    return { movies, totalPages, categoryTitle };
  } catch (error: unknown) {
    const { message, response } = error as AxiosError;

    console.error(`Failed to fetch the data due to ${message}`, {
      data: response?.data,
      status: response?.status,
    });
  }
};