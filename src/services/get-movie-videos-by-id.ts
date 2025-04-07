import { fetchDataFromTMDB } from "@/utils";

export const getMovieVideosById = async (movieId: string) => {
    try{
        const {results}= await fetchDataFromTMDB<MovieVideosResponse>(
            `/movie/${movieId}?language=en-US`);

        const movieTrailer = results.find((video) => video.type === "Trailer");
        return movieTrailer;
    } catch (error) {
        console.error("Error fetching movie details:", error);
    }
};