import React from "react";
import { Carousel } from "../carousel";
import { MoviesListByCategory } from "./MoviesListByCategory";
import { movieCategories } from "@/constants";

export const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Carousel />
      {movieCategories.map((category, index) => (
        <MoviesListByCategory key={index} {...category} />
      ))}
    </div>
  );
};