import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTvData = createAsyncThunk("tv", async (pagination) => {
  try {
    const response = await axios.get(
      //   `https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=${pagination}&api_key=8a2de2b52f9dca99b4245cfbe450ccd3`
      `https://api.themoviedb.org/3/discover/tv?language=en-US&page=${pagination}&api_key=8a2de2b52f9dca99b4245cfbe450ccd3`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

const tvSlice = createSlice({
  name: "tv",
  initialState: {
    tvContent: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTvData.pending, (state) => {
        state.loading = "Loading";
      })
      .addCase(fetchTvData.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.tvContent = action.payload;
      })
      .addCase(fetchTvData.rejected, (state, action) => {
        state.loading = "Failed";
        state.error = action.error.message;
      });
  },
});

export default tvSlice.reducer;
