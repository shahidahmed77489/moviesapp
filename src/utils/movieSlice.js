import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovieData = createAsyncThunk(
  "movie",
  async (paginationValue) => {
    console.log(paginationValue);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${paginationValue}&api_key=8a2de2b52f9dca99b4245cfbe450ccd3`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
const movieSlice = createSlice({
  name: "movieContent",
  initialState: {
    getMovieData: [],
    loading: "idle",
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieData.pending, (state) => {
        state.loading = "Loading";
      })
      .addCase(fetchMovieData.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.getMovieData = action.payload;
      })
      .addCase(fetchMovieData.rejected, (state, action) => {
        state.loading = "Failed";
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
