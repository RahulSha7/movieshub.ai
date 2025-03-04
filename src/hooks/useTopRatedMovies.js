import { useDispatch } from "react-redux";
import {   addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = async () => {
    const moviesData = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const data = await moviesData.json();
   
    dispatch(addTopRatedMovies(data.results));
  };
  useEffect(() => {
    topRatedMovies();
  }, []);
};
export default useTopRatedMovies;