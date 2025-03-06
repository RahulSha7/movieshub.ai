import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearch = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Dhamaal, Interstellar, Hera Pheri, Golmaal, Dune";

    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-4o-mini",
    });

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // For each movie I will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie)); //async fn take some to execute
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-full md:w-1/2 grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type=" text"
          className=" p-2 m-4 col-span-9   "
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button
          className="col-span-3 bg-red-500 rounded-lg m-4"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
