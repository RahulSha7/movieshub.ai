import { useDispatch, useSelector } from "react-redux";
import {  addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = useSelector(
    (store) => store.movies.popularMovies
  );

  const popularMovies = async () => {
    const moviesData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=2",
      API_OPTIONS
    );
    const data = await moviesData.json();
   
    dispatch(addPopularMovies(data.results));
  };
  useEffect(() => {
{  /*  !getPopularMovies &&*/}
     popularMovies();
  }, []);
};
export default usePopularMovies;