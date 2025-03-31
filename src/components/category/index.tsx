import { getMoviesByCategory } from "@/services";
import {MovieLists} from "../movie";
import { DynamicPagination } from "../common";

type CategoryProps = {
    page: number;
    segments: string[];
};

export const Category = async (props: CategoryProps) => {
    const {page,segments}=props;

    const response  = await getMoviesByCategory({page, segments});

    if(!response){
        return <div>No Result Found</div>
    }

    const {categoryTitle , movies , totalPages}=response;

    return(
        <div className="flex flex-col item-center justify-center m-[20px] page-primary pt-[59px] pb-8 lg:pb-[76px] space-y-8">
            <h2 className="mt-8 text-2xl font-medium capitalize text-foreground lg:mt-[52px] lg:text-3xl">{categoryTitle}</h2>
            <MovieLists movies={movies} />
            <DynamicPagination totalPages={totalPages}/>
        </div>
    );
};

