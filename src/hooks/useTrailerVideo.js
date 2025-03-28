import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store)=>store.movies.trailerVideos)
  useEffect(() => {
 getMoviesVideos();
  }, []);

  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
  
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
   
    dispatch(addTrailerVideo(trailer));
  };
};

export default useTrailerVideo;
