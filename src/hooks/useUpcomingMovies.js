import { useDispatch, useSelector } from "react-redux";
import {  addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = useSelector(
    (store) => store.movies.upcomingMovies
  );

  const upcomingMovies = async () => {
    const moviesData = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const data = await moviesData.json();
   
    dispatch(addUpcomingMovies(data.results));
  };
  useEffect(() => {
   !getUpcomingMovies && upcomingMovies();
  }, []);
};
export default useUpcomingMovies;