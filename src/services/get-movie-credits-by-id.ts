import { fetchDataFromTMDB } from "@/utils"
import { getNamesByRole } from "@/utils/credits";

export const getMovieCreditsById = async (movieId: number) => {
    try{
        const {cast, crew} = await fetchDataFromTMDB<MovieCreditsResponse>(`/movie/${movieId}/credits?language=en-US`);


        const actors = getNamesByRole(cast, "Acting");
        const directors = getNamesByRole(crew, "Directing");
        const writers = getNamesByRole(crew, "Writing");

        return {
            actors,
            directors,
            writers
        };
    } catch (error) {
        console.error("Error fetching movie credits:", error);     
}
};
