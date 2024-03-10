import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailerId = useTrailerVideo(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailerId + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
