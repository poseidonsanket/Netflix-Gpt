import React from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/GptSlice";
import { TMDB_KEY } from "../utils/constants";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const supportedLanguage = useSelector((store) => store.lang.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1&api_key=" +
        TMDB_KEY
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }

    console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // For each movie I will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center bg-gradient-to-b from-black">
      <div className="w-screen flex justify-center ">
        <form
          className="w-1/2 grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 col-span-9"
            placeholder={language[supportedLanguage].gptSearchPlaceHolder}
          />
          <button
            className="py-2 px-4 m-4 rounded-lg bg-red-700 text-white col-span-3 text-2xl"
            onClick={handleGptSearchClick}
          >
            {language[supportedLanguage].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
