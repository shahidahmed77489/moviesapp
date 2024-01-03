import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPopularMoviesData = createAsyncThunk(
  "fetchPopular",
  async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=8a2de2b52f9dca99b4245cfbe450ccd3"
    );
    return response.data;
  }
);

const popularSlice = createSlice({
  name: "popular",
  initialState: {
    popularmoviedata: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMoviesData.pending, (state) => {
        state.loading = "Loading";
      })
      .addCase(fetchPopularMoviesData.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.popularmoviedata = action.payload;
      })
      .addCase(fetchPopularMoviesData.rejected, (state, action) => {
        state.loading = "Failed";
        state.error = action.error.message;
      });
  },
});

export default popularSlice.reducer;
