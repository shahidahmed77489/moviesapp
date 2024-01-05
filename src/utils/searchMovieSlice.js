import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearchMovies = createAsyncThunk(
  "searchMovies",
  async (movieName) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${movieName}&api_key=8a2de2b52f9dca99b4245cfbe450ccd3`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const searchMoviesSlice = createSlice({
  name: "searchmovie",
  initialState: {
    loading: "idle",
    searchMovieData: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchMovies.pending, (state) => {
        state.loading = "Loading";
      })
      .addCase(fetchSearchMovies.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.searchMovieData = action.payload;
      })
      .addCase(fetchSearchMovies.rejected, (state, action) => {
        state.loading = "Rejected";
        state.error = action.error.message;
      });
  },
});
export default searchMoviesSlice.reducer;
