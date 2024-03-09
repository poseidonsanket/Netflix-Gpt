import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "./UserSlice";

const UserStore = configureStore({
  reducer: { user: UserSliceReducer },
});

export default UserStore;
