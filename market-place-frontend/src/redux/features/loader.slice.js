import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loeader",
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
