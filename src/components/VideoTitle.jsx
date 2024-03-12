import React from "react";
import { IoPlay } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold mb-2 md:m-0">{title}</h1>
      <p className="hidden md:inline-block text-lg py-6 w-1/4">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-white text-black py-1 px-2 md:py-3 md:px-10 text-xl flex items-center rounded-md hover:bg-opacity-75">
          <span>
            <IoPlay className="mx-1" />
          </span>
          Play
        </button>
        <button className="bg-gray-600 text-white py-3 px-10 text-xl  items-center rounded-md hover:bg-opacity-75 hidden md:flex">
          <span>
            <FaInfoCircle className="mx-1" />
          </span>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

// https://api.themoviedb.org/3/movie/{movie_id}/videos
