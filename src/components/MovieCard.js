import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-[180px] min-w-[180px]"> {/* Ensure all cards have a proper width */}
      <img
        className="w-40 h-auto rounded-lg"
        alt="Movie Card"
        src={IMG_CDN + posterPath}
      />
    </div>
  );
};

export default MovieCard;
