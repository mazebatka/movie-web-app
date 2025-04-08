import { Category } from "@/components";
import {Suspense} from "react";

const MovieCategory= async ({params,searchParams}:
    PageRouteParams)=>{
    const {segments}= await params;
    const {page="1"}= await searchParams;
    
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Category page={Number(page)} segments={segments} />
        </Suspense>
    );
    };
    export default MovieCategory;