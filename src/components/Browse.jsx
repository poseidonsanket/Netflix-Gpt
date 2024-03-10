import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/MovieSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="flex justify-between">
      <Header />
    </div>
  );
};

export default Browse;
