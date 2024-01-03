import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const placeholderMovieId = 872585;
export const fetchTrailerData = createAsyncThunk("trailer", async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${placeholderMovieId}?language=en-US&api_key=8a2de2b52f9dca99b4245cfbe450ccd3`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

const TrailerSlice = createSlice({
  name: "trailer",
  initialState: {
    storeTrailerData: [],
    loading: "",
    error: null,
  },
  reducers: {
    findId(state, action) {
      console.log(state);
      const movieId = action.payload;
      console.log("Received movie ID:", movieId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrailerData.pending, (state) => {
        state.loading = "Loading";
      })
      .addCase(fetchTrailerData.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.storeTrailerData = action.payload;
      })
      .addCase(fetchTrailerData.rejected, (state, action) => {
        state.loading = "Failed";
        state.error = action.error.message;
      });
  },
});

export const { findId } = TrailerSlice.actions;
export default TrailerSlice.reducer;
