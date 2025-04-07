import { getMovieDetailById } from "@/services";
import { DetailHeader } from "./DetailHeader";

type DetailsProps = {
    movieId: string;
};

export const Details = (props:DetailsProps) => {
    const { movieId } = props;

    const movieDetail = await getMovieDetailById(movieId);

    if(!movieDetail) return <div>Movie Not Found</div>;

    return (
        <div className="page-primary text-foreground mt-[60px]">
            <DetailHeader movieDetail={movieDetail} />
        </div>
    );
}
