import { fetchDataFromTMDB } from "@/utils";

export const getMovieDetailById = async (movieId: string) => {
    try{
        const movieDetail= await fetchDataFromTMDB<MovieDetail>(
            `/movie/${movieId}?language=en-US`);
        return movieDetail;
    } catch (error) {
        console.error("Error fetching movie details:", error);
    }
};