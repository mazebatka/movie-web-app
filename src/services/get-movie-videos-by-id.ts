import { fetchDataFromTMDB } from "@/utils";

export const getMovieVideosById = async (movieId: number) => {
    try{
        const {results}= await fetchDataFromTMDB<MovieVideosResponse>(
            `/movie/${movieId}/videos?language=en-US`);

        const movieTrailer = results.find((video) => video.type === "Trailer") as VideoDetails;
        return movieTrailer;
    } catch (error) {
        console.error("Error fetching movie details:", error);
    }
};