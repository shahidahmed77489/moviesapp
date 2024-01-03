import { configureStore } from "@reduxjs/toolkit";
import openLoginPageReducer from "./loginPageSlice";
import trendingReducer from "./trendingSlice";
import popularReducer from "./popularSlice";
import topRatedReducer from "./topratedSlice";
import trailerReducer from "./showTrailerSlice";

const store = configureStore({
  reducer: {
    openLogin: openLoginPageReducer,
    trendingData: trendingReducer,
    popularData: popularReducer,
    topRatedData: topRatedReducer,
    trailerdata: trailerReducer,
  },
});

export default store;
