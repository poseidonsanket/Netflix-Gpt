import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "./UserSlice";
import MoviesReducer from "./MovieSlice";
import GptReducer from "./GptSlice";
import LangReducer from "./LanguageSlice";

const UserStore = configureStore({
  reducer: {
    user: UserSliceReducer,
    movies: MoviesReducer,
    gpt: GptReducer,
    lang: LangReducer,
  },
});

export default UserStore;
