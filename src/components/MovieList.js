import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return <h1 className="text-center text-red-500">No movies available.</h1>;
  }

  return (
    <div className="px-6  w-full  ">
      <h1 className="text-2xl py-6 text-white">{title}</h1>
      
      <div className="relative w-full">
        <div className="w-full overflow-x-scroll scrollbar-hide whitespace-nowrap">
          <div className="flex  space-x-4 w-max ">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
