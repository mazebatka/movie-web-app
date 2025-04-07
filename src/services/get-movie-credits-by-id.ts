import { fetchDataFromTMDB } from "@/utils"
import { getNamesByRole } from "@/utils/credits";

export const getMovieCreditsById = async (movieId: string) => {
    try{
        const {cast, crew} = await fetchDataFromTMDB<MovieCreditsResponse>(`/movie/${movieId}/credits?language=en-US`);

        const actors = getNamesByRole(cast, "Acting");
        const directors = getNamesByRole(crew, "Director");
        const writers = getNamesByRole(crew, "Writer");

        return {
            actors,
            directors,
            writers
        };
    } catch (error) {
        console.error("Error fetching movie credits:", error);     
}
};
