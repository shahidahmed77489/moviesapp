import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1&api_key=8a2de2b52f9dca99b4245cfbe450ccd3"
  );
  return response.data;
});

const trendingSlice = createSlice({
  name: "trending",
  initialState: {
    trendingmoviedata: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = "Loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.trendingmoviedata = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = "Failed";
        state.error = action.error.message;
      });
  },
});

export default trendingSlice.reducer;
