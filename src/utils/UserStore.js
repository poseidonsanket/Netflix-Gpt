import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "./UserSlice";
import MoviesReducer from "./MovieSlice";

const UserStore = configureStore({
  reducer: { user: UserSliceReducer, movies: MoviesReducer },
});

export default UserStore;
