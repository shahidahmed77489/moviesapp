import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSimiliarMovies = createAsyncThunk(
  "similiarMovies",
  async (id) => {
    console.log(id);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1&api_key=8a2de2b52f9dca99b4245cfbe450ccd3`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const SimiliarSlice = createSlice({
  name: "similiarMovies",
  initialState: {
    similiarMoviesData: [],
    loading: "",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSimiliarMovies.pending, (state) => {
        state.loading = "Loading";
      })
      .addCase(fetchSimiliarMovies.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.similiarMoviesData = action.payload;
      })
      .addCase(fetchSimiliarMovies.rejected, (state, action) => {
        state.loading = "Failed";
        state.error = action.error.message;
      });
  },
});

export const { findId } = SimiliarSlice.actions;
export default SimiliarSlice.reducer;
