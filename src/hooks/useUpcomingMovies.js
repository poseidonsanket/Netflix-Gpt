import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/MovieSlice";
import { TMDB_KEY } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=" + TMDB_KEY
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
