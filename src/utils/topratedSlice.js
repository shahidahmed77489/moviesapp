import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTopRatedMovies = createAsyncThunk(
  "toprated/fetch",
  async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=8a2de2b52f9dca99b4245cfbe450ccd3"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const topRatedSlice = createSlice({
  name: "toprated",
  initialState: {
    toprateddata: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.toprateddata = action.payload;
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export default topRatedSlice.reducer;
