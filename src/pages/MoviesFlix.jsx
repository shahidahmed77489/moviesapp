import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMoviesData } from "../utils/popularSlice";
import Movies from "../Components/Movies";
import { fetchData } from "../utils/trendingSlice";
import { fetchTopRatedMovies } from "../utils/topratedSlice";

const MoviesFlix = () => {
  const dispatch = useDispatch();
  const { popularmoviedata } = useSelector((state) => state.popularData);
  const { trendingmoviedata } = useSelector((state) => state.trendingData);
  const { toprateddata } = useSelector((state) => state.topRatedData);
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchPopularMoviesData());
    dispatch(fetchTopRatedMovies());
  }, []);

  return (
    <>
      <div className="top-0  text-white relative">
        <div className="bg-black opacity-70 w-full h-full absolute top-0 z-10"></div>
        <iframe
          className="w-full aspect-video relative"
          src="https://www.youtube.com/embed/R-zpu1ynrtU?si=J2fQZaTG53QjRV8M&autoplay=1&mute=1&reapeat=1"
        ></iframe>
        <div className="absolute top-[30%] text-center z-20 left-[20%]">
          <h1 className="text-8xl font-semibold">Welcome.</h1>
          <h2 className="text-2xl">
            Millions Of Movies , TV shows and people to discover. Explore now.
          </h2>
          <div className="relative my-4">
            <input
              type="text"
              placeholder="Search for a movie, tv show....."
              className="w-full py-2 px-4 rounded outline-none text-red-700"
            />
            <button className="absolute right-0 rounded bg-red-700  px-2 py-2">
              search Movie
            </button>
          </div>
        </div>
      </div>

      <div>
        <Movies data={trendingmoviedata} movieHeader={"Trending Movies"} />
        <Movies data={popularmoviedata} movieHeader={"Popular Movies"} />
        <Movies data={toprateddata} movieHeader={"Top Rated Movies"} />
      </div>
    </>
  );
};

export default MoviesFlix;
