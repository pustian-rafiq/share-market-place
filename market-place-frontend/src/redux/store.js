import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./features/loader.slice";

const store = configureStore({
  reducer: {
    loading: loaderSlice,
  },
});

export default store;
