import React, { useRef, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const MovieList = ({ title, movies }) => {
  const [isScroll, setIsScroll] = useState(false);
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);

  useEffect(() => {
    // Add event listener to check scroll position
    const handleScroll = () => {
      if (scrollRef.current.scrollLeft === 0) {
        setIsAtStart(true);
      } else {
        setIsAtStart(false);
      }
    };
    scrollRef.current.addEventListener("scroll", handleScroll);
  }, []);

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200, // Adjust this value as needed to control the scroll distance
      behavior: "smooth",
    });
    setIsAtStart(false);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-6">
      <h1 className="text-lg md:text-4xl py-4 text-white">{title}</h1>
      {!isAtStart && (
        <div className="flex justify-start ">
          <MdKeyboardArrowLeft
            className="text-red-800 text-9xl z-10 absolute mt-8 md:mt-20"
            onClick={scrollLeft}
          />
        </div>
      )}
      <div className="flex justify-end">
        <MdKeyboardArrowRight
          className="text-red-800 text-9xl z-10 absolute mt-8 md:mt-20"
          onClick={scrollRight}
        />
      </div>

      <div className="flex overflow-x-auto no-scrollbar" ref={scrollRef}>
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
