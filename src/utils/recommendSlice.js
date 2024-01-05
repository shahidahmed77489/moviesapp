import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecommendMovies = createAsyncThunk(
  "recommendMovies",
  async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/670292/recommendations?language=en-US&page=1&api_key=8a2de2b52f9dca99b4245cfbe450ccd3`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const recommendSlice = createSlice({
  name: "recommendMovies",
  initialState: {
    loading: "idle",
    recommendMoviesData: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendMovies.pending, (state) => {
        state.loading = "Loading";
      })
      .addCase(fetchRecommendMovies.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.recommendMoviesData = action.payload;
      })
      .addCase(fetchRecommendMovies.rejected, (state, action) => {
        state.loading = "Failed";
        state.error = action.error.message;
      });
  },
});

export default recommendSlice.reducer;
