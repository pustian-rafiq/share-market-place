import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./features/loader.slice";
import usersSlice from "./features/users.slice";

const store = configureStore({
  reducer: {
    loading: loaderSlice,
    user: usersSlice,
  },
});

export default store;
