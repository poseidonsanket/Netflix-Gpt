import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/MovieSlice";

const useTrailerVideo = (movieId) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=fb7bb23f03b6994dafc674c074d01761`
    );
    const json = await data.json();
    console.log(json.results);

    const filteredData = json.results.filter(
      (video) => video.name == "Official Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  const trailerId = trailerVideo?.key;
  return trailerId;
};

export default useTrailerVideo;
