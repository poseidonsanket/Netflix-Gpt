import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/MovieSlice";
import { TMDB_KEY } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=" + TMDB_KEY
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
