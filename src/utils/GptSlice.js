import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    clearMovieResults : (state,action) => {
      state.movieNames = null;
      state.movieResults = null;
    }
  },
});

export default GptSlice.reducer;
export const { toggleGptSearchView, addGptMovieResult,clearMovieResults } = GptSlice.actions;
