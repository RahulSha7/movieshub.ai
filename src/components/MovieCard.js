import React from "react";
import { IMG_CDN } from "../utils/constants";
import useTrailerVideo from "../hooks/useTrailerVideo";

const MovieCard = ({ posterPath,movieId }) => {
  // useTrailerVideo(movieId);
  if(!posterPath) return null;
  console.log(movieId)
 
  const movieCardtrailer =()=>{
  
  }
  return (
    <div className="w-[180px] min-w-[180px]"> {/* Ensure all cards have a proper width */}
      <img 
      onClick={movieCardtrailer}
        className="w-36 h-auto rounded-lg"
        alt="Movie Card"
        src={IMG_CDN + posterPath}
      />
    </div>
  );
};

export default MovieCard;
