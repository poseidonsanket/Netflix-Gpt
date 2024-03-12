import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-36 md:w-48 pr-2 relative group overflow-hidden transform transition-transform ease-in-out duration-300 hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={IMG_CDN_URL + poster_path}
        alt="moviecard"
        className="w-full h-auto"
      />

      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-75 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <h2 className="text-2xl font-semibold">{title}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
