import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/MovieSlice";
import { TMDB_KEY } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=" + TMDB_KEY
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
