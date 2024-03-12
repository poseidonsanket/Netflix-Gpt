import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/MovieSlice";
import { TMDB_KEY } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=" + TMDB_KEY
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
