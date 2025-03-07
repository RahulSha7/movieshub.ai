import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const playingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const nowPlayingMovies = async () => {
    const moviesData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );
    const data = await moviesData.json();
   
    dispatch(addNowPlayingMovies(data.results));
  };
  useEffect(() => {
  {  /* !playingMovies &&*/}
     nowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;