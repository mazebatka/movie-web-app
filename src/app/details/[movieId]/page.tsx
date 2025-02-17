import React from "react";
import {Button} from "@/components/ui";
import { Suspense } from "react";

type MovieRouteParams = {
    params: {
        movieId: string;
    };
};

const MovieDetails= async ({params}:MovieRouteParams)=>{
    const {movieId} = await params;

    return <Suspense>
    <Button>Shadcn Button</Button>
    <h1>Movie Details</h1>
    <p>ID:{movieId}</p>
    </Suspense>;
};

export default MovieDetails;
