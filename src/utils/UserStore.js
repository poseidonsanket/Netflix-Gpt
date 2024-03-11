import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "./UserSlice";
import MoviesReducer from "./MovieSlice";
import GptReducer from "./GptSlice";

const UserStore = configureStore({
  reducer: { user: UserSliceReducer, movies: MoviesReducer, gpt: GptReducer },
});

export default UserStore;
