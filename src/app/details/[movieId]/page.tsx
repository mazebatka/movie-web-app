import { Suspense } from "react";
import React from "react";
import { Details } from "@/components";

type MovieRouteParams = {
  params: {
    movieId: string;
  };
};

const MovieDetails = async ({ params }: MovieRouteParams) => {
  const { movieId } = await params;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Details movieId={movieId}/>
    </Suspense>
  );
};

export default MovieDetails;