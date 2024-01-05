import { configureStore } from "@reduxjs/toolkit";
import openLoginPageReducer from "./loginPageSlice";
import trendingReducer from "./trendingSlice";
import popularReducer from "./popularSlice";
import topRatedReducer from "./topratedSlice";
import similiarReducer from "./similiarSlice";
import recommendReducer from "./recommendSlice";
import searchMovieReducer from "./searchMovieSlice";
const store = configureStore({
  reducer: {
    openLogin: openLoginPageReducer,
    trendingData: trendingReducer,
    popularData: popularReducer,
    topRatedData: topRatedReducer,
    similiarData: similiarReducer,
    recommendData: recommendReducer,
    searchData: searchMovieReducer,
  },
});

export default store;
