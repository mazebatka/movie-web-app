"use client";
import { useFetchDataFromTMDB } from "@/hooks";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui";

type MovieGenre={
    id:number;
    name:string;
}
type MovieGenresResponse={
    genres:MovieGenre[];
}

export const AllMoviesGenres = () => {
    const {data,isLoading}=useFetchDataFromTMDB<MovieGenresResponse>('/genre/movie/list');

    if(isLoading) return <div>Loading...</div>

    const genres=data?.genres || [];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {genres.map((genre, index) => (
          <div
            key={index}>
            <Button variant="outline" size="default" className="flex items-center justify-between gap-x-20px">
            {genre.name}
            <ChevronRight className="w-5 h-5 text-gray-600" />
            </Button>
            
          </div>
        ))}
      </div>
    )
    
    }